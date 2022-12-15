/**
 * axios 配置
 */

import { TOKEN } from '@/constant'
import { storageSession } from '@/utils/storage'
import axios from 'axios'

class Request {
  // axios 实例对象
  instance = null
  // 取消重复请求
  CancelToken = axios.CancelToken
  // url 请求集合
  pending = []
  // 不必做防抖的接口白名单
  exceptUrl = []

  constructor(config) {
    // 创建 axios 实例
    this.instance = axios.create(config)
    this.interceprtorsObj = config.interceptors

    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  // 取消重复请求
  removePending(config) {
    this.pending.map((item, index) => {
      if (item.url === `${config.url}/request_type=${config.method}`) {
        item.cancel()
        this.pending.splice(index, 1)
      }
    })
  }

  // 请求拦截
  httpInterceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        //#region 重复请求处理

        if (!this.exceptUrl.includes(config.url)) {
          this.removePending(config)
          config.cancelToken = new this.CancelToken((c) => {
            const obj = {
              url: `${config.url}/request_type=${config.method}`,
              cancel: c,
            }
            this.pending.push(obj)
          })
        }

        //#endregion

        config.headers.Authorization = 'Bearer ' + storageSession.getItem(TOKEN)

        return config
      },
      (error) => {
        return error
      }
    )
  }

  // 响应拦截
  httpInterceptorsResponse() {
    this.instance.interceptors.response.use(
      (res) => {
        this.removePending(res.config)
        return res
      },
      (error) => {
        if (error.response) {
          const status = parseInt(error.response.status)
          if (status === 401) {
            return null
          } else if (status === 403) {
            return null
          } else if (status === 404) {
            return null
          } else if (status === 500) {
            return null
          }
          return null
        }
      }
    )
  }

  // get 请求
  get(url, params = {}) {
    return this.instance
      .get(url, params)
      .then((res) => {
        return res
      })
      .catch((error) => {
        return error
      })
  }
  // post 请求
  post(url, data = {}) {
    return this.instance
      .post(url, data)
      .then((res) => {
        return res
      })
      .catch((error) => {
        return error
      })
  }

  // 通用请求
  request(method, url, params = {}) {
    const config = { method: method, url, ...params }
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export { Request }
