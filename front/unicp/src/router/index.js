import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import YangBigDick from '@/components/YangBigDick'
import diao from '@/components/YangBigDick1'
import dick from '@/components/YangBigDick2'
/************************************/
import Skeleton from '@/components/Skeleton'
import Sign from '@/components/mainpages/sign'
import Cp from '@/components/mainpages/cp'
import Me from '@/components/mainpages/me'
import Form from '@/components/sign/Form'
import AddFriend from '@/components/cp/AddFriend'
import NewUser from '@/components/sign/NewUser'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/wechat_interface',
      name: 'interface',
      component: Skeleton,
      children: [
        {
          path: 'sign',
          name: 'sign',
          component: Sign,
          children: [
            {path: 'form', name: 'form', component: Form},
            {path: 'newuser', name: 'newuser', component: NewUser}
          ]
        }, {
          path: 'cp',
          name: 'cp',
          component: Cp,
          children: [
            {path: 'addfriend', name: 'addfriend', component: AddFriend}
          ]
        },
        {path: 'me', name: 'me', component: Me}

      ]
    }, {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: diao,
        right: dick
      }
    }, {
      path: '/yang',
      component: YangBigDick,
      children: [
        {path: '/', name: 'da', component: YangBigDick},
        {path: 'diao', name: 'da1', component: diao},
        {path: 'dick', name: 'da2', component: dick}
      ]
    }
  ]
})
