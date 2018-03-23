import { fromJS } from 'immutable'
import {COMMON_SEARCH_FINISHED} from '../actions/filterActions'

const initialState = {
    areaData:null
}
export default (state = initialState, action ) => {
    switch (action.type) {
        case COMMON_SEARCH_FINISHED:
            return Object.assign({},state,{
                areaData:action.payload.data.data
            })
        default:
            return state
    }
}
