// 全局vue文件

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <!-- 路由出口 组件渲染容器 -->
    <!-- 路由匹配到的组件将会渲染到App.vue里的<router-view></router-view> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
