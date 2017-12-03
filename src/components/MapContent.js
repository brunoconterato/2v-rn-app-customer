import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { setSceneTitle, modifyStartLocation, modifyEndLocation } from '../actions/AppNavigationActions';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';


// import { MAP_STYLE } from '../../data/MapStyle';

class MapContent extends Component {
    componentWillMount() {
        this.props.setSceneTitle('V2');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.destinyView}>
                    <Text style={styles.text}>Local de partida</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.props.modifyStartLocation(text)}
                        value={this.props.startLocation}
                    />
                    <Text style={styles.text}>Local de chegada</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.props.modifyEndLocation(text)}
                        value={this.props.endLocation}
                    />
                </View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -16.718470,
                        longitude: -49.268932,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    // customMapStyle={MAP_STYLE}
                />
                {/* <View styles={{ zIndex: 2}}> */}
                <TouchableOpacity style={styles.goButton} onPress={() => Actions.program()}>
                    <Text style={styles.buttonText}>Definir local</Text>
                </TouchableOpacity>
                {/* </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    calloutContainer: {
        flex: 1,
        width: 275 //Ao modificar width, tem que modificar no BubbleCallout tb
                    //TODO: criar um arquivo de constantes
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    destinyView: {
        alignItems: 'stretch',
        paddingHorizontal: 40
    },
    map: {
        flex: 1,
        zIndex: 0
    },
    goButton: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: 'green',
        paddingHorizontal: 50,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200
    },
    buttonText: {
        color: 'white'
    }
});

const mapStateToProps = (state) => ({
    startLocation: state.AppNavigationReducer.startLocation,
    endLocation: state.AppNavigationReducer.endLocation,
});
  
export default connect(mapStateToProps,
{
    setSceneTitle,
    modifyStartLocation,
    modifyEndLocation
})(MapContent);
