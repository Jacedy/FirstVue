<template>
  <div>
    <h3>Count is {{count}}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // count() {
    //   return this.$store.state.count;
    // }
    ...mapGetters([
      //...函数名 使用对象展开运算符将此对象混入到外部对象中
      "count"
      
      // 映射 `this.doneCount` 为 `store.getters.doneTodosCount`
      // doneCount: 'doneTodosCount'
    ])
  },
  // computed: mapState([
  //   // 映射 this.count 为 store.state.count
  //   "count"
  // ])
};
</script>

<style scoped>
h3 {
  font-size: 30px;
}
</style>