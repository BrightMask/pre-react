import React, { Component } from 'react'
import { Form, Input, Button, Row, Col, Select } from 'antd'
import CompanyConfig from '../componetConfig'

const Option = Select.Option
const FormItem = Form.Item
const formGroup = CompanyConfig.addConfig

class AddCompany extends Component {



    render () {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:{span:10},
                sm:{span:10},
                md:{span:10},
                lg:{span:10},
                xl:{span:10},
                xxl:{span:10}

            },
            wrapperCol:{
                xs:{span:12},
                sm:{span:12},
                md:{span:12},
                lg:{span:12},
                xl:{span:12},
                xxl:{span:12}
            }
        }
        return (
            <Form className="add-form">
                <Row>
                    {
                        formGroup.map((item,index) => (
                            <Col
                                xs={24}
                                sm={24}
                                md={24}
                                lg={12}
                                xl={12}
                                xxl={6}
                                key={index}
                            >
                                {
                                    item.form_type == 'input'?
                                    <FormItem
                                        {...formItemLayout}
                                        label={item.name}
                                    >
                                            {getFieldDecorator(item.key,{

                                            })(
                                                <Input placeholder={item.placeholder}/>
                                            )}
                                    </FormItem>:
                                        item.form_type == 'select'?
                                        <FormItem
                                            {...formItemLayout}
                                            label={item.name}
                                        >
                                                {getFieldDecorator(item.key,{

                                                })(
                                                    <Select placeholder={item.placeholder}></Select>
                                                )}
                                        </FormItem>:null

                                }
                            </Col>
                        ))
                    }

                    <FormItem
                        wrapperCol={{span:12,offset:4}}
                    >
                        <Button type="primary">确认</Button>
                    </FormItem>
                </Row>
            </Form>

        )
    }
}
export default AddCompany = Form.create()(AddCompany)
