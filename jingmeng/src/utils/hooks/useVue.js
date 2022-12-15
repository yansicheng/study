/**
 * composition api 写法，调用 router 和 vuex
 */
import router from '@/router'
import store from '@/store'
import Vue from 'vue'

// 路由
export function useRouter() {
  return router
}
export function useRoute() {
  return router.currentRoute
}

// vuex
export function useStore() {
  return store
}

// eventBus
export function useEventBus() {
  return Vue.prototype.$bus
}
