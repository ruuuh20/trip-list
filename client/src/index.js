import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import tripReducer from './reducers/tripReducer'

const store = createStore(tripReducer);

ReactDOM.render(
  <App store={store} />,
   document.getElementById('root')
 );
registerServiceWorker();
