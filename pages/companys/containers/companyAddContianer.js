import React, { Component } from 'react'
import { Form, Col, Row } from 'antd'
import { connect } from 'react-redux'
import AddCompany from '../components/addcompany'
import PageConfig from '../componetConfig'


class CompanyAddContainer extends Component{
    constructor(props){
        super(props)
    }

    render () {

        const {addConfig } = PageConfig
        return (
            <div>
                <Form>
                    <Row>
                        {
                            addConfig.map((item,index) => (
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
            </div>
        )
    }
}


export default connect()(CompanyAddContainer)
