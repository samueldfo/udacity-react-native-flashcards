import React from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { DeckContainer, DeckText } from './stylesheet';
import Deck from './deck.component'

class Decks extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <DeckContainer>
          <Deck/>
        </DeckContainer>
      </SafeAreaView>
      // {/* <Deck/> */}
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>DECKS</Text>
      //   <FlatList
      //     data={[{ key: 'a' }, { key: 'b' }]}
      //     renderItem={({ item }) => <Text>{item.key}</Text>}
      //   />
      // </View>
    );
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(Decks)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 40,
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#34495e',
//   },
// });