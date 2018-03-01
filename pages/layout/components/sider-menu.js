import React from 'react'
import { Menu, Icon, Switch } from 'antd'
import { Link } from 'react-router-dom'
import '../css/sider-menu.css'
const SubMenu = Menu.SubMenu;

class SiderMenu extends React.Component{
    render () {
        return (
            <div className="cdot-sider">
                <div className="cdot-logo">
                    LOGO
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                >
                    <Menu.Item>
                        <Link to="/map">
                            地图中心
                        </Link>
                    </Menu.Item>
                    <SubMenu  title={<span>管理中心</span>}>
                        <Menu.Item>
                            <Link to="/company">公司管理</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/manage">站点管理</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/manage">设备管理</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item>
                        <Link to="/settheme">
                            监控中心
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/finance">
                            财务中心
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/system">
                            系统设置
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default SiderMenu
