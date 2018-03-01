import React, { Component } from 'react'
import {
    Route,
    Link
} from 'react-router-dom'

import LoginReactRedux from './pages/login/redux/loginReactRedux'
import HomePage from './pages/homepage/index'
import LayoutPage from './pages/layout/layout-index'
import MapLayout from './pages/map/map-layout'
import  './common/css/common.css'

class App extends Component {
    render () {
        return (
            <div className="cdot-full-page">
                {/* <LayoutPage /> */}
                <div>
                    <Route exact path="/login" component={LoginReactRedux} />
                    <Route exact path="/" component={LayoutPage} />
                </div>
            </div>
        )
    }
}
export default App
