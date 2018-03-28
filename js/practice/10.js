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
    Image,
    TextInput,
} from 'react-native';

//屏幕尺寸
var Dimensions=require('Dimensions');
var {width,height}=Dimensions.get('window');

export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
               <Image source={{uri:'https://vczero.github.io/ctrip/guo_1.jpg'}} style={styles.headerImage}/>
                <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle}/>
                <TextInput placeholder={'请输入密码'} password={true} style={styles.textInputStyle}/>
                <View style={styles.loginBtnStyle}>
                    <Text>登录</Text>
                </View>
                <View style={styles.settingStyle}>
                    <Text>忘记密码</Text>
                    <Text>注册</Text>
                </View>
                <View style={styles.otherLoginStyle}>
                    <Text>其他登录方式:</Text>
                    <Image source={{uri:'https://vczero.github.io/ctrip/guo_2.jpg'}} style={styles.otherLoginImageStyle}/>
                    <Image source={{uri:'https://vczero.github.io/ctrip/guo_3.jpg'}} style={styles.otherLoginImageStyle}/>
                    <Image source={{uri:'https://vczero.github.io/ctrip/guo_4.jpg'}} style={styles.otherLoginImageStyle}/>
                </View>
            </View>
        )
    }

}


var styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        alignItems:'center',
        backgroundColor:'#f9ffff',
    },
    headerImage:{
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:2,
        borderColor:'orange',
        marginTop:50,
        marginBottom:40,
    },
    textInputStyle:{
        height:40,
        width:width*0.8,
        backgroundColor:'white',
        marginBottom:2,
        textAlign:'center',
    },
    loginBtnStyle:{
        flexDirection:'row',
        height:35,
        width:width*0.8,
        backgroundColor:'green',
        marginTop:30,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
    },
    settingStyle:{
        width:width*0.8,
        backgroundColor:'transparent',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    otherLoginStyle:{
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        left:80,
    },
    otherLoginImageStyle:{
        width:30,
        height:30,
        borderRadius:15,
        marginLeft:8,
    }

});