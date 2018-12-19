import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import StyledStatusBar from './src/components/status-bar.component';
import AppNavigator from './src/navigator';
import reducer from './src/reducers';

export default class App extends React.Component {

  // componentDidMount() {
  //   setLocalNotification()
  // }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <StyledStatusBar backgroundColor='#FFCC00' barStyle='light-content' />
        <AppNavigator />
      </Provider>
    );
  }
}
