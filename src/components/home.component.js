import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(HomeScreen)