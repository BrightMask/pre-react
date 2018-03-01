import { combineReducers } from 'redux';
import isLogin from './pages/login/redux/loginRedux'

var  rootRedux = combineReducers({
    isLogin
})

export default rootRedux
