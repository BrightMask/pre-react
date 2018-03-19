import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Tabs } from 'antd'
import { connect } from 'react-redux'
import  {changeTab} from '../actions/systemUserActions'
import SystemUserList from '../components/systemUserList'
import SystemUserGroupList from '../components/systemUserGroupList'
import '../css/style.css'

const TabPane = Tabs.TabPane
class SystemUserContainer extends Component {

    render () {
        const {dispatch, changeTab } = this.props
        return (
            <Tabs defaultActiveKey="sys_user" onChange={changeTab} className="sys-tab-container">
                <TabPane tab="系统用户" key="sys_user">
                    <SystemUserList />
                </TabPane>
                <TabPane tab="系统用户组" key="sys_group">
                    <SystemUserGroupList />
                </TabPane>
            </Tabs>
        )
    }
}

const mapStateToProps = state => {

    return {
        data:state.data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeTab:key => dispatch(changeTab(key))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SystemUserContainer)
