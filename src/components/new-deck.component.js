import { isEmpty } from 'lodash';
import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import AwesomeButton from 'react-native-really-awesome-button';
import { connect } from 'react-redux';
import { addDeck, clearDecks } from '../actions';
import { Color } from '../constants';
import { BigVerticalSeparator } from './stylesheet';

class NewDeck extends React.Component {

  state = {
    title: '',
    error: null
  }

  handleTitleChange = (title) => {
    this.setState({
      ...this.state,
      title
    })
  }

  clearForm = () => {
    this.setState({
      title: '',
    })
  }

  handleSubmit = () => {
    if (isEmpty(this.state.question) && isEmpty(this.state.answer)) {
      this.setState({
        ...this.state,
        error: true,
      })
    } else {
      this.props.addDeck(this.state.title)
        .then(this.clearForm())
        .then(this.props.popNavigate)
    }
  }

  handleClear = () => {
    this.props.dispatch(clearDecks())
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: Color.Background }}>
          <View>
            <FormLabel>What is the title of your new deck?</FormLabel>
            <FormInput
              shake={this.state.error}
              placeholder={'Deck Title'}
              value={this.state.title}
              onChangeText={this.handleTitleChange}
            />
            <FormValidationMessage>{this.state.error ? 'This field is required' : null}</FormValidationMessage>
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
  return {
    popNavigate: () => navigation.navigate('DeckMenu', { ...decks.addedDeck }),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDeck: (title) => dispatch(addDeck(title)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewDeck)