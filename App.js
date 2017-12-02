import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './src/Routes';
import reducers from './reducers';

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

		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<Routes />
			</Provider>
		);
	}
}
