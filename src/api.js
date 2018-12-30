import { AsyncStorage } from 'react-native';
import { v4 } from 'uuid';

const DECK_DATABASE_KEY = 'deck_database_key';

export async function getDecks() {

  let decks = [{
    id: 'react',
    title: 'React',
    cards: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    cards: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  {
    id: 'javascript1',
    title: 'JavaScript1',
    cards: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  {
    id: 'javascript2',
    title: 'JavaScript',
    cards: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  {
    id: 'javascript3',
    title: 'JavaScript',
    cards: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  {
    id: 'javascript4',
    title: 'JavaScript',
    cards: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
  ];
  return decks;
  ///
  // let result = await AsyncStorage.getItem(DECK_DATABASE_KEY);
  // let data = JSON.parse(result) || [];
  // let decks = Object.keys(data).map(key => {
  //   return { ...data[key] }
  // })
  // return decks;
}

export async function getDeck(id) {

  let deck = [{
    id: 'react',
    title: 'React',
    cards: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  }
  ];
  return deck;

  // let result = await AsyncStorage.getItem(DECK_DATABASE_KEY);
  // let data = JSON.parse(result) || [];
  // let decks = Object.keys(data).map(key => {
  //   return { ...data[key] }
  // })
  // return decks[id];
}

export async function saveDeckTitle(title) {
  const key = v4()
  const newDeck = {
    title,
    cards: [],
  }
  try {
    await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({ [key]: newDeck }))
    return newDeck;
  } catch (error) {
    console.log(error);
  }
}

export async function addCardToDeck(title, newCard) {
  const key = v4()
  let result = await AsyncStorage.getItem(DECK_DATABASE_KEY);
  let data = JSON.parse(result) || [];
  data[key] = {
    ...data[key],
    cards: data[key].cards.concat(newCard)
  }
  try {
    await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    return newCard;
  } catch (error) {
    console.log(error);
  }
}

export async function removeDeck(key) {
  let result = await AsyncStorage.getItem(DECK_DATABASE_KEY);
  let data = JSON.parse(result) || [];
  data[key] = undefined
  delete data[key]
  try {
    return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.log(error);
  }
}

export function removeAllDecks() {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY)
}
