import React from 'react'
import { Form } from 'antd'

const FormItem = Form.Item

class SkinSetting extends React.Component {
    render () {
        const { getFieldDecorator } = this.props.form
        return (
            <Form>
                <FormItem
                    label="名称"
                >
                </FormItem>
            </Form>
        )
    }
}
