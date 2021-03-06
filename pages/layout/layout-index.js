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
import MapLayout from '../map/map-layout'
import HomePage from '../homepage/index'
import UserCorner from './components/usercorner'

const {Header, Sider, Content } = Layout;


class LayoutPage extends React.Component {
    render () {
        return (
            <div className="cdot-full-page">
                <Layout>
                    <Sider className="cdot-sider-box">
                        <SiderMenu/>
                    </Sider>
                    <Layout className="overflow-hidden-content">
                        <Header className="cdot-header">
                            <UserCorner />
                            {/* <Link to="/login">
                                <img src={SkinImg} className='skin-menu'></img>
                            </Link> */}
                        </Header>
                        <Content className="overflow-content">
                            {
                                routeMap.map((route,index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.main}
                                    />
                                ))
                            }
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default LayoutPage
