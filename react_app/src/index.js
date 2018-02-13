import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';

import store from './store/configureStore'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
