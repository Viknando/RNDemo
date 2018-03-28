import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';


import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import OnePage from './practice/01';
import TwoPage from './practice/02';

var Dimensions = require('Dimensions');


export default class TopicPage extends Component {
    render() {
        return (
            <ScrollableTabView
                initialPage={0}
                scrollWithoutAnimation={true}
                renderTabBar={() => <ScrollableTabBar
                    underlineColor='red'
                    activeTextColor='#fff'
                    inactiveTextColor='rgba(255, 255, 255, 0.7)'
                    underlineHeight={0}
                    textStyle={{fontSize: 15}}
                    backgroundColor='blue'
                    tabStyle={{paddingLeft: 12, paddingRight: 12}}
                />}
            >
                <OnePage tabLabel='1'/>
                <TwoPage tabLabel='2'/>
            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
    itemLayout: {flex: 1, alignItems: 'center', justifyContent: 'center'}
});