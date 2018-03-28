/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'

import {
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    tip(){
        Alert.alert(
            '提示',
            '选择学习React Native',
            [
                {text: 'Ask me later', onPress: () => alert('你点击了Ask me later按钮')},
                {text: 'Cancel', onPress: (e) => alert(e)},
                {text: 'iiiiiii', onPress:function(e){
                    alert(e);
                }},
                {text: 'OK', onPress(){
                    alert('你点击了OK按钮')
                }},
            ],
            { cancelable: false }
        )
    }
    input(){
        Alert.alert(
            '提示',
            '选择学习React Native',
            [
                {text: 'Cancel', onPress: (e) => alert(e)},
                {text: 'OK', onPress(){
                    alert('你点击了OK按钮')
                }},
            ],
            { cancelable: false }
        )
    }
    render(){

            return(

                <View style={styles.container}>
                    <Text style={styles.item} onPress={this.tip.bind(this)}>3按钮提示框</Text>
                    <Text style={styles.item} onPress={this.input.bind(this)}>2按钮提示框</Text>
                </View>
            )

    }
}

var styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:30,
    },
    item:{
        marginTop:10,
    }
});