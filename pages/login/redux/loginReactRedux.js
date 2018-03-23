import { connect } from 'react-redux';

import Login from '../login-index'



function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        GOLOGIN:function(userName,password,history) {

            setTimeout(function(){
                dispatch({type:'GO_LOGIN'})

                let formData = new FormData()
                formData.append('name',userName)
                formData.append('pwd',password)
                formData.append('nologin',999)

                fetch('http://dev.chargedot.com:18972/api/v1/system/user/login',{
                    method:'POST',
                    mode:'no-cors',
                    body:formData
                }).then(
                function (res) {
                }
                ).then(function (json) {

                }).then(function (datas) {
                })
                history.push("/")
            },1000)
        }
    }
}

const LoginReactRedux  = connect(mapStateToProps,mapDispatchToProps)(Login)

export default LoginReactRedux
