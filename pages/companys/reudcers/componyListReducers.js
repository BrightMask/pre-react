import { SEARCH_LIST, GET_RESPONSE,START_REQUEST, SHOW_LIST, ADD_COMPANY } from '../actions/companyAcitons'

let initialState = {
    moduleName:'company',
    nowPageLevel:2,
    nowPage:'公司列表页',
    list:[],
    loading:false,
    isRequest:false,
    requestFinished:false,
}


export default (state = initialState,action) =>{
    switch (action.type) {
        case START_REQUEST:
        return Object.assign({},state,{
            loading:action.loading
        })

        case GET_RESPONSE:
        return  Object.assign({},state,{
            loading:action.loading
        })

        case SHOW_LIST:
            return Object.assign({},state,{
                list:action.payload
            })

        case ADD_COMPANY:
            return Object.assign({}, state, {

            })
        default:
            return state
    }
}
