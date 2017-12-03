import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { setSceneTitle, modifyStartLocation, modifyEndLocation } from '../actions/AppNavigationActions';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux'

// import { MAP_STYLE } from '../../data/MapStyle';

class ProgramContent extends Component {
    componentWillMount() {
        this.props.setSceneTitle('Programação');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Local de partida</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.props.modifyStartLocation({text})}
                    text={this.props.startLocation}
                />
                <Text style={styles.text}>Local de chegada</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.props.modifyEndLocation({text})}
                    text={this.props.endLocation}
                />
                <Text style={styles.text}>Horário de chegada no destino</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    text={this.props.endLocation}
                />
                <TouchableOpacity style={styles.goButton} onPress={() => Actions.program()}>
                    <Text style={styles.buttonText}>Definir local</Text>
                </TouchableOpacity>
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
    goButton: {
        marginTop: 40,
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
})(ProgramContent);
