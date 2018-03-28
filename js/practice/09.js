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
} from 'react-native';

// json数据
var BadgeDate=require('./data/09.json');
var Dimensions=require('Dimensions');
var {width,height}=Dimensions.get('window');

//定义全局变量
var cols=3;
var boxW=100;
//设置宽高
var vMargin=(width-cols*boxW)/(cols+1);
var hMargin=25;

export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/*返回6个包, this代表这个类,调用类里面的方法,还不能缺,缺了this编译不过 */}
                {this.returnAllBadge()}
            </View>
        )
    }

    returnAllBadge(){
        var allBadge=[];
        for(var i=0;i<BadgeDate.data.length;i++){
            var badge=BadgeDate.data[i];
            allBadge.push(
                <View key={i} style={styles.outViewStyle}>
                    <Image source={{uri:badge.icon}} style={styles.imageStyle}/>
                    <Text style={styles.mainTitleStyle}>
                        {badge.title}
                    </Text>
                </View>
            )
        }
        return allBadge;
    }
}


var styles = StyleSheet.create({

    container: {
        marginTop:vMargin,
        flexDirection:'row',
        flexWrap:'wrap',
    },
    outViewStyle:{
        backgroundColor:'red',
        alignItems:'center',
        width:boxW,
        height:boxW,
        marginLeft:vMargin,
        marginTop:hMargin,
    },
    imageStyle:{
        backgroundColor:'transparent',
        width:80,
        height:80,
    },
    mainTitleStyle:{
        backgroundColor:'gray',
    }
});