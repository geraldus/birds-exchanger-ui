/* global window */
import { message } from 'antd';
import axios from 'axios';
import qs from 'qs';
import jsonp from 'jsonp';
import lodash from 'lodash';
import pathToRegexp from 'path-to-regexp';
import apis from '@/configs/apis';


const timeout = 3000;

const fetch = (options: any) => {
    let {
        method = 'get',
        data,
        fetchType,
        url,
    } = options
    let cloneData = typeof data === typeof undefined
        ? {}
        : data.constructor === FormData
            ? data
            : lodash.cloneDeep(data) || {}; //eslint-disable-line
    try {
        let domin = ''
        if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
            domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0]
            url = url.slice(domin.length)
        }
        const match: any[] = pathToRegexp.parse(url)
        url = pathToRegexp.compile(url)(data)
        for (let item of match) {
            if (item instanceof Object && item.name in cloneData) {
                delete cloneData[item.name]
            }
        }
        url = domin + url
    } catch (e) {
        return Promise.reject(e);
    }

    if (fetchType === 'JSONP') {
        return new Promise((resolve, reject) => {
            jsonp(url, {
                param: `${qs.stringify(data)}&callback`,
                name: `jsonp_${new Date().getTime()}`,
                timeout,
            }, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve({ statusText: 'OK', status: 200, data: result })
            })
        })
    }

    let headers = cloneData.constructor === FormData
        ? { 'Content-Type': 'multipart/form-data' }
        : {}

    switch (method.toLowerCase()) {
        case 'get':
            return axios.get(url, { params: cloneData, timeout })
        case 'delete':
            return axios.delete(url, { data: cloneData })
        case 'post':
            return axios({
                method: 'post',
                headers: headers,
                url: url,
                data: cloneData,
            })
        case 'put':
            return axios.put(url, cloneData)
        case 'patch':
            return axios.patch(url, cloneData)
        default:
            return axios({
                timeout,
                ...options,
            })
    }
}

export default function request(options: any) {
    if (options.url && options.url.indexOf('//') > -1) {
        const origin = `${options.url.split('//')[0]}//${options.url.split('//')[1].split('/')[0]}`
        if (window.location.origin !== origin) {
            if (apis.CORS.indexOf(origin) > -1) {
                options.fetchType = 'CORS'
            } else {
                options.fetchType = 'JSONP'
            }
        }
    }

    return fetch(options).then((response: any) => {
        let { statusText, status, data } = response
        return Promise.resolve({ //eslint-disable-line
            success: true,
            message: statusText,
            statusCode: status,
            data: data
        })
    }).catch((error) => {
        const { response, config = {} } = error
        const { data } = response
        let msg = data.message || error.message
        let success = true
        let statusCode
        if (response && lodash.isPlainObject(response)) {
            statusCode = response.status
        } else {
            statusCode = 600
            msg = error.message || 'Network Error'
            message.error(msg)
            return Promise.reject({ success: false, statusCode, message: msg, url: config.url })
        }
        success = !(
            response.statusText.constructor == String &&
            response.data.constructor == String
        )
        if (!success) {
            if (response.data) {
                message.error(response.data)
            }
            if (msg) {
                message.error(msg)
            }
        }
        return Promise.resolve({
            success: success,
            statusCode,
            message: msg,
            data: success ? data : undefined
        })
    })
}

export const postRequest = (params, ...rest) => fetch({
    ...params,
    method: 'post'
}, ...rest)