import { fromJS } from 'immutable'

const initialState = {
    name:'公司管理',
    filter_list:[
        
    ]
}

export default (state = initialState, action ) => {
    switch (action.type) {
        default:
            return state
    }
}
