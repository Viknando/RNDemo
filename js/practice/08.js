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
    Image
} from 'react-native';

export default class image_demo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Nativ!
                </Text>
                <Image source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1104142377,1692686148&fm=27&gp=0.jpg'}} style={styles.imageStyle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    toggleWeightText: {
        backgroundColor: '#ffaaaa',
        marginTop: 5,
    },
    changeSizeText: {
        backgroundColor: '#aaaaff',
        marginTop: 5,
    },
    imageContainer: {
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'gray',
        alignItems:'center'
    },
    imageStyle: {
        width:100,
        height:100,

    },
    textStyle: {
        fontSize: 20,
    }
});