import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { connect } from 'react-redux';

const menuIcon = require('../../images/menu-icon.png');
// const logotipo = require('../../images/Logotipo.png');
// const topBarGradient = require('../../images/top-bar-gradient.png');

class MyNavigationBar extends Component {
    render() {
        return (
            <View style={styles.background}>
            {/* // <Image
            //     source={topBarGradient}
            //     style={styles.background}
            // > */}
                <View style={styles.container}>
                    <View style={styles.leftButtonView}>
                        <TouchableOpacity onPress={() => this.props.openControlPanel()}>
                            <Image
                                style={styles.leftButton}
                                source={menuIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.titleView}>{this.props.title}</Text>
                </View>
                {this.props.children}
            {/* // </Image> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        height: 60,
        width: null,
        paddingBottom: 6
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        color: 'white'
    },
    logotipo: {
        width: 105,
        resizeMode: 'center'
    },
    leftButton: {
        height: 22,
        width: 22,
        marginLeft: 14
    },
    rightButton: {
        height: 22,
        width: 22,
        marginRight: 14
    }
});

const mapStateToProps = state => (
	{
		sceneTitle: state.AppNavigationReducer.sceneTitle
	}
);

export default connect(mapStateToProps, null)(MyNavigationBar);
