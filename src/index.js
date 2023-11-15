import React from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import { saveToLocalStorage } from './middleware/saveToLocalStorage';

const store = createStore(
  rootReducer,
  applyMiddleware(saveToLocalStorage)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
