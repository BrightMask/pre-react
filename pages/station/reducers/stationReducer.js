import {SEARCH_STATION_LIST,START_REQUEST} from '../actions/actions'

let initialState = {
    loading:false,
    station_list:[],
    station_detail:null
}

export default ( state = initialState, action ) => {
    switch(action.type) {
        case SEARCH_STATION_LIST:
            return Object.assign({},state,{
                loading:true
            })
        default:
            return state
    }
}
