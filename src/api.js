import { AsyncStorage } from 'react-native';
import { v4 } from 'uuid';

const DATABASE_KEY = 'decks';

export async function getDecks() {
  let result = await AsyncStorage.getItem(DATABASE_KEY);
  let data = JSON.parse(result) || [];
  let decks = Object.keys(data).map(key => {
    return { ...data[key] }
  })
  return decks;
}

export async function addDeck(title) {
  const id = v4()
  const newDeck = {
    id,
    title,
    cards: [],
  }
  try {
    await AsyncStorage.mergeItem(DATABASE_KEY, JSON.stringify({ [id]: newDeck }))
    return newDeck;
  } catch (error) {
    console.log(error);
  }
}

export async function addCard(deckId, question, answer) {
  let result = await AsyncStorage.getItem(DATABASE_KEY);
  let data = JSON.parse(result) || [];
  let newCard = {
    ...data[deckId],
    cards: data[deckId].cards.concat({ question, answer })
  }
  data[deckId] = newCard
  try {
    await AsyncStorage.setItem(DATABASE_KEY, JSON.stringify(data))
    return newCard;
  } catch (error) {
    console.log(error);
  }
}

export async function removeDeck(key) {
  let result = await AsyncStorage.getItem(DATABASE_KEY);
  let data = JSON.parse(result) || [];
  data[key] = undefined
  delete data[key]
  try {
    return AsyncStorage.setItem(DATABASE_KEY, JSON.stringify(data))
  } catch (error) {
    console.log(error);
  }
}

export function removeAllDecks() {
  return AsyncStorage.removeItem(DATABASE_KEY)
}
