import Vue from 'vue'
import Vuex from 'vuex'

import { handleModulesFile } from '@/utils/global'

Vue.use(Vuex)

// require.context
// 第一个参数: 要查找的文件路径
// 第二个: 是否查找子目录
// 第三个: 要匹配文件的正则
const modulesFiles = require.context('./modules', true, /\.js$/)
// 处理并获取 modules
const modules = handleModulesFile(modulesFiles)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
})
