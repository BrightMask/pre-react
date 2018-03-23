import axios from 'axios'
import { Base64 } from 'js-base64';
const md5 = require('md5');


// 基础接口路径
axios.defaults.baseURL = 'http://dev.chargedot.com:18972/api/v1'
//默认请求头
axios.defaults.headers = {
    'X-Requested-With':'XMLHttpRequest'
}
axios.defaults.timeout = 10000

let cancle,promiseArr = {}
const CancelToken = axios.CancelToken
const source = CancelToken.source();

// 请求拦截器
axios.interceptors.request.use (config => {
    let nowtime = Date.parse(new Date())
    let key = 'NzI3ZTkxODIuxzUABCDEZXTlOTc8lPR5'
    let sign = md5('anyo' + nowtime + key)
    let name = 'anyo'
    let authorization = name + ':' + sign
    authorization = Base64.encode(authorization);
    authorization = 'Basic ' + authorization;

    // 判断如果为开发测试环境
    if(config.baseURL == 'http://dev.chargedot.com:18972/api/v1'){
        config.data.nologin = 999
    }
    config.headers.r = nowtime;
    config.headers.Authorization = authorization
    return config
}, error => {
    return Promise.reject (error)
})
//响应拦截器
axios.interceptors.response.use ( response => {
    return response
}, error => {
    if( error && error.response ) {
        switch ( error.response.status ) {
            case 400:
                error.message = '请求错误'
                break
            default:
                error.message = `连接错误${error.response.status}`
        }
    }
})


export default {
    add(url,params){
        return new Promise((resolve,reject) => {
            axios.post({
                url:url+'/add',
                data:JSON.stringify(params)
            }).then(res => {
                reslove(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    delete(url,params){
        return new Promise((resolve,reject) => {
            axios.post({
                url:url+'/delete',
                data:JSON.stringify(params)
            }).then(res => {
                reslove(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    update(url,params){
        return new Promise((resolve,reject) => {
            axios.post({
                url:url+'/update',
                data:JSON.stringify(params)
            }).then(res => {
                reslove(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    noStringifySearch(url,params){
        return new Promise((resolve,reject) => {
            axios.post(url,params).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    search(url,params){
        return new Promise((resolve,reject) => {
            axios.post(url,{
                data:JSON.stringify(params)
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },

}
