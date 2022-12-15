import { storageSession } from '@/utils/storage'
import { TOKEN, ROLES } from '@/constant'
import store from '@/store'
import { errorPageRoute } from './modules/base'

export default (router) => {
  // 前置导航守卫
  router.beforeEach((to, from, next) => {
    if (storageSession.getItem(TOKEN)) {
      // 是否已添加动态路由
      if (store.state.routerSetting.isAddDynamicRoute) {
        if (to.meta.authority) {
          next()
        } else if (to.path === '/login') {
          next({ path: '/' })
        } else {
          next()
        }
        return
      }

      // 添加动态路由
      store.commit('routerSetting/generateRoute', { roles: storageSession.getItem(ROLES) })
      const routes = store.state.routerSetting.userRouteList
      routes.forEach((item) => {
        router.addRoute(item)
      })
      // 最后再添加 404 页面
      router.addRoute(errorPageRoute)
      // 将动态路由添加标识设置为 true
      store.state.routerSetting.isAddDynamicRoute = true
      // 获取多页签缓存的页面数组
      store.commit('layoutTabsSetting/setKeepAliveTabs')
      // 生成菜单所需要的路由对象
      store.commit('routerSetting/setSideMenuList')
      next({ path: to.path })
    } else if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  })

  // 后置导航路由
  // eslint-disable-next-line no-unused-vars
  router.afterEach((to, from) => {
    document.title = to.meta.title

    // 是否添加入多页签
    const currentRoute = to.matched.find((item) => item.name === to.name)
    // 只有是 keepAlive 并且 isHide 为 false 的才能加入多页签
    if (currentRoute.meta.keepAlive && !currentRoute.meta.isHide) {
      const tabNameList = store.getters['layoutTabsSetting/tabNameList']
      if (!tabNameList.includes(currentRoute.name)) {
        store.commit('layoutTabsSetting/addLayoutTab', currentRoute)
      }
    }
  })
}
