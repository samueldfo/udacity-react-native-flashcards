import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Decks extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DECKS</Text>
      </View>
    );
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(Decks)