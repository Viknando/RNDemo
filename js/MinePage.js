import React, {Component} from 'react';


import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import OnePage from './practice/01';
import TwoPage from './practice/02';
import ThreePage from './practice/03';
import FourPage from './practice/04';
import FivePage from './practice/05';
import SixPage from './practice/06';
import SevenPage from './practice/07';
import EightPage from './practice/08';
import NinePage from './practice/09';
import TenPage from './practice/10';
import ElevenPage from './practice/11';
import TwelvePage from './practice/12';
import ThirteenPage from './practice/13';


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
                <EightPage tabLabel='Image'/>
                <OnePage tabLabel='layout'/>
                <TwoPage tabLabel='label'/>
                <ThreePage tabLabel='search Textinput'/>
                <FourPage tabLabel='TouchableHighlight'/>
                <FivePage tabLabel='TouchableOpacity'/>
                <SixPage tabLabel='Image Carousel'/>
                <SevenPage tabLabel='alert'/>
                <NinePage tabLabel='no grideView'/>
                <TenPage tabLabel='loginPage'/>
                <ElevenPage tabLabel='Carousel figure'/>
                <TwelvePage tabLabel='ListView'/>
                <ThirteenPage tabLabel='sectionList'/>
            </ScrollableTabView>
        )
    }
}