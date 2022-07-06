import {SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED} from '../actions/types';

export const DEFAULT_GAME_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false,
};
export default function settingsReducer(state = DEFAULT_GAME_SETTINGS, action) {
    console.log("state", state, "action", action);
    switch (action.type) {
        case SET_GAME_STARTED:
            return {
                ...state,
                gameStarted: action.gameStarted,
            };

        case SET_INSTRUCTIONS_EXPANDED:
            return {
                ...state,
                instructionsExpanded: action.instructionsExpanded,
            };

        default:
            return state;
    }
};