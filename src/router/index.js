import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  // 组件的路径地址
import ElementUI from '@/components/ElementUITest'
import Test from '@/components/VueTest'    
import Test2 from '@/components/VueTest2'
import TestExp from '@/components/VueExp'    
import HtmlTest from '@/components/HtmlTest'
import FlexTest from '@/components/FlexTest'
import CSSTest from '@/components/CSSTest'
import StoreTest from '@/components/storeTest/storeMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',    // 跳转URL
      name: "Test",
      component: Test   // 组件名称，要和import中引入的一样
    },
    {
      path: '/test2',
      name: "Test2",
      component: Test2
    },
    {
      path: '/elementui',
      name: "ElementUI",
      component: ElementUI
    },
    {
      path: '/testexp',
      name: "TestExp",
      component: TestExp
    },
    {
      path: '/htmltest',
      name: "HtmlTest",
      component: HtmlTest
    },
    {
      path: '/flextest',
      name: "FlexTest",
      component: FlexTest
    },
    {
      path: '/csstest',
      name: "CSSTest",
      component: CSSTest
    },
    {
      path: '/storetest',
      name: "StoreTest",
      component: StoreTest
    }
  ]
})
