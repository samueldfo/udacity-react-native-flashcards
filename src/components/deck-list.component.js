import React from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Container, DeckText } from './stylesheet';
import { Deck } from './deck.component';
import { getDecks } from '../actions';

class Decks extends React.Component {

  componentDidMount() {
    this.props.getDecks()
  }

  render() {
    const { decks } = this.props
    return (
      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={decks}
          keyExtractor={(item) => item.id}
          renderItem={Deck}
        />
      </Container>
    );
  }
}

function mapStateToProps({ decks }, { navigation }) {
  return {
    // openDeck: decks.addedDeck ? () => navigation.navigate('DeckDetail', { ...decks.addedDeck }) : null,
    decks: decks.items.map(item => {
      console.log(item)
      return {
        ...item,
        handleClick: () => navigation.navigate('DeckMenu', { ...item }),
      }
    }),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDecks: () => dispatch(getDecks()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Decks)
