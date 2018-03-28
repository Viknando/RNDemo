import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';


import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import NewsList from './NewsListComponent';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

var categories = [{"name": "时政", "alias": "Politics"}, {"name": "军事", "alias": "Military"}, {
    "name": "财经",
    "alias": "Finance"
}, {"name": "社会", "alias": "Society"}, {"name": "国际", "alias": "World"}, {
    "name": "娱乐",
    "alias": "Entertainment"
}, {"name": "体育", "alias": "Sport"}, {"name": "科技", "alias": "Tech"}, {"name": "生活", "alias": "Living"}];

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
                {categories.map((result,i,arr)=>{
                    let item=arr[i];
                    return <NewsList key={i} tabLabel={item.name}  category={item.alias} {...this.props}/>;
                })}

            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
    itemLayout: {flex: 1, alignItems: 'center', justifyContent: 'center'}
});