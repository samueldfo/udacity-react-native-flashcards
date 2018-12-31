import { combineReducers } from 'redux'

const initialState = {
  isFetching: false,
  items: [],
  addedDeck: null,
}

import {
  RECEIVE_DECKS,
  REQUEST_DECKS,
  ADD_DECK,
  ADDED_DECK,
  ADD_CARD,
  ADDED_CARD,
  // OPENED_ADDED_CARD,
} from './actions'

export function decks(state = initialState, action) {
  const { decks, deck, deckId, card } = action
  switch (action.type) {
    case REQUEST_DECKS:
    case ADD_DECK:
    case ADD_CARD:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        isFetching: false,
        items: decks,
      }
    case ADDED_DECK:
      return {
        ...state,
        isFetching: false,
        items: state.items.concat(deck),
        addedDeck: deck,
      }
    case ADDED_CARD:
      return {
        ...state,
        isFetching: false,
        items: state.items.map(deck => deck.id === deckId ? {
          ...deck,
          cards: deck.cards.concat(card),
        } : deck),
      }
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