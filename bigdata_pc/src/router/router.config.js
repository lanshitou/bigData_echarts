// 路由配置
const router = [
  {
    path: '/',
    component: resolve => require(['../pages/home.vue'], resolve),
    children: [
      {
        path: '/user_index',
        name: 'user_index',
        meta: {
          requireAuth: true,
          permission: []
        },
        component: resolve => require(['../view/user/index.vue'], resolve)
      },
      {
        path: '/user_list',
        name: 'user_list',
        meta: {
          requireAuth: true,
          permission: []
        },
        component: resolve => require(['../view/user/userList.vue'], resolve)
      },
      {
        path: '/user_detail',
        name: 'user_detail',
        meta: {
          requireAuth: true,
          permission: []
        },
        component: resolve => require(['../view/user/detail.vue'], resolve)
      },
      {
        path: '/expert_index',
        name: 'expert_index',
        meta: {
          requireAuth: true,
          permission: []
        },
        component: resolve => require(['../view/expert/index.vue'], resolve)
      },
      {
        path: '/expert_list',
        name: 'expert_list',
        meta: {
          requireAuth: true,
          permission: []
        },
        component: resolve => require(['../view/expert/expertList.vue'], resolve)
      },
      {
        path: '/mall_index',
        name: 'mall_index',
        meta: {
          requireAuth: true,
          permission: []
        },
        component: resolve => require(['../view/mall/index.vue'], resolve)
      },
      {
        path: '/monitor_index',
        name: 'monitor_index',
        meta: {
          requireAuth: true,
          permission: []
        },
        component: resolve => require(['../view/monitor/index.vue'], resolve)
      }
    ]
  },
  {
    path: '*',
    name: 'Page404',
    component: resolve => require(['../pages/404.vue'], resolve)
  }
]

export default router
