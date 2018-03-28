import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity,
} from 'react-native';
import MD5 from "react-native-md5";
import WebPage from '../web/WebPage';

export default class NewsListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            success: null,
            data: null,

        }
    }
    componentDidMount(){
        this.loadData(this.props.category)
    }


    loadData(category) {
        let _that = this;
        let timestamp = Date.parse(new Date());
        var m = "c1*************************5b" + timestamp + "S*************HG";
        let signature = MD5.hex_md5(m);
        fetch('http://api.xinwen.cn/news/hot?size=50&access_key=S*************HG&signature=' + signature + '&timestamp=' + timestamp+"&category="+category, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseData) => {
                _that.setState({
                    success: responseData.success,
                    data: responseData.data.news,
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data.news),
                });
            })
            .catch((error) => {
                alert(error)
            });
    }

    goWeb(url) {
        this.props.navigator.push({
            component: WebPage,
            params: {
                url: url,
            }
        })
    }

    _renderRow(obj) {
        return (
            <TouchableOpacity onPress={() => {
                this.goWeb(obj.url)
            }}>
                <View style={[{flex: 1, flexDirection: 'row',padding:5},styles.card]} key={obj.news_id}>
                    <View style={{flex: 1, paddingLeft: 5}}>
                        <Text style={{fontSize: 16}} numberOfLines={1}>{obj.title}</Text>
                        <Text style={{fontSize: 8, marginTop: 5}}>{obj.source}</Text></View>
                    <Image style={{width:40,height:40,resizeMode:'center'}} source={obj.thumbnail_img[0]?{uri:obj.thumbnail_img[0]}:require('../../res/imgs/ic_no_pic.png')}/>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    renderRow={(data) => this._renderRow(data)}
                    style={{paddingBottom: 30}}
                />
            </View>
        )
    }

}
const styles=StyleSheet.create({
    card:{
        backgroundColor:'white',
        padding:10,
        marginTop:4,
        marginLeft:6,
        marginRight:6,
        marginVertical:2,
        borderWidth:0.3,
        borderColor:'#dddddd',
        borderRadius:1,
        //iOS的阴影
        shadowColor:'#b5b5b5',
        shadowOffset:{width:3,height:2},
        shadowOpacity:0.4,
        shadowRadius:1,
        //Android的阴影
        elevation:2
    }
})