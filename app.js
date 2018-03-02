import React, { Component } from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import LoginReactRedux from './pages/login/redux/loginReactRedux'
import HomePage from './pages/homepage/index'
import LayoutPage from './pages/layout/layout-index'
import MapLayout from './pages/map/map-layout'
import  './common/css/common.css'
import routeMap from './router/routerMap'
import CompanyList from './pages/companys/components/list'
class App extends Component {
    render () {
        return (
            <div className="cdot-full-page">
                {/* <LayoutPage>
                    <Switch>
                        {
                            routeMap.map((route,index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    component={route.main}
                                />
                            ))
                        }
                    </Switch>
                </LayoutPage> */}
                <Route path="/login" component={LoginReactRedux} />
                <Route exact path="/layout" component={LayoutPage} />
            </div>
        )
    }
}
export default App
