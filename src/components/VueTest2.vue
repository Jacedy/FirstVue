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

    <input type="checkbox" v-model="toggle" v-bind:true-value="a" v-bind:false-value="b">
    <p>{{toggle}}</p>
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
      toggle: ''
    };
  },
  methods: {
    change(e) {
      console.log(e.target.value);
    }
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
