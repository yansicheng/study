const routes = [
  {
    path: '/inspectEquipMng',
    redirect: '/',
    component: null,
    meta: {
      title: '巡视设备管理',
      isLayout: true,
      sort: 3,
    },
    children: [
      {
        name: 'inspectCamera',
        path: '/inspectCamera',
        meta: {
          title: '巡视摄像机',
          isLayout: false,
          sort: 1,
          roles: [1],
        },
        children: [
          {
            name: 'ledgerMaintain',
            path: '/ledgerMaintain',
            meta: {
              title: '台账维护',
              isLayout: false,
              sort: 1,
              roles: [1],
              isHide: false,
            },
          },
          {
            name: 'maintainProgram',
            path: '/maintainProgram',
            meta: {
              title: '维保计划',
              isLayout: false,
              sort: 2,
              roles: [1],
              isHide: false,
            },
          },
        ],
      },
      {
        name: 'inspectRobot',
        path: '/inspectRobot',
        meta: {
          title: '巡视机器人',
          isLayout: false,
          sort: 2,
          roles: [1],
        },
        children: [],
      },
      // {
      //   name: '',
      //   path: '',
      //   meta: {
      //     title: '',
      //     isLayout: false,
      //     sort: 1,
      //   },
      //   children: [],
      // },
    ],
  },
]

export default routes
