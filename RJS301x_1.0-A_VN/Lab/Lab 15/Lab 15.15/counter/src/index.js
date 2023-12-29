import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/reducers/CounterReducer';


import { createStore } from 'redux';
import allReducer from './store/CombineReducer';
import { Provider } from 'react-redux';

// const store = configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// })
const store = configureStore({
  reducer: allReducer
})
// const store = createStore(allReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
