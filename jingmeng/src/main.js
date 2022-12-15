// ie兼容所需
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'es6-promise/auto'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './element/fix'
import element from './element/index'
Vue.use(element)

import './utils/global' //全局方法

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    // 设置全局事件总线
    Vue.prototype.$bus = this
  },
}).$mount('#app')
