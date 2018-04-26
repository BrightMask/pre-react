export const SEND_REQUEST = 'SEND_REQUEST'
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE'

// 发球请求
export const send_request = () => ({
    type:SEND_REQUEST,
    loading:true
})

//收到返回
export const receive_response = () => ({
    type:RECEIVE_RESPONSE,
    loading:false
})
