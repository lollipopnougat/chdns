import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HelloWorld2 from '@/components/HelloWorld2';
import Department from '@/components/Department';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: HelloWorld,
      meta: { title: '网络安全协会' }
    },
    {
      path: '/Home',
      name: '主页',
      component: HelloWorld,
      meta: { title: '网络安全协会' }
    },
    {
      path: '/he',
      name: 'Hello',
      component: HelloWorld2,
      meta: { title: '测试页' }
    },
    {
      path: '/Department',
      name: '部门介绍',
      component: Department,
      meta: { title: '各部门介绍' }
    },
    {
      path: '*',
      redirect: '/he'
    }
  ]
});
