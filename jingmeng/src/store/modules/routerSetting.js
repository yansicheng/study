/**
 * 路由相关
 */
import { routeModuleList } from '@/router/processRoute'

export default {
  namespaced: true,
  state: {
    routeModuleList, // 需要登陆才能查看的路由集合
    userRouteList: [], // 用户当前权限可查看的路由
    isAddDynamicRoute: false, //是否已添加动态路由的标识，true 为已添加
    sideMenuList: [], // 侧边栏路由信息
  },
  getters: {},
  mutations: {
    // 根据用户权限，获取并添加该权限下可查看到的路由
    generateRoute(state, { roles }) {
      console.log('generateRoute')
      const routeFilter = (routes) => {
        // 对路由进行筛选
        return routes.filter((item) => {
          if (item.children && item.children.length >= 1) {
            // 有 children 则递归
            routeFilter(item.children)
          }
          // 排除没有菜单信息的
          if (!item.meta) {
            return false
          }
          // 排除 layout
          if (item.meta.isLayout && item.children.length === 0) {
            return false
          }
          // 当前路由为 layout ，并存在 children 的肯定是页面路由
          if (item.meta.isLayout && item.children.length > 0) {
            return true
          }
          // 返回路由权限内包括该权限的路由
          return item.meta.roles.indexOf(roles) >= 0
        })
      }
      // 筛选得出当前权限能看的路由集合
      state.userRouteList = routeFilter(state.routeModuleList)
    },
    // 将路由转化为侧边栏展示的格式
    setSideMenuList(state) {
      console.log('setSideMenuList')
      const routerMap = (routes) => {
        return routes.map((item) => {
          // 存在 children 则递归
          if (item.children && !item.meta.isLayout) {
            const children = routerMap(item.children)
            return {
              label: item.meta.title,
              path: item.path,
              meta: item.meta,
              children,
            }
          }
          // 找到最底下的 children 则返回
          if (!item.children && !item.meta.isLayout) {
            return {
              label: item.meta.title,
              path: item.path,
              meta: item.meta,
            }
          }
          // 当底下只存在一个children时，返回那个 children 的数据作为页面一级菜单
          if (item.children.length === 1 && item.meta.isLayout) {
            return {
              label: item.children[0].meta.title,
              path: item.children[0].path,
              icon: item.children[0].meta.icon ?? item.meta.icon,
              meta: item.children[0].meta,
            }
          }
          // 如果存在多个 children ，则 children 作为页面二级菜单
          if (item.children.length > 1 && item.meta.isLayout) {
            const children = routerMap(item.children)
            return {
              label: item.meta.title,
              path: item.path,
              icon: item.meta.icon,
              meta: item.meta,
              children,
            }
          }
        })
      }
      // 处理数据
      state.sideMenuList = routerMap(state.userRouteList)
    },
  },
  actions: {},
}
