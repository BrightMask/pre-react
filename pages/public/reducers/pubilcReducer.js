import {SEND_REQUEST,RECEIVE_RESPONSE} from '../actions/publicActions'
let initialState = {
    loading:false,
}

export default (state = initialState,actions) => {
    switch ( actions.type ) {
        case SEND_REQUEST:
            return Object.assign({},state,{
                loading:actions.loading
            })
        case RECEIVE_RESPONSE:
            return Object.assign({},state,{
                loading:action.loading
            })
        default:
            return state
    }
}
