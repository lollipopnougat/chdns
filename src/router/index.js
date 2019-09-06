import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import PageNotFund from '@/components/404';
import Department from '@/components/Department';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: '主页',
      component: Home,
      meta: { title: '网络安全协会' }
    },
    {
      path: '/404',
      name: '404',
      component: PageNotFund,
      meta: { title: '404页' }
    },
    {
      path: '/Department',
      name: '部门介绍',
      component: Department,
      meta: { title: '各部门介绍' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
