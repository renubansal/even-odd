import {DECK, DECK_DRAW} from './types';

const API_ADDRESS = 'https://deckofcardsapi.com/api';

export const fetchDeckSuccess = deckJson => {
    const {remaining, deck_id} = deckJson;

    return {type: DECK.FETCH_SUCCESS, remaining, deck_id};
}

export const fetchDeckError = error => {
    return {type: DECK.FETCH_ERROR, message: error.message};
}

export const fetchNewDeck = () => dispatch => {
    return fetch(`${API_ADDRESS}/deck/new/shuffle`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error('Unsuccessful request to deckofcardsapi.com');
            }

            return response.json();
        })
        .then(json => dispatch(fetchDeckSuccess(json)))
        .catch(error => dispatch(fetchDeckError(error)));
}
