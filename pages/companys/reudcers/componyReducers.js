import { SEARCH_LIST, FINISH_SEARCH,START_SEARCH } from '../actions/companyAcitons'

let initialState = {
    moduleName:'company',
    nowPage:'list',
    list:[],
    loading:false,
    isRequest:false,
    requestFinished:false
}


export default (state = initialState,action) =>{
    switch (action.type) {
        case START_SEARCH:
            return Object.assign({},state,{
                loading:true
            })
        case FINISH_SEARCH:
            return Object.assign({},state,{
                loading:false,
                list:payload
            })
        default:
            return state
    }
}
