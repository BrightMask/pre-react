import { Table, Button } from 'antd'
import React from 'react'
import '../css/common.css'

const PageList = ({data=[],pageConfig}) => (
    <div className="cdot-list-container">
        <Table className="cdot-table" dataSource={data}  bordered columns={pageConfig.listColumns}/>
    </div>
)

export default PageList
