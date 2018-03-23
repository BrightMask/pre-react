const namespace = 'company/'

import Service from '../../../services/serviceconfig'

export const START_REQUEST = 'START_REQUEST'//发起请求
export const GET_RESPONSE = 'GET_RESPONSE'//接收到返回至

export const SEARCH_LIST = 'SEARCH_LIST'//查询列表
export const START_SEARCH = 'START_SEARCH'
export const FINISH_SEARCH = 'FINISH_SEARCH'
export const SHOW_LIST = 'SHOW_LIST'
export const ADD_COMPANY = 'ADD_COMPANY'

//发起请求
export const start_request = () => ({
    type:START_REQUEST,
    loading:true
})

//接受响应
export const get_response = () => ({
    type:GET_RESPONSE,
    loading:false,
})

// 公司列表
export const show_list = data => ({
    type:SHOW_LIST,
    payload:data.data.data.list
})

// 添加公司
export const add_company = data => ({
    type:ADD_COMPANY,
    payload:data
})


// 搜索查询列表
export const searching = condition => (dispatch,getState) => {
    dispatch(start_request())
    return Service.search('/station/enterprise/search',condition)
        .then(function(data){
            dispatch(get_response())
            dispatch(show_list(data))
        })
}

// 添加公司
export const add = condition => (dispatch, getState) => {
    dispatch(start_request())
    return Service.search('/station/enterprise/add',condition)
        .then(function(data){
            dispatch(get_response())
            dispatch(add_company(data))
        })
}

// 删除公司
export const delete = condition => (dispatch, getState) => {
    dispatch(start_request())
    return Service.search('/station/enterprise/delete',condition)
        .then(function(data){
            dispatch(get_response())
            dispatch(searching())
        })
}

export const update = condition => (dispatch,getState) => {
    dispatch(start_request())
    return Service.search('/station/enterprise/update',condition)
        .then(function(data){
            dispatch(get_response())
            dispatch(searching())
        })
}
