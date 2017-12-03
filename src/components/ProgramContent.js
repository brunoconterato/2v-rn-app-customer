import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { setSceneTitle, modifyStartLocation, modifyEndLocation } from '../actions/AppNavigationActions';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux'

import { TextField } from 'react-native-material-textfield';

// import { MAP_STYLE } from '../../data/MapStyle';

class ProgramContent extends Component {
    componentWillMount() {
        this.props.setSceneTitle('Programação');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{paddingHorizontal: 10}}>
                    <TextField 
                        autoCapitalize='none' 
                        autoComplete='none'
                        label='Local de partida' 
                        tintColor='#FFF'
                        baseColor='#FFF'
                        value={this.props.startLocation} 
                        onChangeText={(text) => this.props.modifyStartLocation(text)} 
                    />
                    <TextField 
                        autoCapitalize='none' 
                        autoComplete='none'
                        label='Local de chegada' 
                        tintColor='#FFF'
                        baseColor='#FFF'
                        value={this.props.endLocation} 
                        onChangeText={(text) => this.props.modifyEndLocation(text)} 
                    />
                    <TextField 
                        autoCapitalize='none' 
                        autoComplete='none'
                        label='Horário de chegada no local' 
                        tintColor='#FFF'
                        baseColor='#FFF'
                        value={this.props.endLocation} 
                        onChangeText={(text) => this.setState({text})} 
                    />
                </View>
                <View style={{width: '100%', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.goButton} onPress={() => {Actions.map(); Alert.alert('Viagem','Viagem programada. Seu motorista chega em 2 minutos')}}>
                        <Text style={styles.buttonText}>Concluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#2F80ED',
    },
    goButton: {
        marginTop: 40,
        backgroundColor: '#F15A24',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        width: 220,
        height: 40,
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
})(ProgramContent);
