import React, { Component } from 'react'
import { Table } from 'antd'

const columns = [
    {
        title:'序号',
        dataIndex:'index',
        key:'index'
    },
    {
        title:'用户名',
        dataIndex:'name',
        key:'name'
    },
    {
        title:'权限类型',
        dataIndex:'type',
        key:'type'
    },
    {
        title:'归属公司',
        dataIndex:'enterprise',
        key:'enterprise'
    },
    {
        title:'手机号',
        dataIndex:'phone',
        key:'phone'
    },
    {
        title:'Email',
        dataIndex:'email',
        key:'email'
    },
    {
        title:'地区',
        dataIndex:'area',
        key:'area'
    },
    {
        title:'详细地址',
        dataIndex:'address',
        key:'address'
    },{
        title:'注册时间',
        dataIndex:'create_at',
        key:'create_at'
    }
]


class SystemUserList extends Component {
    render () {
        return (
            <Table bordered size="small" columns={columns}/>
        )
    }
}

export default SystemUserList
