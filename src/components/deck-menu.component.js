import React from 'react';
import AwesomeButton from 'react-native-really-awesome-button';
import { connect } from 'react-redux';
import { Color } from '../constants';
import { Deck } from './deck.component';
import { BigVerticalSeparator, Container, VerticalSeparator } from './stylesheet';

class DeckMenu extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Color.Primary,
    },
  })

  render() {
    let { deck, navigation } = this.props
    return (
      <Container>
        <Deck item={deck}></Deck>
        <BigVerticalSeparator />
        <AwesomeButton
          backgroundColor={Color.Secondary}
          backgroundDarker={Color.Border}
          textColor={Color.Primary}
          onPress={() => {
            navigation.navigate('NewCard', { ...deck });
          }}
        >Add Card
        </AwesomeButton>
        <VerticalSeparator />
        <AwesomeButton
          backgroundColor={Color.Primary}
          backgroundDarker={Color.Border}
          textColor={Color.White}
          onPress={() => {
            navigation.navigate('Card', { ...deck });
          }}
        >Start Quiz
        </AwesomeButton>
      </Container>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const id = navigation.getParam('id', '')
  const deck = decks.items.find(deck => deck.id === id)
  return {
    deck
  }
}

export default connect(
  mapStateToProps,
  null,
)(DeckMenu)
