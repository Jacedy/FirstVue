<template>
  <div>
      <p class="pp1">hellosdafsdfsdfasdfassdfasdfsadfasfsafsdfsdfsdfsfs dfasdfasdfsa</p>
      <p class="pp2">hadjfl</p>
  </div>
</template>

<script>
  export default {
    name: 'css',
    data () {
        return;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    background-color: yellow;
    border: 2px red solid;
    width: 50%;
    height: 150px;
}

.pp1 {
    color: orange;
    font-size: 16px;
    background-color: white;
    border-color: transparent;  /* 透明 */
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0;
    width: 25%;
    height: auto;
    word-wrap: break-word;
    word-break: keep-all;
    overflow: hidden;
    text-align: left;
}
p.pp2 {
    color: orange;
    font-size: 16px;
    background-color: white;
    border-color: transparent;  /* 透明 */
    margin-top: 15px;   /* 文本框外边距会合并 */
    padding: 0;
    width: 25%;
    height: auto;
    word-wrap: break-word;
    word-break: keep-all;
    overflow: hidden;
    text-align: left;
}
</style>
