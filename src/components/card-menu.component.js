import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Button, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Container, Title, DeckContent, VerticalSeparator } from './stylesheet';
import AwesomeButton from 'react-native-really-awesome-button';
import CardFlip from 'react-native-card-flip';
import { Color } from '../constants';

// const viewPortWidth = Dimensions.get('window').width;
class CardMenu extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Color.Primary,
    },
    headerTitle: navigation.getParam('title', ''),
  })

  render() {
    let { deck, navigation } = this.props
    return (
      <Container>
        <Text>{deck.title}</Text>
        <Text>{deck.cards.length}</Text>
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

// function mapDispatchToProps(dispatch) {
//   return {
//     getDeck: () => dispatch(getDeck()),
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(CardMenu)
