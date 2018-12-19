import * as API from './api'

export const REQUEST_DECKS = 'REQUEST_DECKS';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
// export const ADD_DECK = 'ADD_DECK';
// export const ADDED_DECK = 'ADDED_DECK';
// export const ADD_CARD = 'ADD_CARD';
// export const ADDED_CARD = 'ADDED_CARD';
// export const OPENED_ADDED_CARD = 'OPENED_ADDED_CARD';


export function fetchDecks() {
  return async dispatch => {
    let decks = await API.getDecks();
    dispatch({ type: REQUEST_DECKS })
    dispatch({
      type: RECEIVE_DECKS,
      decks,
    });
  }
}

  // export function fetchAllDecks() {
  //   return (dispatch, getState) => {
  //     // const { decks } = getState()
  //     // if (!decks.isFetching) {
  //     dispatch({ type: REQUEST_DECKS })
  //     return API.listDecks()
  //       .then(decks => dispatch({
  //         type: RECEIVE_DECKS,
  //         decks,
  //         receivedAt: Date.now()
  //       }))
  //     // }
  //   }
  // }

// export function fetchAddDeck({ title }) {
//   return dispatch => {
//     dispatch({ type: ADD_DECK })
//     return ds.createDeck({ title })
//       .then(deck => dispatch({
//         type: ADDED_DECK,
//         deck,
//         receivedAt: Date.now(),
//       }))
//   }
// }

// export function fetchAddCard(deckKey, { question, answer }) {
//   return dispatch => {
//     dispatch({ type: ADD_CARD })
//     return ds.createCard(deckKey, { question, answer })
//       .then(card => dispatch({
//         type: ADDED_CARD,
//         deckKey,
//         card,
//         receivedAt: Date.now(),
//       }))
//   }
// }

// export function fetchOpenedAddedDeck() {
//   return dispatch => dispatch({ type: OPENED_ADDED_CARD })
// }