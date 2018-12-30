import { combineReducers } from 'redux'

const initialState = {
  isFetching: false,
  items: [],
  // addedDeck: null,
}

import {
  RECEIVE_DECKS,
  REQUEST_DECKS,
  // ADD_DECK,
  // ADDED_DECK,
  // ADD_CARD,
  // ADDED_CARD,
  // OPENED_ADDED_CARD,
} from './actions'

export function decks(state = initialState, action) {
  const { decks } = action
  switch (action.type) {
    case REQUEST_DECKS:
      // case ADD_DECK:
      // case ADD_CARD:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        isFetching: false,
        items: decks,
        //     lastUpdated: action.receivedAt,
      }
    // case ADDED_DECK:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     items: state.items.concat(action.deck),
    //     addedDeck: action.deck,
    //     lastUpdated: action.receivedAt,
    //   }
    // case ADDED_CARD:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     items: state.items.map(deck => deck.key !== action.deckKey ? deck : {
    //       ...deck,
    //       cards: deck.cards.concat(action.card),
    //     }),
    //     lastUpdated: action.receivedAt,
    //   }
    // case OPENED_ADDED_CARD:
    //   return {
    //     ...state,
    //     addedDeck: null,
    //   }
    default:
      return state
  }
}

export default combineReducers({
  decks
})