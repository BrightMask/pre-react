import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootRedux from  './rootRedux'

import App from './app'
import LayoutPage from './pages/layout/layout-index'

const store = createStore(rootRedux);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <LayoutPage />
            <Route>

            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)
// registerServiceWorker();
