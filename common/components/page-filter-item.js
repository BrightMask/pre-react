import React, { Component } from 'react'
import { Form, Col, Select, Input } from 'antd'
import '../css/common.css'

const Option = Select.Option
const FormItem = Form.Item


class PageFilterItem extends Component {


    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state
    }

    render () {
        console.log(this.props)
        let { state } = this.props
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol:{
                xs:{span:8},
                sm:{span:12},
                md:{span:8},
                lg:{span:8}
            },
            wrapperCol:{
                xs:{span:16},
                sm:{span:12},
                md:{span:16},
                lg:{span:16}
            }
        }



        return (

            <FormItem
                {...formItemLayout}
                label={state.filter_name}
                 className="each-page-filter"
            >
                {
                    state.filter_type == 'write_select'?
                    getFieldDecorator(state.filter_key,{
                    })(
                        <Select size="small" mode="tags" style={{width:'100%'}}></Select>
                    ):
                    state.filter_type == 'select'?
                    getFieldDecorator(state.filter_key,{
                    })(
                        <Select size="small" style={{width:'100%'}}></Select>
                    ):
                    state.filter_type == 'write'?
                    getFieldDecorator(state.filter_key,{
                    })(
                        <Input size="small"/>
                    ):''
                }
            </FormItem>
        )
    }
}

export default Form.create()(PageFilterItem)
