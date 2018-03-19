import React,{ Component } from 'react'
import { Table, Button } from 'antd'
const PropTypes = require('prop-types');
import PageFilterContainer from '../../../common/containers/page-fliter-container'
import PageConfig from '../componetConfig'
import {withRouter,hashHistory  } from 'react-router'

const columns = PageConfig.listColumns

class CompanyList extends Component {

    constructor(props){
         super(props)
    }

    ToAdd(event){
        event.preventDefault()
        let path = '/company/add'
        hashHistory.push(path);
    }

    render () {
        return (
            <div className="cdot-list-content">
                <Table   bordered columns={columns} />
                <div className="page-operation-btn">
                    <Button type="primary" onClick={this.ToAdd}>
                        添加
                        {/* <Redirect to="/company/add" /> */}
                    </Button>
                </div>
            </div>
        )
    }
}


export default withRouter(CompanyList)
