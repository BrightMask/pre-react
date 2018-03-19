const namespace = 'company/'

import Service from '../../../services/serviceconfig'

export const SEARCH_LIST = 'SEARCH_LIST'
export const START_SEARCH = 'START_SEARCH'

// 开始搜索
export const start_search = condition =>({
        type:START_SEARCH,
        payload:condition
})

export const finish_search = data => ({
        type:FINISH_SEARCH,
        payloadL:data
})


// 搜索查询列表
export const searching = condition => dispatch => {
    console.log('aaa')
    dispatch(start_search(condition))
    return Service.search('/station/enterprise/search',condition)
        .then(function(data){
            dispatch(finish_search(data))
        })
}
