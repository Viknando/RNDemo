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
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';


var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//导入JSON数据
var WineList = require('./data/12.json');//数组

export default class App extends Component{
    constructor(props){
        super(props);
        var ds=new ListView.DataSource({rowHasChanged(r1,r2){r1!==r2}});
        this.state={
            dataSource:ds.cloneWithRows(WineList),
        }
    }
    render(){
        return(
            <ListView style={styles.listViewStyle}
            dataSource={this.state.dataSource}
                      renderRow={this.renderRow.bind(this)}
            />
        )
    }
    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(rowID)}}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri:rowData.image}} style={styles.leftImageStyle}/>
                    <View style={styles.wineInfoViewStyle}>
                        <Text style={styles.productNameStyle}>{rowData.name}</Text>
                        <Text style={styles.moneyAmountStyle}>¥{rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}



const styles = StyleSheet.create({

    listViewStyle:{
        marginTop:25,
    },

    cellViewStyle:{

        height:70,
        flexDirection:'row',
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8',
    },

    wineInfoViewStyle:{

        backgroundColor:'white',
        justifyContent:'space-around',
    },

    leftImageStyle:{
      width:68,
      height:68,
      marginRight:15,
      marginLeft:15,
    },

    productNameStyle:{

      fontSize:14,
      width:width*0.7,
    },

    moneyAmountStyle:{
       color:'red',
    },

});