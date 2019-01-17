<template>
  <div id="test2">
    <!-- 显示选中项 -->
    <ul>
      <!-- 方法1 class-->
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{'active': index === activeId}"
      >{{item}}</li>
      <br>
      <!-- 方法2 style-->
      <li
        v-for="(item, index) in list"
        :key="item"
        :style="{backgroundColor: index === activeId ? 'red' : 'white'}"
      >{{item}}</li>
    </ul>

    <!-- 绑定value到Vue实例的一个动态属性上 -->
    <input type="checkbox" v-model="toggle" v-bind:true-value="a" v-bind:false-value="b">
    <p>{{toggle}}</p>

    <!-- 实现多个根据不同条件显示不同文字的方法 -->
    <div id="test">
      <input type="text" v-model="inputValue">
      <h1>{{changeVaule}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "test2",
  data() {
    return {
      list: ["a", "b", "c"],
      activeId: 0,
      a: "a",
      b: "b",
      toggle: "",
      inputValue: "123"
    };
  },
  methods: {
    change(e) {
      console.log(e.target.value);
    },
    operateArray: function(array) {
      array.$set(0, "e");
      array.$remove("b");

      this.list.$set(1, "t");
      this.$set("toggle", "c");
    }
  },
  computed: {
    changeVaule: function() {
      if (this.inputValue !== "") {
        return this.inputValue;
      } else {
        return "empty";
      }
    }
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      console.log(to.path);
    }
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
