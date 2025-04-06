import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/dishes',
      name: 'dishes',
      component: () => import('../views/Dishes.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/franchisee',
      name: 'franchisee',
      component: () => import('../views/Franchisee.vue')
    }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 这里可以添加页面标题
  document.title = `餐厅 - ${to.name}`
  next()
})

export default router