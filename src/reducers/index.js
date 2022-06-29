import {
  SET_GAME_STARTED,
  SET_INSTRUCTIONS_EXPANDED,
  FEETCH_DECK_RESULT,
} from "../actions/types";

export const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false,
};

export const rootReducer = (state = DEFAULT_SETTINGS, action) => {
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
    case FEETCH_DECK_RESULT:
      const { remaining, deck_id } = action;
      return {
        ...state,
        remaining,
        deck_id,
      };

    default:
      return state;
  }
};
