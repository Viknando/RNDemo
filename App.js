/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Navigator from 'react-native-deprecated-custom-components';
import HomePage from './js/HomePage';
export default class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component {...route.params} navigator={navigator}/>
        );
    }

    render() {
        return (
            <Navigator.Navigator
                initialRoute={{
                    name: 'HomePage',
                    component:HomePage
                }}
                renderScene={(e, i)=>this._renderScene(e, i)}
            />
        );
    }
}
