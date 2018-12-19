import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DeckContainer, Title, Card, CardContainer } from './stylesheet';
import CardFlip from 'react-native-card-flip';

// const viewPortWidth = Dimensions.get('window').width;
class Deck extends React.Component {

  render() {
    return (
      <CardContainer>
        <CardFlip ref={(card) => this.card = card} >
          <Card onPress={() => this.card.flip()}>
            <Text>AB</Text>
          </Card>
          <Card  onPress={() => this.card.flip()}>
            <Text>CD</Text>
          </Card>
        </CardFlip>
      </CardContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// })

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(Deck)
