import React,{ Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
const PropTypes = require('prop-types');
import PageFilterContainer from '../../../common/containers/page-fliter-container'
import PageNameNav from '../../../common/components/page-nav-container'
import PageConfig from '../componetConfig'
import PageList from '../../../common/components/list'
import { searching } from '../actions/companyAcitons'
import {withRouter} from "react-router-dom";


class CompanyList extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        const { dispatch } = this.props
        console.log(this.props)
        dispatch(searching())
    }
    routerAdd(){
        this.props.history.push("/company/add");
    }

    routerEdit(){
        this.props.history.push("/company/edit")
    }
    render () {
        const { list, history, nowPage,nowPageLevel } = this.props
        console.log(this.props)

        return (
            <div className="list-page-container">
                <PageNameNav  nowPage={nowPage} nowPageLevel={nowPageLevel}/>
                <PageFilterContainer filters={PageConfig.filterConfig}/>
                <PageList pageConfig={PageConfig} data={list}/>
                <Button onClick={this.routerAdd.bind(this)}>添加公司</Button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ...state.companylist,
        ...state.public
    }
}
export default connect(mapStateToProps)(CompanyList)
