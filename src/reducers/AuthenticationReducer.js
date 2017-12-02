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
    SIGNOUT_FAIL,
    MODIFY_EMAIL_ERROR,
    MODIFY_PASSWORD_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    firstName: '',
    email: '',
    photoURL: '',
    phone: '',
    password: '',
    signupOngoing: false,
    signupError: '',
    authenticationError: '',
    provider: '',
    // firstAccess: false,
    authOngoing: false,
    isLoggedIn: false,
    signoutOngoing: false,
    signout_success: false,
    signout_fail: false,
    emailError: '',
    passwordError: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFY_NAME:
            return { ...state, name: action.payload };
        case MODIFY_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case MODIFY_EMAIL:
            return { ...state, email: action.payload };
        case MODIFY_PHOTO_URL:
            return { ...state, photoURL: action.payload };
        case MODIFY_PHONE:
            return { ...state, phone: action.payload };
        case MODIFY_PASSWORD:
            return { ...state, password: action.payload };

        case AUTH_ONGOING:
            return { ...state, authOngoing: true };
        case LOG_IN_OUT:
            return { ...state, isLoggedIn: action.payload };
        case AUTHENTICATE_USER_SUCCESS:
            return { ...state, authenticationError: '', authOngoing: false };
        case AUTHENTICATE_USER_FAIL:
            return { ...state, authenticationError: action.payload, authOngoing: false };
        case SET_PROVIDER:
            return { ...state, provider: action.payload };

        case SIGNUP_ONGOING:
            return { ...state, signupOngoing: true };
        case SIGNUP_SUCCESS:
            return { ...state, signupError: '', signupOngoing: false };
        case SIGNUP_FAIL:
            return { ...state, signupError: action.payload, signupOngoing: false };
        case SET_FIRST_ACCESS:
            return { ...state, firstAccess: true };

        case SIGN_OUT_ONGOING:
            return { ...state, signoutOngoing: true };
        case SIGNOUT_SUCCESS:
            return { ...INITIAL_STATE, signout_success: true };
        case SIGNOUT_FAIL:
            return { ...state, signoutOngoing: false, signout_fail: true };


        case MODIFY_EMAIL_ERROR:
            return { ...state, emailError: action.payload };
        case MODIFY_PASSWORD_ERROR:
            return { ...state, passwordError: action.payload };
        default:
            return state;
    }
};
