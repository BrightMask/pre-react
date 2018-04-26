import React from 'react'
import { Form } from 'antd'

const FormItem = Form.Item

class SystemTheme extends React.Component {

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        return (
            <Form>
                <FormItem
                    {...formItemLayout}
                    label="侧边栏"
                >


                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="顶部"
                >

                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="操作栏按钮"
                >

                </FormItem>
            </Form>
        )
    }
}

export default SystemTheme
