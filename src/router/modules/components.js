/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: '系统管理',
  meta: {
    title: '系统管理',
    icon: 'component'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: '用户管理',
      meta: { title: '用户管理' }
    },
    {
      path: 'markdown',
      component: () => import('@/views/components-demo/markdown'),
      name: '角色管理',
      meta: { title: "角色管理" }
    },
    {
      path: 'json-editor',
      component: () => import('@/views/components-demo/json-editor'),
      name: '菜单管理',
      meta: { title: '菜单管理' }
    },
    {
      path: 'split-pane',
      component: () => import('@/views/components-demo/split-pane'),
      name: '字典管理',
      meta: { title: '字典管理' }
    },
    {
      path: 'avatar-upload',
      component: () => import('@/views/components-demo/avatar-upload'),
      name: '汇率字典',
      meta: { title: '汇率字典' }
    },
    {
      path: 'dropzone',
      component: () => import('@/views/components-demo/dropzone'),
      name: '参数设置',
      meta: { title: '通知公告' }
    },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: '日志管理',
      meta: { title: '日志管理' }
    },
    {
      path: 'count-to',
      component: () => import('@/views/components-demo/count-to'),
      name: '合同项目管理',
      meta: { title: '合同项目管理' }
    },
    {
      path: 'mixin',
      component: () => import('@/views/components-demo/mixin'),
      name: '节假日字典',
      meta: { title: '节假日字典' }
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/back-to-top'),
      name: '管理员操作',
      meta: { title: '管理员操作' }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/drag-dialog'),
      name: '合同Excel表导入',
      meta: { title: '合同Excel表导入' }
    },
    {
      path: 'drag-select',
      component: () => import('@/views/components-demo/drag-select'),
      name: '还款利率管理',
      meta: { title: '还款利率管理' }
    },
    {
      path: 'dnd-list',
      component: () => import('@/views/components-demo/dnd-list'),
      name: '运维',
      meta: { title: '运维' }
    },
    {
      path: 'drag-kanban',
      component: () => import('@/views/components-demo/drag-kanban'),
      name: 'DragKanbanDemo',
      meta: { title: 'Drag Kanban' }
    }
  ]
}

export default componentsRouter
