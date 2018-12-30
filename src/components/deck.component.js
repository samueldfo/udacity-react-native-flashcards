import React from 'react';
import { View } from 'react-native';
import { DeckContent, Title } from './stylesheet';

export const Deck = ({ item }) => {
  return (
    <View>
      <DeckContent onPress={item.handleClick}>
        <Title>{item.title}</Title>
        <Title>{item.cards.length} cards</Title>
      </DeckContent>
    </View>
  )
}
