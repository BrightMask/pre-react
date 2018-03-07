import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, hashHistory,Switch} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootRedux from  './rootRedux'
import LoginReactRedux from './pages/login/redux/loginReactRedux'
import LayoutPage from './pages/layout/layout-index'
import App from './app'
import Login from './pages/login/login-index'

const store = createStore(rootRedux);

ReactDOM.render(
    <div className="cdot-full-page">
        <Provider store={store}>
            <Router>
                <Route path="/" component={App}/>
            </Router>
        </Provider>
    </div>,
    document.getElementById('app')
)
// registerServiceWorker();
