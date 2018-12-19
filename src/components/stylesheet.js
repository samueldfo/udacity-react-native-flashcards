import styled from 'styled-components';

export const DeckContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 40px;
  background-color: #ecf0f1;
`;

// export const Deck = styled.View`
//   flex: 1;
//   alignItems: center;
//   justifyContent: center;
// `;

export const DeckText = styled.Text`
  margin: 24px;
  font-size: 18;
  font-weight: bold;
  text-align: center;
  color: #34495e;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #34495e;
`;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 320px;
  min-height: 250px;
  background-color: #FE474C;
  border-radius: 5;
  shadow-color: rgba(0, 0, 0, 0.5);
  shadow-offset: { width: 0, height: 1};
  shadow-opacity: 0.5;
`;

export const CardContainer = styled.View`
  width: 320px;
  height: 470px;
`;

// const CardViewWrapper = styled.View`
//   background-color: white;
//   border-radius: 20;
//   padding-top: 20px;
//   shadow-radius: 3px;
//   shadow-opacity: 0.4;
//   shadow-color: rgba(0, 0, 0, 0.43);
//   shadow-offset: 0px 10px;
//   min-height: 250px;
//   justify-content: space-between;
// `;