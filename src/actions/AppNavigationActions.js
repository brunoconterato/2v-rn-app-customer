import { Actions } from 'react-native-router-flux';
import { store } from '../reducers';

import {
    SET_FIRST_LAUNCH
} from './types';

export const setFirstLaunch = (bool) => ({
    type: SET_FIRST_LAUNCH,
    payload: bool
});

export const goToLoggedArea = (dispatch) => {
    const { firstLaunch } = store.getState().AppNavigationReducer;
    const { firstAccess } = store.getState().AuthenticationReducer;

    // console.log('firstLaunch', firstLaunch);
    // console.log('firstAccess', firstAccess);

    dispatch({ type: 'go_to_logged_area' });

    if (firstLaunch || firstAccess) {
        Actions.reset('onboardingScene');

        dispatch({ type: SET_FIRST_LAUNCH, payload: false });
    } else {
        Actions.reset('moodSelection');
    }
};

export const goToUnloggedArea = (dispatch) => {
    Actions.reset('login');
    // Actions.login();
    
    dispatch({ type: 'go_to_unlogged_area' });
};

export const setSceneKey = (sceneKey) => ({
    type: 'set_scene_key',
    payload: sceneKey
});

export const setScreenTitle = title => ({
    type: 'set_scene_title',
    payload: title
});
