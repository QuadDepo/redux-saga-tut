import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'

import Gallery from './Gallery'
import {loadProducts} from './sagas'


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(createSagaMiddleware(loadProducts))
);


ReactDOM.render(
  <Provider store={store}>
    <Gallery/>
  </Provider>,
  document.getElementById('root')
);
