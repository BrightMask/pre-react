import { connect } from 'react-redux'
import React, { Component } from 'react'
// import actions from '../actions/companyAcitons'
import CompanyList from '../components/companyList'
import { searching } from '../actions/companyAcitons'


class CompanyContainer extends Component {


    render () {
        return (
            <div className="page-container component-container">
                {/* <CompanyList /> */}
            </div>
        )
    }
}


// const mapStateToProps = state => {
//     return {
//         list:state.company.list,
//         loading:state.company.loading
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         searching:condition => dispatch(searching(condition))
//     }
// }

export default CompanyContainer
// = connect(mapStateToProps)(CompanyContainer)
