/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: '实例演示',
  meta: {
    title: '实例演示',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamic-table/index'),
      name: '表单',
      meta: { title: '表单' },
      children:[
        // {
        //   path: 'dynamic-table',
        //   component: () => import('@/views/table/dynamic-table/index'),
        //   name: '按鈕',
        //   meta: { title: '按鈕' },
        // }
        // ,{
        //   path: 'dynamic-table',
        //   component: () => import('@/views/table/dynamic-table/index'),
        //   name: '栅格',
        //   meta: { title: '栅格' },
        // }
        // ,{
        //   path: 'dynamic-table',
        //   component: () => import('@/views/table/dynamic-table/index'),
        //   name: '下拉框',
        //   meta: { title: '下拉框' },
        // }, {
        //   path: 'dynamic-table',
        //   component: () => import('@/views/table/dynamic-table/index'),
        //   name: '基本表单',
        //   meta: { title: '基本表单' },
        // },{
        //   path: 'dynamic-table',
        //   component: () => import('@/views/table/dynamic-table/index'),
        //   name: '功能擴展',
        //   meta: { title: '功能擴展' },
        // },{
        //   path: 'dynamic-table',
        //   component: () => import('@/views/table/dynamic-table/index'),
        //   name: '拖動排序',
        //   meta: { title: '拖動排序' },
        // }, {
        //   path: 'dynamic-table',
        //   component: () => import('@/views/table/dynamic-table/index'),
        //   name: '選項卡&面板',
        //   meta: { title: '選項卡&面板' },
        // },{
        //   path: 'dynamic-table',
        //   component: () => import('@/views/table/dynamic-table/index'),
        //   name: '表單校騐',
        //   meta: { title: '表單校騐' },
        // },{
        //   path: 'dynamic-table',
        //   component: () => import('@/views/table/dynamic-table/index'),
        //   name: '表單向導',
        //   meta: { title: '表單向導' },
        // },{
        //   path: 'dynamic-table',
        //   component: () => import('@/views/table/dynamic-table/index'),
        //   name: '文件上傳',
        //   meta: { title: '文件上傳' },
        // }
       ]
    }
  ]
}
export default tableRouter
