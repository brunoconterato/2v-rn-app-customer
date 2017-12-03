import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	Image,
	StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { authenticateUser } from '../actions/AuthenticationActions';

// const backgroundImage = require('../images/gradiente-bg-login.png');
// const logoImage = require('../images/Logo-Sign-UP.png');

const entrarComFacebook = require('../images/entrar-com-face.png');
const entrarComGoogle = require('../images/entrar-com-google.png');
const entrarComEmail = require('../images/entrar-com-email.png');

class LoginScene extends Component {
	render() {
		return (
			// <Image style={styles.backgroundImage} source={backgroundImage}>
				<View style={styles.container}>
                    <StatusBar backgroundColor='#009FE3' />
					<View style={styles.logoView}>
						<Image
							resizeMode="contain"
							style={styles.logoImage}
							// source={logoImage}
						/>
					</View>

					<View style={styles.loginButtons}>
						<TouchableOpacity onPress={() => this.props.authenticateUser('FACEBOOK')}>
							<Image
								resizeMode="contain"
								style={styles.loginButton}
								source={entrarComFacebook}
							/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => false}>
							<Image
								resizeMode="contain"
								style={styles.loginButton}
								source={entrarComGoogle}
							/>
						</TouchableOpacity>

						<View style={styles.orLine}>
							<View
								style={{
									flex: 1,
									borderBottomColor: '#FFF',
									borderBottomWidth: 1
								}}
							/>

							<View>
								<Text style={styles.orText}> ou </Text>
							</View>

							<View
								style={{
									flex: 1,
									borderBottomColor: '#FFF',
									borderBottomWidth: 1
								}}
							/>
						</View>

						<TouchableOpacity onPress={() => false}>
							<Image
								resizeMode="contain"
								style={styles.loginButton}
								source={entrarComEmail}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							style={{ flexDirection: 'row' }}
							onPress={() => Actions.loginEmail()}
						>
							<Text style={{ fontFamily: 'Montserrat-Light', fontSize: 16, color: '#FFF' }}>
								Já tem cadastro? 
							</Text>
							
							<Text
								style={{
									fontFamily: 'Montserrat-Medium',
									fontSize: 16,
									fontWeight: 'bold',
									color: '#FFF'
								}}
							> Clique aqui.</Text>
						</TouchableOpacity>

					</View>
				</View>
			// </Image>
		);
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: null,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#009FE3'
	},
	logoView: {
		marginTop: 70,
		marginBottom: 70
	},
	logoImage: {
		height: 160
	},
	loginButtons: {
		flex: 1,
		marginBottom: 50,
		flexDirection: 'column',
		marginHorizontal: 45,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	loginButton: {
		height: 48
	},
	orLine: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	orText: {
		fontSize: 18,
		color: '#FFF'
	}
});

const mapStateToProps = state => (
	{
		authenticationError: state.AuthenticationReducer.authenticationError
	}
);

export default connect(
	mapStateToProps, { authenticateUser }
)(LoginScene);
