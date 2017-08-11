import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'

import Gallery from './Gallery'
import {loadImages, watchForLoadImages} from './sagas'


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(createSagaMiddleware(watchForLoadImages))
);


ReactDOM.render(
  <Provider store={store}>
    <Gallery/>
  </Provider>,
  document.getElementById('root')
);
