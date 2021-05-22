import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/member/login.vue'
import Join from '@/components/member/join.vue'
import MyInfo from '@/components/member/myinfo.vue'
import SMain from '@/components/seller/smain.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/my-info',
      name: 'MyInfo',
      component: MyInfo
    },
    {
      path: '/smain',
      name: 'SMain',
      component: SMain
    }
]
})
