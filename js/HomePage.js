import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import MainPage from './main/MainPage'
import NewsPage from './news/NewsPage'
import MinePage from './MinePage'

//需要导出的常量
export const FLAG_TAB = {
    flag_MainTab: 'flag_MainTab',
    flag_NewsTab: 'flag_NewsTab',
    flag_MineTab: 'flag_MineTab'
}

export default class HomePage extends Component {

    constructor(props) {

        super(props);

        let selectedTab = this.props.selectedTab ? this.props.selectedTab : FLAG_TAB.flag_MainTab;
        this.state = {
            selectedTab: selectedTab,
        }

    }

    onSelected(selectedTab) {
        this.setState({
            selectedTab: selectedTab,
        })
    }


    _renderTab(Component, selectedTab, title, renderIcon) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderIcon={() => <Image style={styles.tabItemImageStyle}
                                         source={renderIcon}/>}
                renderSelectedIcon={() => <Image
                    style={[styles.tabItemImageStyle,styles.tabSelectedStyle]}
                    source={renderIcon}/>}
                onPress={() => this.onSelected(selectedTab)}>
                <Component {...this.props}/>
            </TabNavigator.Item>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <TabNavigator
                    tabBarStyle={{opacity: 0.9,}}
                    sceneStyle={{paddingBottom: 0}}
                >
                    {this._renderTab(MainPage, FLAG_TAB.flag_MainTab, '热点', require('../res/imgs/ic_trending.png'))}
                    {this._renderTab(NewsPage, FLAG_TAB.flag_NewsTab, '新闻', require('../res/imgs/ic_news.png'))}
                    {this._renderTab(MinePage, FLAG_TAB.flag_MineTab, '我的', require('../res/imgs/ic_my.png'))}


                </TabNavigator>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    tabItemImageStyle: {
        width: 24,
        height: 24,
    },
    tabSelectedStyle: {
        tintColor:'blue'
    },
    selectedTitleStyle:{
        color:'blue'
    }
});