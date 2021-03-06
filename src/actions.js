import * as API from './api';

export const REQUEST_DECKS = 'REQUEST_DECKS';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADDED_DECK = 'ADDED_DECK';
export const ADDED_CARD = 'ADDED_CARD';
export const CLEAR_DECKS = 'CLEAR_DECKS';

export function getDecks() {
  return async dispatch => {
    let decks = await API.getDecks();
    dispatch({ type: REQUEST_DECKS })
    dispatch({
      type: RECEIVE_DECKS,
      decks,
    });
  }
}

export function addDeck(title) {
  return async dispatch => {
    let deck = await API.addDeck(title);
    dispatch({
      type: ADDED_DECK,
      deck,
    });
  }
}

export function addCard(deckId, question, answer) {
  return async dispatch => {
    await API.addCard(deckId, question, answer);
    dispatch({
      type: ADDED_CARD,
      deckId,
      card: { question, answer },
    });
  }
}

export function clearDecks() {
  return async dispatch => {
    dispatch({ type: CLEAR_DECKS })
    await API.removeAllDecks();
    dispatch({ type: CLEARED_DECKS });
  }
}
