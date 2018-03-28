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
            <View style={styles.flex}>
                <Text>新闻列表</Text>
                <List title='宇航员在太空宣布“三体”获奖'/>
                <List title='NASA发短片纪念火星征程50年'/>
                <List title='男生连续做一周苦瓜吃吐女友'/>
                <List title='女童遭鲨鱼袭击又下海救伙伴'/>
                <ImportantNews newss={news}/>
            </View>
        )
    }
}

export const news = [
    '1、刘慈欣《三体》获“雨果奖”为中国作家首次',
    '2、京津冀协同发展定位明确：北京无经济中心表述',
    '3、好奇宝宝第一次淋雨，父亲用镜头记录了下来',
    '4、京津冀协同发展定位明确：:父亲用镜头记录了下来'
];

class List extends Component{
   render(){
       return(
           <View style={styles.list_item}>
               <Text style={styles.list_item_font}>{this.props.title}</Text>
           </View>
       )
   }
}

class ImportantNews extends Component{
    show(title){
        alert(title)
    }
    render(){
        var news=[];
        for(var i in this.props.newss){
            var text=(
                <Text key={i} onPress={this.show.bind(this,this.props.newss[i])} numberOfLines={2} style={styles.new_item}>
                    {this.props.newss[i]}
                </Text>
            );
            news.push(text)
        }
        return(
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
        marginTop:20,
    },

    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        justifyContent:'center',
    },

    list_item_font:{
        fontSize:16,
    },

    news_title:{
        marginTop:20,
        fontSize:30,
        fontWeight:'bold',
        color:'#CD1D1C',
        marginLeft:10,
        marginTop:15,
    },

    new_item:{
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        lineHeight:20,
    }
});