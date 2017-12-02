import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import Routes from './src/Routes';
import { store } from './src/reducers';

export default class App extends Component {
	componentWillMount() {
		// Initialize Firebase
		const config = {
			apiKey: 'AIzaSyAkjkmGYnpVxf_1oAQ0ltGAp6sRw043kxQ',
			authDomain: 'enjoy2v.firebaseapp.com',
			databaseURL: 'https://enjoy2v.firebaseio.com',
			projectId: 'enjoy2v',
			storageBucket: 'enjoy2v.appspot.com',
			messagingSenderId: '29340316842'
		};
		if (!firebase.apps.length) {
			firebase.initializeApp(config);
		}

		console.ignoredYellowBox = [
			'Setting a timer',
		];
	}

	render() {
		return (
			<Provider store={store}>
				<Routes />
			</Provider>
		);
	}
}
