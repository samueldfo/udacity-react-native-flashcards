import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DeckContainer, Title, CardContent, DeckContent, CardContainer, Container, BigVerticalSeparator, VerticalSeparator } from './stylesheet';
import CardFlip from 'react-native-card-flip';
import { Color } from '../constants';
import AwesomeButton from 'react-native-really-awesome-button';

// const viewPortWidth = Dimensions.get('window').width;
class Card extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Color.Primary,
    },
  })

  render() {
    return (
      <Container>
        <Text>2/2</Text>
        <CardContainer>
          <CardFlip perspective={2000} ref={(card) => this.card = card} >
            <CardContent onPress={() => this.card.flip()}>
              <Text>Question</Text>
            </CardContent>
            <CardContent onPress={() => this.card.flip()}>
              <Text>Answer</Text>
            </CardContent>
          </CardFlip>
        </CardContainer>
        <BigVerticalSeparator />
        <AwesomeButton
          backgroundColor={'green'}
          backgroundDarker={Color.Border}
          textColor={Color.White}
          onPress={() => {
            // navigation.navigate('Card', { ...deck });
          }}
        >Correct
        </AwesomeButton>
        <VerticalSeparator />
        <AwesomeButton
          backgroundColor={'red'}
          backgroundDarker={Color.Border}
          textColor={Color.White}
          onPress={() => {
            // navigation.navigate('Card', { ...deck });
          }}
        >Incorrect
        </AwesomeButton>
      </Container>
    );
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(Card)
