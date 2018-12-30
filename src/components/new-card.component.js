import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import AwesomeButton from 'react-native-really-awesome-button';
import { BigVerticalSeparator, Container } from './stylesheet';
import { Color } from '../constants';

class NewCard extends React.Component {

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
            multiline
            placeholder={'Question'}
            onChangeText={() => { }} />
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        </View>
        <View>
          <FormLabel>What is your answer?</FormLabel>
          <FormInput
            // shake
            inputStyle={{ width: '100%' }}
            multiline
            placeholder={'Answer'}
            onChangeText={() => { }} />
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
            onPress={() => {
              // navigation.navigate('Card', { ...deck });
            }}
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
)(NewCard)