import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  // 哈斯
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // 兼容
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      // 文章列表
      path: '/',
      name:'home',
      component(resolve) {
        require(['../views/article/list.vue'], resolve);
      }
    },
    {
      // 文章详情
      path: '/article/detail/:id',
      name:'detail',
      component(resolve) {
        require(['../views/article/detail.vue'], resolve);
      }
    },
    {
      // 关于我
      path: '/about',
      name:'about',
      component(resolve) {
        require(['../views/about/index.vue'], resolve);
      }
    }
  ]
})
