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
import { Message } from "element-ui";

export default {
  methods: {
    add() {
      // this.$store.commit('setCount', this.$store.state.count + 1)
      this.$store.dispatch("inc");

      // element-ui 消息提示
      // this.$message("这是一条消息提示");
      // this.$message({
      //   message: "这是一条成功消息",
      //   type: "success" // 显示「成功、警告、消息、错误」类的操作反馈
      // });
      // this.$message({
      //   message: "这是一条警告消息",
      //   type: "warning"
      // });
      // this.$message.error("这是一条错误消息");
      this.$message({
        showClose: true, // 添加关闭按钮
        message: "这是一条消息提示"
      });
      // this.$message({
      //   message: "居中的文字",
      //   center: true // 使用 center 属性让文字水平居中
      // });
      // this.$message({
      //   dangerouslyUseHTMLString: true, // message 属性支持传入 HTML 片段
      //   message: "<strong>这是 <i>HTML</i> 片段</strong>"
      // });
    },
    reduce() {
      // this.$store.commit('setCount', this.$store.state.count - 1)
      this.$store.dispatch("dec");
    },
    reset() {
      this.$store.dispatch("reset");
    }
  }
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