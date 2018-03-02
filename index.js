import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootRedux from  './rootRedux'

import App from './app'

const store = createStore(rootRedux);

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
)
// registerServiceWorker();
