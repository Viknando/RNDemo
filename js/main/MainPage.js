import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity,
} from 'react-native';
import MD5 from "react-native-md5";

// export const tabs=[
//     {api: apilist.RECENT_TOP_API, apiName: 'RECENT_TOP_API', tabLable: '最新'},
//     {api: apilist.POP_TOPIC_API, apiName: 'POP_TOPIC_API', tabLable: '最热'},
//     {api: apilist.NO_REPLY_API, apiName: 'NO_REPLY_API', tabLable: '沙发'},
//     {api: apilist.EXEC_TOPIC_API, apiName: 'EXEC_TOPIC_API', tabLable: '精华'}];


export default class MainPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            success: null,
            data: null,

        }
        this.loadData();
    }

    loadData() {
        let _that = this;
        let timestamp = Date.parse(new Date());
        var m = "c1*************************5b" + timestamp + "S*************HG";
        let signature = MD5.hex_md5(m);
        fetch('http://api.xinwen.cn/news/hot?size=100&access_key=S*************HG&signature=' + signature + '&timestamp=' + timestamp, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseData) => {
                _that.setState({
                    success: responseData.success,
                    data: responseData.data.news,
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data.news),
                });
            })
            .catch((error) => {
                alert(error)
            });
    }

    goWeb(url) {
        alert(url)
    }

    _renderRow(obj) {
        return (
            <TouchableOpacity onPress={() => {
                this.goWeb(obj.url)
            }}>
                <View style={{flex: 1}} key={obj.news_id}>
                    <Text>{obj.title}</Text>
                    <Text>{obj.source}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    renderRow={(data) => this._renderRow(data)}
                    style={{paddingBottom:30}}
                />
            </View>
        )
    }
}