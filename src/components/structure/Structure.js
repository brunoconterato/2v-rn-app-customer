import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import MyDrawer from './MyDrawer';
import MyNavigationBar from './MyNavigationBar';

export default class Structure extends Component {
    render() {
        return (
            <MyDrawer>
                <StatusBar backgroundColor='#303030' />
                
                <MyNavigationBar />

                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
            </MyDrawer>
        );
    }
}
