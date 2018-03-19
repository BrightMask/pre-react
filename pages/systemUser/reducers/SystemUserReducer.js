import { RECEIVE_LIST }  from '../actions/systemUserActions'

const initialState = {
    systemuserlist:[],
    systemusergrouplist:[],
    show_tab:'user',
    data:null
}

function showType(state=initialState,action) {
    switch(action.type) {
        case SHOW_SYSTEM_USER:
            return Object.assign({},state,{
                show_tab:'user'
            })
        case SHOW_SYSTEM_USER_GROUP:
            return Object.assign({},state,{
                show_tab:'group'
            })
        case CHANGE_TAB:
            return Object.assign({},state,{
                show_tab:action.key
            })
        case RECEIVE_LIST：
            return Object.assign({},state,{
                data:action.data
            })
        default：
            return state
    }
}
