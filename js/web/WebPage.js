import React, {Component} from 'react';
import {
    StyleSheet,
    WebView,
} from 'react-native';

export default class WebPage extends Component{
    constructor(props){
        super(props);
        this.state={
            url:this.props.url,
        }
    }
    render(){
        return(
            <WebView style={{flex:1}}
                     source={{uri: this.state.url}}/>
        )
    }

}