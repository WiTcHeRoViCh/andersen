import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';

import todos from "./reducers/todos";
import filter from "./reducers/filters";

import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const todoApp = combineReducers({
  todoList: todos,
  filter
})

let store = createStore(todoApp);


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
