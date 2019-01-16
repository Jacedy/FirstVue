<template>
  <div>
    <button @click="add">+1</button>
    <button @click="reduce">-1</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from "vuex";

export default {
  methods: {
    add() {
      // this.$store.commit('setCount', this.$store.state.count + 1)
      this.$store.dispatch("inc");
    },
    reduce() {
      // this.$store.commit('setCount', this.$store.state.count - 1)
      this.$store.dispatch("dec");
    },
    reset() {
      this.$store.dispatch("reset");
    }
  },
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.count,

  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   countAlias: "count",

  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   countPlusLocalState(state) {
  //     return state.count + this.localCount;
  //   }
  // }),
  // computed: mapState([
  //   // 映射 this.count 为 store.state.count
  //   "count"
  // ])
};
</script>

<style scoped>
button {
  width: 100px;
  height: 100px;
  font-size: 30px;
}
</style>