import React, { Component } from 'react'
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import LoginReactRedux from './pages/login/redux/loginReactRedux'
import HomePage from './pages/homepage/index'
import LayoutPage from './pages/layout/layout-index'
import MapLayout from './pages/map/map-layout'
import  './common/css/common.css'
import routeMap from './router/routerMap'
class App extends Component {
    render () {
        return (
            <div className="cdot-full-page">
                <Switch>
                    <Route path="/login" exact component={LoginReactRedux}/>
                    <Route path="/" component={LayoutPage}/>
                </Switch>
            </div>
        )
    }
}
export default App
