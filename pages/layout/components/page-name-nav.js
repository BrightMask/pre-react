import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import '../css/page-name-nav.css'

class PageNameNav extends Component {
    render () {
        return (
            <Breadcrumb className="page-name-nav-bk">
                <h3>模块名称</h3>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>列表页</Breadcrumb.Item>
                <Breadcrumb.Item>详情页</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
export default PageNameNav
