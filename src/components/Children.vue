<template>
  <div id='children'>
      <p>父组件传来的值是：{{ message }}</p>
      将输入的值传回父组件：<input type="text" v-model="newMessage">
  </div>
</template>

<script>
  export default {
    name: 'children',
    // props 接收父组件传来的值
    props: ['message'],
    data() {
      return {
        newMessage: '',
      }
    },
    // props 值校验
    // props: {
    //  blackFlag:{
    //     type:Boolean,
    //     default:false
    //  }
    // },
    watch: {
        newMessage: function(val) {
            // $emit 将值传回父组件
            this.$emit('updateMsg', this.newMessage)
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
