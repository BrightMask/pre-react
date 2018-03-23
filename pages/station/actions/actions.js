export const SEARCH_STATION_LIST = 'SEARCH_STATION_LIST'
export const START_REQUEST = 'START_REQUEST'
// 开始请求
export const start_request = () => ({
    type:START_REQUEST,

})

export const searc_station_list = condition => ({
    type:SEARCH_STATION_LIST,
})
