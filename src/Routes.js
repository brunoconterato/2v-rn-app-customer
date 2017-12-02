import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScene from './components/LoginScene';
import LoggedArea from './components/LoggedArea';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene
                        key='login'
                        component={LoginScene}
                        title='login'
                    />
                    <Scene
                        key='logged'
                        component={LoggedArea}
                        title='login'
                    />
                </Scene>
            </Router>
        );
    }
}
