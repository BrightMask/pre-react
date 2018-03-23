import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
const FormItem  = Form.Item;
import './css/style.css'

class LoginForm extends React.Component {
    // 登录
    goLogin(e){
        this.props.form.validateFields((err,values) => {
            if(!err) {
                this.props.GOLOGIN(values.userName,values.password,this.props.history)
            }
        })
    }

    componentDidMount() {
    }

    render () {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="cdot-login-page">
                <Form>
                    <FormItem>
                        {getFieldDecorator('userName',{
                            rules:[{requied:true,message:'请输入用户名'}]
                        })(
                            <Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password',{
                            rules:[{requied:true,message:'请输入密码'}]
                        })(
                            <Input prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" className="login-btn" onClick={this.goLogin.bind(this)}>登录</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const Login = Form.create()(LoginForm)
export default Login
