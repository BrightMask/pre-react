import Service from '../../services/serviceconfig'

export const COMMON_DATA = 'COMMON_DATA'
export const FINISH_COMMON_SEARCH = 'FINISH_COMMON_SEARCH'

export const finish_common_search = data => ({
    type:FINISH_COMMON_SEARCHM,
    payload:data
})

export const search_common_data = (condition) => (dispatch, getState) => {
    return Service.noStringifySearch('/util/dict/search',condition)
        .then(function(data){
            dispatch(finish_common_search(data))
        })
}
