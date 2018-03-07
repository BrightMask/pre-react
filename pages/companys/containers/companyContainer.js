import { connect } from 'react-redux'
import CompanyList from './components/list'
import React, { Component } from 'react'
import CompanyList from '../components/list'

class CompanyContainer extends Component {
    render () {
        let { state } = this.props;

        let mockState = {
            companys:[
                {
                    id:1,
                    name:'测试一',
                    type:'运营商'
                },{
                    id:2,
                    name:'测试二',
                    type:'运营商'
                },{
                    id:3,
                    name:'测试三',
                    type:'运营商'
                }

            ]
        }
        state = mockState


        return (
            <div class="component-container">
                
            </div>
        )
    }
}

export default connect()(CompanyContainer)
