import { HomeOutline } from '@v2icons/ionicons5'

const routes = [
  {
    path: '/',
    redirect: '/generalInfomation/substationOverview',
    component: null,
    meta: {
      title: '信息总览',
      isLayout: true,
      sort: 1,
      //菜单图标
      icon: HomeOutline,
    },
    children: [
      {
        name: 'controlStationOverview',
        path: '/generalInfomation/controlStationOverview',
        component: null,
        meta: {
          // 菜单名称
          title: '集控站总览',
          keepAlive: true,
          authority: true,
          sort: 1,
          roles: [1],
          isHide: false,
        },
      },
      {
        name: 'substationOverview',
        path: '/generalInfomation/substationOverview',
        component: null,
        meta: {
          //菜单名称
          title: '变电站总览',
          //是否需要缓存
          keepAlive: true,
          //是否需要登录
          authority: true,
          //排序
          sort: 1,
          //权限
          roles: [1],
          //是否隐藏
          isHide: false,
        },
      },
    ],
  },
]
export default routes
