import { combineReducers } from 'redux';
import { ADDED_CARD, ADDED_DECK, ADD_DECK, RECEIVE_DECKS, REQUEST_DECKS } from './actions';

const initialState = {
  items: [],
  addedDeck: null,
}


export function decks(state = initialState, action) {
  const { decks, deck, deckId, card } = action
  switch (action.type) {
    case REQUEST_DECKS:
    case ADD_DECK:
      return {
        ...state,
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        items: decks,
      }
    case ADDED_DECK:
      return {
        ...state,
        items: state.items.concat(deck),
        addedDeck: deck,
      }
    case ADDED_CARD:
      return {
        ...state,
        items: state.items.map(deck => deck.id === deckId ? {
          ...deck,
          cards: deck.cards.concat(card),
        } : deck),
      }
    default:
      return state
  }
}

export default combineReducers({
  decks
})