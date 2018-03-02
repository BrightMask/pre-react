import React from 'react';
import { Layout } from 'antd';
import SiderMenu from './components/sider-menu';
import SkinImg from './img/skin-peeler.png';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './css/layout-index.css'
import routeMap from '../../router/routerMap'
import PageNameNav from './components/page-name-nav'
import MapLayout from '../map/map-layout'
import CompanyList from '../companys/components/list'

const {Header, Sider, Content } = Layout;

const RouteWithSubRoutes = (route) => (
    <Route
        path={route.path}
        render = {props => (
            <route.main {...props} routes={route.routes} />
        )}
    />

)

class PageLayout extends React.Component {
    render () {
        return (
            <div className="cdot-full-page">
                <Layout>
                    <Sider className="cdot-sider-box">
                        <SiderMenu/>
                    </Sider>
                    <Layout className="overflow-hidden-content">
                        <Header className="cdot-header">
                            <Link to="/login">
                                <img src={SkinImg} className='skin-menu'></img>
                            </Link>
                        </Header>
                        <Content className="overflow-content">
                            <PageNameNav />
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
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default PageLayout
