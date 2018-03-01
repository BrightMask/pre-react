import React, { Component } from 'react'
import { Form, Icon,Button, Input,Upload } from 'antd'

const FormItem = Form.Item
class SetThemeForm extends Component {
    render () {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol:{span:6},
            wrapperCol:{span:14}
        }
        return (
            <Form>
                <FormItem
                    {...formItemLayout}
                    label="侧边栏底色"
                >
                    {getFieldDecorator('sider_bk')(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="头部底色"
                >
                    {getFieldDecorator('header_bk')(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Logo图片"
                >
                    {getFieldDecorator('logo_img')(
                        <Upload>
                            <Button>
                                <Icon type="upload" />选择Logo图片
                            </Button>
                        </Upload>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="搜索按钮"
                >
                    {getFieldDecorator('search_btn_color')(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="列表操作栏按钮"
                >
                    {getFieldDecorator('operation_btn_color')(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{span:12,offset:6}}
                >
                    <Button type="default" htmlType="submit">确认</Button>
                </FormItem>
            </Form>
        )
    }
}

const SetTheme = Form.create()(SetThemeForm)
export default  SetTheme
