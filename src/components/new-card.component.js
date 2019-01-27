import { isEmpty } from 'lodash';
import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import AwesomeButton from 'react-native-really-awesome-button';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { Color } from '../constants';
import { BigVerticalSeparator } from './stylesheet';

class NewCard extends React.Component {

  state = {
    question: '',
    answer: '',
    qError: false,
    aError: false,
  }

  handleQuestionChange = (question) => {
    this.setState({
      ...this.state,
      question
    })
  }

  handleAnswerChange = (answer) => {
    this.setState({
      ...this.state,
      answer
    })
  }

  clearForm = () => {
    this.setState({
      question: '',
      answer: '',
    })
  }

  handleSubmit = () => {
    if (isEmpty(this.state.question) && isEmpty(this.state.answer)) {
      this.setState({
        ...this.state,
        qError: true,
        aError: true,
      })
    } else if (isEmpty(this.state.question)) {
      this.setState({
        ...this.state,
        qError: true,
      })
    } else if (isEmpty(this.state.answer)) {
      this.setState({
        ...this.state,
        aError: true,
      })
    } else {
      this.props.dispatch(addCard(this.props.deck.id, this.state.question, this.state.answer))
      this.clearForm()
    }
  }

  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Color.Primary,
    },
  })

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View>
            <FormLabel>What is your question?</FormLabel>
            <FormInput
              shake={this.state.qError}
              inputStyle={{ width: '100%' }}
              value={this.state.question}
              onChangeText={this.handleQuestionChange}
              multiline
              placeholder={'Question'} />
            <FormValidationMessage>{this.state.qError ? 'This field is required' : null}</FormValidationMessage>
          </View>
          <View>
            <FormLabel>What is your answer?</FormLabel>
            <FormInput
              shake={this.state.aError}
              inputStyle={{ width: '100%' }}
              value={this.state.answer}
              onChangeText={this.handleAnswerChange}
              multiline
              placeholder={'Answer'} />
            <FormValidationMessage>{this.state.aError ? 'This field is required' : null}</FormValidationMessage>
          </View>
          <BigVerticalSeparator />
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
            <AwesomeButton
              backgroundColor={Color.Primary}
              backgroundDarker={Color.Border}
              textColor={Color.White}
              onPress={this.handleSubmit}
            >Submit
        </AwesomeButton>
          </View>
        </View >
      </TouchableWithoutFeedback>
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
)(NewCard)