import React from 'react';
import { Provider, connect } from 'react-redux';
import HomeActivity from './src/HomeActivity';

import { createStore } from 'redux';

const INITIAL_STATE = {
  btc: 0,
  ltc: 0,
  euro: 0,
  eth: 0,
  isAvailable: false,
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return { ...state, ...action.state };
  }
};

const store = createStore(reducer);
export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <HomeActivity />
      </Provider>
    );
  }
}
