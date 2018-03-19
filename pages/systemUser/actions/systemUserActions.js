import fetch from 'cross-fetch'
import Service from '../../../services/serviceconfig'
const namespace="systemuser/"

export const REQUESRT_LIST = 'REQUESRT_LIST'//发送获取列表
export const RECEIVE_LIST = 'RECEIVE_LIST'//接收到返回的列表
export const CHANGE_TAB = 'CHANGE_TAB'//展示列表类型

// 同步Action
// 切换tab

export function changeTab (key) {
    return function(dispatch) {
        dispatch(sendRequest(key))
    }
}


//异步Action
export function requestList (condition) {
    return {
        type:REQUESRT_LIST,
        condition
    }
}

export function receiveList (data) {
    return {
        type:RECEIVE_LIST,
        data,

    }
}

export function sendRequest(condition) {
    let data = null
    let payload = {
        offset:0,
        total:0,
        limit:20,
        order:'desc',
        query:'',
        enterprise_id:0,
        province_id:0,
        city_id:0,
        district_id:0,
        systemuser_group_id:0,
        user_operation:''
    }

    let req = {
        data:JSON.stringify(payload)
    }
    return function(dispatch) {
        dispatch(requestList(condition))
        Service.search('/system/user',req).then(function(data){
            dispatch(receiveList(data.data))
        })

    }
}
