import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { store } from '../reducers/';

import {
    MODIFY_NAME,
    MODIFY_FIRST_NAME,
    MODIFY_EMAIL,
    MODIFY_PHOTO_URL,
    MODIFY_PHONE,
    MODIFY_PASSWORD,
    LOG_IN_OUT,
    AUTHENTICATE_USER_SUCCESS,
    AUTHENTICATE_USER_FAIL,
    SET_PROVIDER,
    SIGNUP_ONGOING,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SET_FIRST_ACCESS,
    AUTH_ONGOING,
    SIGN_OUT_ONGOING,
    SIGNOUT_SUCCESS,
    SIGNOUT_FAIL
} from '../actions/types';

export const modifyName = name => ({
    type: MODIFY_NAME,
    payload: name
});

export const modifyFirstName = firstName => ({
    type: MODIFY_FIRST_NAME,
    payload: firstName
});

export const modifyEmail = email => ({
    type: MODIFY_EMAIL,
    payload: email
});

export const modifyPhotoUrl = photoUrl => ({
    type: MODIFY_PHOTO_URL,
    payload: photoUrl
});

export const modifyPhone = phone => ({
    type: MODIFY_PHONE,
    payload: phone
});

export const modifyPassword = password => ({
    type: MODIFY_PASSWORD,
    payload: password
});

export const authenticateUser = (provider) => (
    dispatch => {
        Actions.logged();
        
        switch(provider) {
            case 'FACEBOOK':
                return authenticateWithFacebook(dispatch);
            default:
                return;
        };
    }
);

const authenticateWithFacebook = (dispatch) => {
    dispatch({ type: AUTH_ONGOING });

    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends'])
        .then(
            result => {
                if (result.isCancelled) {
                    console.log('Login was cancelled');
                } else {
                    console.log(`Login was a success: ${result.grantedPermissions.toString()}`);

                    connectFacebookWithFirebase(dispatch);
                }
            }, error => authenticateUserError(error, dispatch)
        );
};

const connectFacebookWithFirebase = (dispatch) => {
    AccessToken.getCurrentAccessToken()
        .then((accessTokenData) => {
            const credential = firebase.auth.FacebookAuthProvider
                .credential(accessTokenData.accessToken);
            firebase.auth().signInWithCredential(credential)
                .then((firebaseResult) => {
                    //promisse was successful
                    connectWithFirebaseDatabase(dispatch, firebaseResult, 'FACEBOOK');
                }, (error) => {
                    //Promisse was rejected
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('error', errorCode);

                    // The email of the user's account used.
                    const email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    const credential = error.credential;
                    // ...
                });
        }, (error => {
            console.log('Erro ao conectar login do Facebook ao Firebase', error);
        }));
};

const connectWithFirebaseDatabase = (dispatch, firebaseResult, provider) => {
    const emailB64 = b64.encode(firebaseResult.email);

    let userData = {
        display_name: firebaseResult.displayName,
        first_name: getFirstName(firebaseResult.displayName),
        email: firebaseResult.email,
        photo_url: firebaseResult.photoURL,
        level: 1,
        points: 0
    };

    firebase.database().ref('/users')
        .once('value', snapshopt => {
            if (!snapshopt.hasChild(`${emailB64}`)) {
                console.log(`First access for ${firebaseResult.email}`);

                dispatch({ type: SET_FIRST_ACCESS });
                firebase.database().ref(`/users/${emailB64}`).set(userData);
            } else {
                const points = snapshopt.child(`${emailB64}`).val().points;
                const level = snapshopt.child(`${emailB64}`).val().level;

                userData = { ...userData, points, level };
                // console.log('userData', userData);

                firebase.database().ref(`/users/${emailB64}`).set(userData);
            }
        })
        .then(value => {
            dispatch({ type: SET_PROVIDER, payload: provider });
            dispatch(modifyName(userData.display_name));
            dispatch(modifyFirstName(userData.first_name));
            dispatch(modifyEmail(userData.email));
            dispatch(modifyPhotoUrl(userData.photo_url));

            writeLoginData(firebaseResult, provider);

            authenticateUserSucess(dispatch);
        })
        .catch(err => {
            console.log('err', err);
            authenticateUserError(dispatch);
        });
};

const authenticateUserSucess = (dispatch) => {
    dispatch({ type: AUTHENTICATE_USER_SUCCESS });
    dispatch({ type: LOG_IN_OUT, payload: true });
};

const authenticateUserError = (error, dispatch) => {
    dispatch({ type: AUTHENTICATE_USER_FAIL, payload: error.message });
    
    Actions.pop();
    dispatch(modifyPassword(''));

    alert(error);
    console.log(`Authenticate user error: ${error.message}`);
};

const getFirstName = completeName => (completeName.split(' ')[0]);

async function writeLoginData(firebaseResult, provider) {
    const emailB64 = b64.encode(firebaseResult.email);

    console.log('Writing login on database');

    let data = {
        time: firebase.database.ServerValue.TIMESTAMP,
        provider,
        type: 'LOGIN'
    };

    // if (store.getState().AuthenticationReducer.firstAccess) {
    //     data = { ...data, firstAccess: 'true' };
    // }

    // if (store.getState().AppNavigationReducer.firstLaunch) {
    //     data = { ...data, firstLaunch: 'true' };
    // }

    firebase.database().ref(`/accesses/${emailB64}/`).push().set(data);
};
