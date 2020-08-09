/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  name: '系统工具',
  meta: {
    title: '系统工具',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: '表单构建',
      meta: { title: '表单构建' },
    },
    {
      path: 'menu2',
      name: '代码生成',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '代码生成' }
    },
    // {
    //   path: 'menu2',
    //   name: '系统接口',
    //   component: () => import('@/views/nested/menu2/index'),
    //   meta: { title: '系统接口' }
    // }
  ]
}

export default nestedRouter
