import { SWITCH_LANGUAGE } from '../actionTypes';

const initialState = {
    currentLanguage: 'en_US',
    direction: 'ltr'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            return {
                ...state,
                currentLanguage: action.language,
                direction: action?.direction ?? 'ltr'
            }
        default:
            return state;
    }
}