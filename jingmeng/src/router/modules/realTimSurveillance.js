const routes = [
  {
    path: '/realTimSurveillance',
    redirect: '/realTimSurveillance/cameraSurveillance',
    component: null,
    meta: {
      title: '实时监控',
      isLayout: true,
      sort: 2,
    },
    children: [
      {
        name: 'cameraSurveillance',
        path: '/realTimSurveillance/cameraSurveillance',
        meta: {
          title: '机器人实时监控',
          keepAlive: true,
          authority: true,
          sort: 1,
          roles: [1],
          isHide: false,
        },
      },
      {
        name: 'inspectSurveillance',
        path: '/realTimSurveillance/inspectSurveillance',
        meta: {
          title: '巡视过程监控',
          keepAlive: true,
          authority: true,
          sort: 2,
          roles: [1],
          isHide: false,
        },
      },
    ],
  },
]
export default routes
