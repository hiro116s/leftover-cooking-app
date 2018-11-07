import React from 'react';
import { Provider } from 'react-redux';
import Home from './src/Home';

import { createStore } from 'redux';
import menuReducer from './src/reducers/MenuReducer';

const store = createStore(menuReducer);
export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider> 
    );
  }
}
