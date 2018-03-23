import React, { Component } from 'react'
import { Form, Button, Col, Row } from 'antd'
import { connect } from 'react-redux'
import PageFilterItem from '../components/page-filter-item'
import { searchArea } from '../actions/filterActions'



class PageFilterContainer extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let condition = {
            type: "province",
            parents: ""
        }
        const { dispatch } = this.props
        dispatch(searchArea(condition))
    }

    setFilter(filters,filter) {
        let data = []
        filters.forEach((filteritem,index) => {
            data.push(
                <Col sx={8} sm={8} md={8} lg={8} xl={6} xxl={3} key={index}>
                    <PageFilterItem  state={filteritem} filter={filter}/>
                </Col>
            )
        })
        return data
    }
    searchList() {

    }


    render () {
        let { filters,filter } = this.props
        return (
            <div className="page-filter-container-box">
                <Form>
                    <Row gutter={16}>
                        {this.setFilter(filters,filter)}
                    </Row>
                    {
                        filters?
                        <Row>
                            <Col span={1} offset={21}>
                                <Button type="primary" size="default">查询</Button>
                            </Col>
                        </Row>:null
                    }
                </Form>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    filter:state.filter
})



export default connect (mapStateToProps)(PageFilterContainer)
// export default PageFilterContainer
