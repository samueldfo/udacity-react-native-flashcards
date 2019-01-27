import styled from 'styled-components';
import { Color } from '../constants';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  background-color: ${Color.Background};
`;

export const Body = styled.Text`
  margin: 24px;
  font-size: 18;
  text-align: center;
  color: ${Color.White};
`;

export const H1 = styled.Text`
  font-weight: bold  
  font-size: 24;
  color: ${Color.White};
  text-align: center;
`;

export const DeckContent = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 320px;
  margin-top: 10px;
  margin-bottom: 10px;
  min-height: 200px;
  background-color: ${Color.Primary};
  border-radius: 5;
  shadow-color: rgba(0, 0, 0, 0.5);
  shadow-offset: 0px 1px;
  shadow-opacity: 0.5;
  justify-content: center;
`;

export const CardContent = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 320px;
  margin-top: 20px;
  min-height: 300px;
  background-color: ${Color.Secondary};
  border-radius: 5;
  shadow-color: rgba(0, 0, 0, 0.5);
  shadow-offset: 0px 1px;
  shadow-opacity: 0.5;
`;

export const CardContainer = styled.View`
  flex: 1;
  width: 320px;
`;

export const VerticalSeparator = styled.View`
  height: 16px;
`;

export const MidVerticalSeparator = styled.View`
  height: 32px;
`;

export const BigVerticalSeparator = styled.View`
  height: 64px;
`;
