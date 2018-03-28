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
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

export default class App extends Component{
    show(txt){
        alert(txt)
    }
    render(){
        return(
            <View style={[styles.flex]}>
                <TouchableOpacity
                    onPress={this.show.bind(this,'入门')}
                >
                    <Text style={styles.item}>
                        React Native入门
                    </Text>
                </TouchableOpacity>

                <TouchableHighlight
                    onPress={this.show.bind(this,'图灵出版')}
                >
                    <Text style={styles.item}>
                        图灵出版
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    flex:{
        flex:1,
        marginTop:35,
    },
    item:{
        fontSize:20,
        marginLeft:5,
        color:'#434343',

    },
    btn:{
        marginLeft:30,
        marginTop:30,
        width:100,
        height:30,
        backgroundColor:'#18b4ff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
    }

});