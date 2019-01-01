import { get } from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { Body, DeckContent, H1, VerticalSeparator } from './stylesheet';

export const Deck = ({ item }) => {

  cardQtyText = (qty) => {
    if (qty === 0) {
      return 'no cards'
    } else if (qty === 1) {
      return '1 card'
    } else {
      return `${qty} cards`
    }
  }

  return (
    <View>
      <DeckContent onPress={get(item, 'handleClick')}>
        <VerticalSeparator />
        <H1>{item.title}</H1>
        <VerticalSeparator />
        <Body>{this.cardQtyText(item.cards.length)}</Body>
      </DeckContent>
    </View>
  )
}
