import { Table, Button } from 'antd'
import React from 'react'
import '../css/common.css'

const PageList = ({data=[],pageConfig}) => (
    <Table className="cdot-table" dataSource={data}  bordered columns={pageConfig.listColumns}/>
)

export default PageList
