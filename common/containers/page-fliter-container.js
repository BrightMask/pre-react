import React, { Component } from 'react'
import { Form, Button, Col, Row } from 'antd'
import { connect } from 'react-redux'
import PageFilterItem from '../components/page-filter-item'

class PageFilterContainer extends Component {
    constructor(props){
        super(props)
    }


    setFilter(filter_list) {
        let data = []
        filter_list.forEach((filteritem,index) => {
            data.push(
                <Col sx={8} sm={8} md={8} lg={4} xl={3} xxl={3} key={index}>
                    <PageFilterItem  state={filteritem} />
                </Col>
            )
        })
        return data
    }

    render () {
        console.log(this.props)
        let { filter } = this.props
        let { filter_list } = filter
        return (
            <div className="page-filter-container-box">
                <Row gutter={16}>
                    {this.setFilter(filter_list)}
                </Row>
                {
                    filter_list?
                    <Row>
                        <Col span={1} offset={21}>
                            <Button type="primary" size="default">查询</Button>
                        </Col>
                    </Row>:null
                }

            </div>
        )
    }
}



const mapStateToProps = state => ({
    filter:state.filter
})
const mapDispatchToProps = dispatch => ({

})


export default connect (mapStateToProps, mapDispatchToProps)(PageFilterContainer)
