import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { store } from '../../reducers';
// import { signOut } from '../../actions/AuthenticationActions';

// const backgroundImage = require('../../images/gradiente-bg.png');

// const meuAmbienteIcon = require('../../images/controlPanel/meu-ambiente-icon.png');
// const explorarPerguntasIcon = require('../../images/controlPanel/explorar-perguntas-icon.png');
// const minhasEstatisticasIcon = require('../../images/controlPanel/minhas-estatisticas-icon.png');
// const extratoDePontosIcon = require('../../images/controlPanel/extrato-de-pontos-icon.png');
// const catalogoDeRecompensasIcon = require('../../images/controlPanel/catalogo-recompensas-icon.png');
// const convidarAmigosIcon = require('../../images/controlPanel/convidar-amigo-icon.png');
// const ajudaIcon = require('../../images/controlPanel/ajuda-icon.png');
// const logoutIcon = require('../../images/controlPanel/logout-icon.png');
// const notificationIcon = require('../../images/controlPanel/notification-icon.png');
// const photoURL = 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/1779928_763752320304091_1205091089_n.jpg?oh=ef104676163182690f06c2cef36c14b1&oe=5A673104';

class ControlPanel extends Component {
	getCurrentPoints() {
		const curr = this.props.points -
			levelController.getInitialXpForThisLevel();

		// console.log('Current Points ControlPanel', curr);

		return curr;
	}

	getTotalPoints() {
		const total = levelController.getXpForNextLevelUp() -
			levelController.getInitialXpForThisLevel();

		// console.log('Total points ControlPanel', total);
		return total;
	}

	getPointsLeftToNExtLevel() {
		return this.getTotalPoints() - this.getCurrentPoints();
	}

	render() {
		return (
			// <Image source={backgroundImage} style={styles.backgroundImage}>
			<View style={styles.backgroundImage}>
				<Image source={{ uri: this.props.photoURL }} style={styles.photo} />
				{/* {<Image source={{ uri: photoURL }} style={styles.photo} />} */}

				<Text style={styles.nameText}>{this.props.name}</Text>

				<View style={styles.whiteLine} />

				<View style={styles.optionsMenu}>
					{/* <TouchableOpacity onPress={() => Actions.interactionLevel()}>
						<View style={styles.optionRow}>
							<Image source={meuAmbienteIcon} style={styles.optionIcon} />
							<Text style={styles.optionText}>Meu ambiente</Text>
						</View>
					</TouchableOpacity>
					
					<TouchableOpacity onPress={() => Actions.questionScene()}>
						<View style={styles.optionRow}>
							<Image source={explorarPerguntasIcon} style={styles.optionIcon} />
							<Text style={styles.optionText}>Explorar perguntas</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => false}>
						<View style={styles.optionRow}>
							<Image source={minhasEstatisticasIcon} style={styles.optionIcon} />
							<Text style={styles.optionText}>Minhas estatísticas</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => Actions.pointsStratum()}>
						<View style={styles.optionRow}>
							<Image source={extratoDePontosIcon} style={styles.optionIcon} />
							<Text style={styles.optionText}>Extrato de pontos</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => Actions.rewardsCatalog()}>
						<View style={styles.optionRow}>
							<Image source={catalogoDeRecompensasIcon} style={styles.optionIcon} />
							<Text style={styles.optionText}>Catálogo de recompensas</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => false}>
						<View style={styles.optionRow}>
							<Image source={convidarAmigosIcon} style={styles.optionIcon} />
							<Text style={styles.optionText}>Convidar amigos</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => false}>
						<View style={styles.optionRow}>
							<Image source={ajudaIcon} style={styles.optionIcon} />
							<Text style={styles.optionText}>Ajuda</Text>
						</View>
					</TouchableOpacity>
					
					<TouchableOpacity onPress={() => Actions.notificationTester()}>
						<View style={styles.optionRow}>
							<Image source={notificationIcon} style={styles.optionIcon} />
							<Text style={styles.optionText}>Testar notificações</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => this.props.signOut()}>
						<View style={styles.optionRow}>
							<Image source={logoutIcon} style={styles.optionIcon} />
							<Text style={styles.optionText}>Sair</Text>
						</View>
					</TouchableOpacity> */}

				</View>
			{/* </Image> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: null,
		alignItems: 'center'
	},
	container: {
		flex: 1,
		alignItems: 'center'
	},
	photo: {
		borderWidth: 3,
		borderColor: 'white',
		width: 95,
		height: 95,
		borderRadius: 95,
		marginTop: 30,
	},
	nameText: {
		fontFamily: 'Montserrat_Medium',
		fontSize: 18,
		color: 'white'
	},
	whiteLine: {
		borderColor: 'white',
		borderWidth: 0.5,
		alignSelf: 'stretch',
		marginHorizontal: 10,
		marginTop: 30,
		marginBottom: 16
	},
	optionsMenu: {
		flex: 1,
		alignSelf: 'stretch',
		paddingLeft: 30
	},
	optionRow: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		marginBottom: 16
	},
	optionText: {
		fontFamily: 'Montserrat_Regular',
		fontSize: 14,
		color: 'white'
	},
	optionIcon: {
		width: 18,
		height: 18,
		marginRight: 20,
		tintColor: 'white'
	}
});

const mapStateToProps = state => (
	{
		name: state.AuthenticationReducer.name,
		photoURL: state.AuthenticationReducer.photoURL,
		points: state.AuthenticationReducer.points,
		level: state.AuthenticationReducer.level
	}
);

// export default connect(mapStateToProps, { signOut })(ControlPanel);
export default connect(mapStateToProps, null)(ControlPanel);
