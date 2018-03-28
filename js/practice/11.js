/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

//屏幕尺寸
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var ImageData = require('./data/11.json');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: 2000,
            currentPage: 0,
        }
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    onScrollBeginDrag() {
        clearTimeout(this.timer);
    }

    onScrollEndDrag() {
        this.startTimer();
    }

    startTimer() {
        var scrollView = this.refs.scrollView;
        var imgCount = ImageData.data.length;
        _that=this;
        this.timer = setTimeout( ()=> {
            var activePage = 0;
            if ((_that.state.currentPage + 1) >= imgCount) {
                activePage=0;
            } else {
                activePage = _that.state.currentPage + 1;
            }
            _that.setState({
                currentPage: activePage,
            })
            var offsetX = activePage * width;
            scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});
        }, this.state.duration);
    }

    onAnimationEnd(e) {
        var offsetX = e.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(offsetX / width);
        this.setState({
            currentPage: currentPage,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView ref='scrollView'
                            horizontal={true}
                    //隐藏水平滚动条
                            showsHorizontalScrollIndicator={false}
                    //自动分页
                            pagingEnabled={true}
                    //当一帧滚动结束
                            onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                    //开始拖拽
                            onScrollBeginDrag={this.onScrollBeginDrag.bind(this)}
                            onScrollEndDrag={this.onScrollEndDrag.bind(this)}>
                    {this.renderAllImage()}
                    <View style={styles.pageTxtStyle}>
                        {this.renderTxt()}
                    </View>
                </ScrollView>
                <View style={styles.pageViewStyle}>
                    {this.renderPageCircle()}
                </View>

            </View>
        )
    }

    renderAllImage() {
        var allImage = [];
        var imgsArr = ImageData.data;
        for (var i = 0; i < imgsArr.length; i++) {
            var imgItem = imgsArr[i];
            allImage.push(<Image key={i} source={{uri: imgItem.img}} style={{width: width, height: 200}}/>)
        }
        return allImage;
    }

    renderPageCircle() {
        var indicatorArr = [];
        var style;
        var imgsArr = ImageData.data;
        for (var i = 0; i < imgsArr.length; i++) {
            style = (i == this.state.currentPage) ? {color: 'red'} : {color: '#ffffff'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 25}, style]}>&bull;</Text>
            )
        }
        return indicatorArr;
    }
    renderTxt() {
        var allTxt = [];
        var txtArr = ImageData.data;
        for (var i = 0; i < txtArr.length; i++) {
            allTxt.push(
                <Text key={i} style={[{fontSize: 16,width:width,color:'gray'}]}>{txtArr[i].title}</Text>
            )
        }
        return allTxt;
    }

}


var styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    pageViewStyle:{
        width:width,
        height:25,
        backgroundColor:'rgba(0,0,0,0.4)',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center',
    },
    pageTxtStyle:{
        height:25,
        backgroundColor:'transparent',
        position:'absolute',
        bottom:25,
        flexDirection:'row',
        alignItems:'center',
    },

});