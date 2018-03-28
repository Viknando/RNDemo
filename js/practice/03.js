/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

class Search extends Component{

    //this.state.vall will be null if no define params in constructor
    constructor(props){
        super(props)
        this.state={
            show:false,
            vall:null,
        }
    }

    getValue(txt){
        var value=txt;

        this.setState({
            show:true,
            vall:value,
        })
    }

    hiide(val){
        this.setState({
            show:false,
            vall:val,
        })
    }

    render(){
        return(
            <View style={styles.flex}>
                <View style={[styles.flexDirection,styles.inputHeight]}>
                    <View style={styles.flex}>
                        <TextInput style={styles.input} returnKeyType="search" placeholder="请输入关键词" onEndEditing={this.hiide.bind(this,this.state.vall)} value={this.state.vall} onChangeText={this.getValue.bind(this)}/>
                    </View>
                    <View style={styles.btn}>
                        <Text style={styles.search} onPress={this.hiide.bind(this,this.state.vall)}>搜索</Text>
                    </View>
                </View>
                {this.state.show?<View sytle={styles.result}>
                    <Text onPress={this.hiide.bind(this,this.state.vall + '哈')} style={styles.item} numberOfLines={1}>{this.state.vall}哈</Text>
                    <Text onPress={this.hiide.bind(this,this.state.vall + '哈哈哈哈哈哈哈哈')} style={styles.item} numberOfLines={1}>{this.state.vall}哈哈哈哈哈哈哈哈哈哈</Text>
                    <Text onPress={this.hiide.bind(this,this.state.vall + '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈')} style={styles.item} numberOfLines={2}>{this.state.vall}哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</Text>
                    <Text onPress={this.hiide.bind(this,this.state.vall + '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈')} style={styles.item} numberOfLines={3}>{this.state.vall}哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</Text>
                    <Text onPress={this.hiide.bind(this,this.state.vall + '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈')} style={styles.item} numberOfLines={4}>{this.state.vall}哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</Text>
                </View>:null}
            </View>
        )
    }
}

export default class App extends Component{
    render(){
        return(
            <View style={[styles.flex,styles.topStatus]}>
                <Search/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    flexDirection:{
        flexDirection:'row'
    },
    topStatus:{
        marginTop:30,
    },
    inputHeight:{
        height:45,
    },
    input:{
        height:45,
        borderWidth:1,
        marginLeft:5,
        paddingLeft:5,
        borderColor:'#ccc',
        borderRadius:4,
    },
    btn:{
        width:55,
        marginLeft:-4,
        marginRight:5,
        backgroundColor:'#23beff',
        height:45,
        justifyContent:'center',//竖直居中
        alignItems:'center',//横向居中
        borderTopRightRadius:4,
        borderBottomRightRadius:4,
    },
    result:{
        marginTop:1,
        marginLeft:5,
        marginRight:5,
        height:200,
        borderColor:'#ccc',
        borderTopWidth:1,
    },
    item:{
        fontSize:16,
        padding:5,
        paddingTop:10,
        paddingBottom:10,
        borderWidth:1,
        borderColor:'#ddd',
        borderTopWidth:0,
        marginLeft:5,
        marginRight:5,
    }

});