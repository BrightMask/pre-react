import React, { Component } from 'react'
import { Form, Col, Select, Input } from 'antd'
import { Cascader } from 'antd'
import '../css/common.css'

const Option = Select.Option
const FormItem = Form.Item

class PageFilterItem extends Component {
    constructor(props){
        super(props)
    }
    // shouldComponentUpdate(nextProps) {
    //     return nextProps.state != this.props.state
    // }
    onChange(value){
    }

    render () {
        let { state,filter } = this.props
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
                        <Select mode="tags" style={{width:'100%'}} placeholder={state.filter_palceholder}></Select>
                    ):
                    state.filter_type == 'select'?
                    getFieldDecorator(state.filter_key,{
                    })(
                        <Select style={{width:'100%'}} placeholder={state.filter_palceholder}></Select>
                    ):
                    state.filter_type == 'write'?
                    getFieldDecorator(state.filter_key,{
                    })(
                        <Input placeholder={state.filter_palceholder}/>
                    ):
                    state.filter_type == 'cascader'?
                    getFieldDecorator(state.filter_key,{
                    })(
                        <Cascader/>
                    ):''
                }
            </FormItem>
        )
    }
}

export default Form.create()(PageFilterItem)
