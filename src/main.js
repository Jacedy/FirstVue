// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 启动js文件
// 脚手架（vue-cli）

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import { Button, Select } from 'element-ui'//这里我们仅引用了Button, Select这两个组件
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/button.css'
// import 'element-ui/lib/theme-chalk/input.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(Button)
// Vue.use(Select)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
