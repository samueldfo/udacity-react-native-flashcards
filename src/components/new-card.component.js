import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';
import AwesomeButton from 'react-native-really-awesome-button';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { Color } from '../constants';
import { BigVerticalSeparator } from './stylesheet';

class NewCard extends React.Component {

  state = {
    question: '',
    answer: '',
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
    this.props.dispatch(addCard(this.props.deck.id, this.state.question, this.state.answer))
    this.clearForm()
  }

  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Color.Primary,
    },
  })

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View>
          <FormLabel>What is your question?</FormLabel>
          <FormInput
            // shake
            inputStyle={{ width: '100%' }}
            value={this.state.question}
            onChangeText={this.handleQuestionChange}
            multiline
            placeholder={'Question'} />
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        </View>
        <View>
          <FormLabel>What is your answer?</FormLabel>
          <FormInput
            // shake
            inputStyle={{ width: '100%' }}
            value={this.state.answer}
            onChangeText={this.handleAnswerChange}
            multiline
            placeholder={'Answer'} />
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}
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