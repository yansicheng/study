/**
 * axios 实例
 */

import { Request } from './axios'

// axios 基础配置
const defaultConfig = {
  baseURL: process.env.VUE_APP_WEB_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin-Type': '*', //允许跨域
  },
}

// axios 默认配置封装实例，用于请求时使用
export const http = new Request(defaultConfig)
