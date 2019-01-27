import { shuffle } from 'lodash';
import React from 'react';
import { Alert } from 'react-native';
import CardFlip from 'react-native-card-flip';
import AwesomeButton from 'react-native-really-awesome-button';
import { connect } from 'react-redux';
import { Color } from '../constants';
import { BigVerticalSeparator, Body, CardContainer, CardContent, Container, H1, MidVerticalSeparator, VerticalSeparator } from './stylesheet';

class Card extends React.Component {
  state = {
    cardIndex: 0,
    score: 0,
    cardsTotal: this.props.deck.cards.length,
    disabled: true
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
        { text: 'Back to deck', onPress: () => this.props.navigation.pop() },
        { text: 'Restart', onPress: this.handleRestart },
      ]
    )
  }

  handleRestart = () => {
    shuffle(this.props.deck.cards);
    this.setState({
      ...this.state,
      cardIndex: 0,
      score: 0,
    })
  }


  handleSubmitCorrect = () => {
    this.card.flip()
    if (this.state.cardIndex + 1 === this.state.cardsTotal) {
      this.setState({
        ...this.state,
        disabled: true,
        score: this.state.score + 1,
      }, this.showAlert)
    } else if (this.state.cardIndex < this.state.cardsTotal) {
      this.setState({
        ...this.state,
        disabled: true,
        score: this.state.score + 1,
        cardIndex: this.state.cardIndex + 1,
      })
    }
  }

  handleSubmitIncorrect = () => {
    this.card.flip()
    if (this.state.cardIndex + 1 === this.state.cardsTotal) {
      this.setState({
        ...this.state,
        disabled: true,
      }, this.showAlert)
    } else if (this.state.cardIndex < this.state.cardsTotal) {
      this.setState({
        ...this.state,
        disabled: true,
        cardIndex: this.state.cardIndex + 1,
      })
    }
  }

  handleFlip = (i) => {
    this.setState({
      ...this.state,
      disabled: false,
    })
  }

  render() {
    let { deck } = this.props
    return (
      <Container>
        <VerticalSeparator />
        <H1 style={{ color: 'gray' }}>{this.state.cardIndex + 1}/{this.state.cardsTotal}</H1>
        <CardContainer>
          <CardFlip perspective={40000} ref={(card) => this.card = card} onFlip={this.handleFlip} >
            <CardContent onPress={() => this.card.flip()}>
              <BigVerticalSeparator />
              <H1 style={{ color: Color.Primary }}>QUESTION</H1>
              <BigVerticalSeparator />
              <Body style={{ color: Color.Primary }}>{deck.cards[this.state.cardIndex].question}</Body>
            </CardContent>
            <CardContent>
              <BigVerticalSeparator />
              <H1 style={{ color: Color.Primary }}>ANSWER</H1>
              <BigVerticalSeparator />
              <Body style={{ color: Color.Primary }}>{deck.cards[this.state.cardIndex].answer}</Body>
            </CardContent>
          </CardFlip>
        </CardContainer>
        <AwesomeButton
          backgroundColor={this.state.disabled ? '#dddddd' : '#4CD964'}
          backgroundDarker={this.state.disabled ? '#dddddd' : 'green'}
          textColor={this.state.disabled ? 'gray' : Color.White}
          disabled={this.state.disabled}
          onPress={this.handleSubmitCorrect}>Correct
          </AwesomeButton>
        <VerticalSeparator />
        <AwesomeButton
          backgroundColor={this.state.disabled ? '#dddddd' : '#FF3B30'}
          backgroundDarker={this.state.disabled ? '#dddddd' : '#970800'}
          textColor={this.state.disabled ? 'gray' : Color.White}
          disabled={this.state.disabled}
          onPress={this.handleSubmitIncorrect}>Incorrect
        </AwesomeButton>
        <MidVerticalSeparator />
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
  null,
)(Card)
