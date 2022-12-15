import Vue from 'vue'
import VueRouter from 'vue-router'
import routerGuards from './routerGuards'
import { loginPageRoute } from './modules/base'
import { changeOriginalRouterApi } from './originalRouteApi'

Vue.use(VueRouter)

// 重写 router api
changeOriginalRouterApi(VueRouter)

const routes = [loginPageRoute]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
// 导航守卫
routerGuards(router)

export default router
