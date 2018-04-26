import React, { Component } from 'react'
import { Form, Button, Col, Row } from 'antd'
import { connect } from 'react-redux'
import PageFilterItem from '../components/page-filter-item'
import { searchArea } from '../actions/filterActions'

const FormItem = Form.Item


class PageFilter extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let condition = {
            type: "getAreaInfo",
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

    searchList = (e) => {
        e.preventDefault();
        this.props.form.validateFields(( err, values ) => {
            if(!err) {
                console.log(values)
            }
        })
    }

    render () {
        let { filters,filter } = this.props
        return (
            <div className="page-filter-container-box">
                <Form onSubmit={this.searchList}>
                    <Row gutter={16}>
                        {this.setFilter(filters,filter)}
                        {
                            filters?
                            <Col span={1}>
                                <FormItem>
                                    <Button htmltype="submit" type="primary" size="default">查询</Button>
                                </FormItem>
                            </Col>
                            :null
                        }
                    </Row>
                </Form>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    filter:state.filter
})

const PageFilterContainer = Form.create()(PageFilter)

export default connect (mapStateToProps)(PageFilterContainer)
// export default PageFilterContainer
