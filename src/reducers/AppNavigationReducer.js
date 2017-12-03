import { SET_FIRST_LAUNCH } from '../actions/types';

const INITIAL_STATE = {
    firstLaunch: false,
    logged: false,
    sceneTitle: '',
    sceneKey: '',

    startLocation: '',
    endLocation: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_FIRST_LAUNCH:
            return { ...state, firstLaunch: action.payload };

        case 'set_scene_key':
            return { ...state, sceneKey: action.payload };
        case 'set_scene_title':
            return { ...state, sceneTitle: action.payload };

        
        case 'modify_start_location':
            return { ...state, startLocation: action.payload };
        case 'modify_end_location':
            return { ...state, endLocation: action.payload };

        case 'go_to_logged_area':
            return { ...state, logged: true };
        case 'go_to_unlogged_area':
            return { ...state, logged: false };
        case 'go_to_mood_selection':
            return { ...state, sceneTitle: 'SatisfAction', sceneKey: 'moodSelection' };
        case 'go_to_mood_output':
            return { ...state, sceneTitle: 'Output do humor', sceneKey: 'moodOutput' };
        case 'go_to_login_scene':
            return { ...state, sceneTitle: 'Login', sceneKey: 'login' };
        case 'go_to_loading_scene':
            return { ...state, sceneTitle: 'Carregando', sceneKey: 'loading' };
        case 'go_to_login_email_scene':
            return { ...state, sceneTitle: 'Login com email', sceneKey: 'loginEmail' };
        case 'go_to_signup_email_scene':
            return { ...state, sceneTitle: 'Cadastro com email', sceneKey: 'signupEmail' };
        case 'go_to_onboarding_scene':
            return { ...state, sceneTitle: 'Onboarding', sceneKey: 'onboarding' };
        case 'go_to_interaction_level_scene':
            return { ...state, sceneTitle: 'Nível de interação', sceneKey: 'interactonLevel' };
        default:
            return state;
    }
};
