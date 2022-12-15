import Vue from 'vue'
import { storageSession, storageLocal } from './storage'
import cookieProxy from './cookie'

Vue.prototype.$sessionStorage = storageSession
Vue.prototype.$localStorage = storageLocal
Vue.prototype.$cookie = cookieProxy

// 处理 modules 内的文件
export function handleModulesFile(modulesFiles) {
  //modulesFiles.keys()返回包含文件名的数组
  const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1') //去掉文件名的./和.js
    const value = modulesFiles(modulePath)
    if (value.default) {
      modules[moduleName] = value.default //value.default包含文件内的内容
    }
    return modules
  }, {})
  return modules
}
