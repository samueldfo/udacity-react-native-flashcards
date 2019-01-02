import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../actions';
import { Deck } from './deck.component';
import { Container } from './stylesheet';

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
    decks: decks.items.map(item => {
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
