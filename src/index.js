import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react';
import ConverterStore from './Stores/ConverterStore.js';

const Root = (
  <Provider ConverterStore={ConverterStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
