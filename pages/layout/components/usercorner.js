import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Avatar } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class UserCorner extends Component {
    render () {
        return (
            <div className="user-corner-box">
                <Avatar src="">
                </Avatar>
            </div>
            // <Menu
            //     className="user-corner-box"
            //     mode="vertical"
            // >
            //     <SubMenu className="user-corner-sunmenu">
            //         <Menu.Item>
            //             <Link to="/login">退出登录</Link>
            //         </Menu.Item>
            //     </SubMenu>
            // </Menu>
        )
    }
}

export default UserCorner
