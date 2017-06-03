import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import reducer from './reducers/imagesReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducer, {}, applyMiddleware(
  thunkMiddleware),
  devToolsEnhancer()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
);
