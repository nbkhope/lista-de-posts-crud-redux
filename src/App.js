import React from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Router from './Router';

// higher order component: Provider
// enhance outro component

// cria application state
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
