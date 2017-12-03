import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScene from './components/LoginScene';
import MapScene from './components/MapScene';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene
                        key='login'
                        component={LoginScene}
                        title='login'
                        hideNavBar
                    />
                    <Scene
                        key='map'
                        component={MapScene}
                        title='Mapa'
                        hideNavBar
                    />
                </Scene>
            </Router>
        );
    }
}
