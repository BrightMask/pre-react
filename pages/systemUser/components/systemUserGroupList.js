import React, { Component } from 'react'
import { Table } from 'antd'

const columns = [
    {
        title:'序号',
        dataIndex:'index',
        key:'index'
    },
    {
        title:'名称',
        dataIndex:'name',
        key:'name'
    },{
        title:'用户个数',
        dataIndex:'user_cnt',
        key:'user_cnt'
    },{
        title:'权限',
        dataIndex:'rights',
        key:'rights'
    }
]

class SystemUserGroupList extends Component {
    render () {
        return (
            <Table bordered columns={columns}/>
        )
    }
}

export default SystemUserGroupList
