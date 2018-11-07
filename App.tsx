import React from 'react';
import { Provider } from 'react-redux';
import HomeActivity from './src/HomeActivity';

import { createStore } from 'redux';
import menuReducer from './src/reducers/MenuReducer';

const store = createStore(menuReducer);
export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <HomeActivity />
      </Provider> 
    );
  }
}
