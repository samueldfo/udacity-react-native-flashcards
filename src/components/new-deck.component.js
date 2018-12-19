import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class NewDeck extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>NEW DECK</Text>
      </View>
    );
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(NewDeck)