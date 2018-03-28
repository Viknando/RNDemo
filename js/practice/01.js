/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.item,styles.center]}>
                    <Text style={styles.font}>酒店</Text>
                </View>
                <View style={[styles.item,styles.lineLeftRight]}>
                    <View style={[styles.center,styles.flex,styles.lineCenter]}>
                        <Text style={styles.font}>
                            海外酒店
                        </Text>
                    </View>
                    <View style={[styles.center,styles.flex]}>
                        <Text style={styles.font}>
                            特惠酒店
                        </Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={[styles.center,styles.flex,styles.lineCenter]}>
                        <Text style={styles.font}>
                            团购
                        </Text>
                    </View>
                    <View style={[styles.center,styles.flex]}>
                        <Text style={styles.font}>
                            客栈
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginLeft:5,
        marginRight:5,
        borderRadius:5,
        padding:2,

        // borderColor:'blue',
        // borderWidth:1,
        flexDirection:'row',
        backgroundColor:'#FF0067'
    },
    item:{
        flex:1,
        height:80
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    font:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    flex:{
        flex:1
    },
    lineLeftRight:{
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor:'#fff'
    },
    lineCenter:{
        borderBottomWidth:1,
        borderColor:'#fff'
    }
});