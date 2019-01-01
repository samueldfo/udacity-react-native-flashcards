import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';
import AwesomeButton from 'react-native-really-awesome-button';
import { connect } from 'react-redux';
import { addDeck, clearDecks } from '../actions';
import { Color } from '../constants';
import { BigVerticalSeparator } from './stylesheet';

class NewDeck extends React.Component {

  state = {
    title: ''
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
    this.props.dispatch(addDeck(this.state.title))
    this.clearForm()
  }

  handleClear = () => {
    this.props.dispatch(clearDecks())
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View>
          <FormLabel>What is the title of your new deck?</FormLabel>
          <FormInput
            // shake
            placeholder={'Deck Title'}
            value={this.state.title}
            onChangeText={this.handleTitleChange}
          />
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

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(NewDeck)