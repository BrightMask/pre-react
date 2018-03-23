import Service from '../../services/serviceconfig'


export const SEARCHAREA = 'SEARCHAREA'
export const COMMON_SEARCH_FINISHED = 'COMMON_SEARCH_FINISHED'

export const  common_search_finished = data => ({
    type:COMMON_SEARCH_FINISHED,
    payload:data
})

export const searchArea = (condition) => (dispatch,getState) => {
    return Service.noStringifySearch('/util/dict/search',condition)
        .then(function(data){
            dispatch(common_search_finished(data))
        })
}
