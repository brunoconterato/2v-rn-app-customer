import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { setSceneTitle, modifyStartLocation, modifyEndLocation } from '../actions/AppNavigationActions';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';



// import { MAP_STYLE } from '../../data/MapStyle';

class MapContent extends Component {
    componentWillMount() {
        this.props.setSceneTitle('V2');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ padding: 20 }}>
                    <View>
                        <TextField 
                            autoCapitalize='none' 
                            autoComplete='none'
                            label='Local de partida' 
                            tintColor='#FFF'
                            baseColor='#FFF'
                            value={this.props.startLocation} 
                            onChangeText={(text) => this.props.modifyStartLocation(text)} 
                        />
                    </View>
                    <View>
                        <TextField 
                            autoCapitalize='none' 
                            autoComplete='none'
                            label='Local de chegada' 
                            tintColor='#FFF' 
                            baseColor='#FFF'
                            value={this.props.endLocation} 
                            onChangeText={(text) => this.props.modifyEndLocation(text)} 
                        />
                    </View>
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
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.goButton} onPress={() => Actions.program()}>
                        <Text style={styles.buttonText}>Definir local</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    calloutContainer: {
        flex: 1,
        width: 275 
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: '#009FE3'
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
        zIndex: 1,
        height: 40,
        width: 250,
        borderRadius: 4,
        backgroundColor: '#F15A24',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18
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
