import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { setScreenTitle } from '../actions/AppNavigationActions';
import { connect } from 'react-redux';

class MapContent extends Component {
    componentWillMount() {
        this.props.setScreenTitle('V2');
    }

    render() {
        return (
            <View style={{ flex: 1, paddingHorizontal: 10, backgroundColor: 'white' }}>
                <Text>Map content</Text>
            </View>
        );
    }
}

export default connect(null, { setScreenTitle })(MapContent);
