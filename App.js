import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import StyledStatusBar from './src/components/status-bar.component';
import AppNavigator from './src/navigator';
import reducer from './src/reducers';
import { setLocalNotification } from './src/notifications';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <StyledStatusBar backgroundColor='#FFCC00' barStyle='light-content' />
        <AppNavigator />
      </Provider>
    );
  }
}
