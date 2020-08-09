/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: '系统监控',
  meta: {
    title: '系统监控',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: '在线用户',
      meta: { title: '在线用户', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: '定时任务',
      meta: { title: '定时任务', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name:'服务监控',
      meta: { title: '服务监控', noCache: true }
    },{
      path: 'max-chart',
      component: () => import('@/views/charts/max-chart'),
      name:'数据监控',
      meta: { title: '数据监控', noCache: true }
    }
  ]
}

export default chartsRouter
