import React from 'react';
import { Provider } from 'react-redux';
import Home from './src/Home';

import { createStore } from 'redux';
import combineReducer from './src/reducers/ReducerCombiner';

const store = createStore(combineReducer);
export default class App extends React.Component<{}, {}> {
  	render() {
    	return (
      		<Provider store={store}>
        		<Home />
      		</Provider>
    	);
  	}
}
