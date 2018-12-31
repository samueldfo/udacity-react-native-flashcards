import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { DeckContainer, Title, CardContent, DeckContent, CardContainer, Container, BigVerticalSeparator, VerticalSeparator } from './stylesheet';
import CardFlip from 'react-native-card-flip';
import { Color } from '../constants';
import AwesomeButton from 'react-native-really-awesome-button';

// const viewPortWidth = Dimensions.get('window').width;
class Card extends React.Component {
  state = {
    cardIndex: 0,
    score: 0,
    disable: true,
    cardsTotal: this.props.deck.cards.length,
  }

  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Color.Primary,
    },
  })

  showAlert = () => {
    const scorePercentage = parseInt(this.state.score / this.state.cardsTotal * 100)
    Alert.alert(
      'Congratulations',
      `Your score was ${scorePercentage}%`,
      [
        { text: 'OK', onPress: () => this.props.navigation.pop() },
      ]
    )
  }

  handleSubmitCorrect = () => {
    if (this.state.cardIndex + 1 === this.state.cardsTotal) {
      this.setState({
        ...this.state,
        score: this.state.score + 1,
      }, this.showAlert)
    } else if (this.state.cardIndex < this.state.cardsTotal) {
      this.setState({
        ...this.state,
        score: this.state.score + 1,
        cardIndex: this.state.cardIndex + 1,
      })
    }
  }

  handleSubmitIncorrect = () => {
    if (this.state.cardIndex + 1 === this.state.cardsTotal) {
      this.setState({
        ...this.state,
      }, this.showAlert)
    } else if (this.state.cardIndex < this.state.cardsTotal) {
      this.setState({
        ...this.state,
        cardIndex: this.state.cardIndex + 1,
      })
    }
  }

  render() {
    let { deck } = this.props
    return (
      <Container>
        <Text>{this.state.cardIndex + 1}/{this.state.cardsTotal}</Text>
        <CardContainer>
          <CardFlip perspective={2000} ref={(card) => this.card = card} >
            <CardContent onPress={() => this.card.flip()}>
              <Text>{deck.cards[this.state.cardIndex].question}</Text>
            </CardContent>
            <CardContent onPress={() => this.card.flip()}>
              <Text>{deck.cards[this.state.cardIndex].answer}</Text>
            </CardContent>
          </CardFlip>
        </CardContainer>
        <BigVerticalSeparator />
        <AwesomeButton
          backgroundColor={'green'}
          backgroundDarker={Color.Border}
          textColor={Color.White}
          disable={this.state.disable}
          onPress={this.handleSubmitCorrect}
        >Correct
        </AwesomeButton>
        <VerticalSeparator />
        <AwesomeButton
          backgroundColor={'red'}
          backgroundDarker={Color.Border}
          textColor={Color.White}
          disable={this.state.disable}
          onPress={this.handleSubmitIncorrect}
        >Incorrect
        </AwesomeButton>
      </Container>
    );
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
  // mapDispatchToProps,
)(Card)
