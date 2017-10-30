import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/root';
import App from './components/app';

const composeEnhancers = compose;
const middleware = [thunkMiddleware];
const store = createStore(
  rootReducer,
  { devices, services }, //pulled in from global scope
  composeEnhancers(applyMiddleware(...middleware)),
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
