import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter , Route, hashHistory,Switch} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootRedux from  './rootRedux'
import rootReducer from './indexReducer'
import LoginReactRedux from './pages/login/redux/loginReactRedux'
import LayoutPage from './pages/layout/layout-index'
import App from './app'
import Login from './pages/login/login-index'


const middleware = [ thunk ]

// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'

// 使用日志打印方法， collapsed让action折叠，看着舒服。
const loggerMiddleware = createLogger({collapsed: true});

// const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():f=>f
const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
)

ReactDOM.render(
    <div className="cdot-full-page">
        <Provider store={store}>
            <BrowserRouter >
                <Route path="/" component={App}/>
            </BrowserRouter>
        </Provider>
    </div>,
    document.getElementById('app')
)
// registerServiceWorker();
