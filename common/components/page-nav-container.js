import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import '../css/page-name-nav.css'

function PageNameNav({nowPage,nowPageLevel}) {
        return (
            <Breadcrumb className="page-name-nav-bk">
                {/* <h3>模块名称</h3> */}
                <Breadcrumb.Item>测试</Breadcrumb.Item>
                {
                    nowPageLevel == 2?
                    <Breadcrumb.Item>{nowPage}</Breadcrumb.Item>:null

                }
                {
                    nowPageLevel == 3?
                    <Breadcrumb.Item>{nowPage}</Breadcrumb.Item>:null
                }
            </Breadcrumb>
        )
}


export default PageNameNav
