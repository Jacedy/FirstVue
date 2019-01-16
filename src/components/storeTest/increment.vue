<template>
  <div>
    <button @click="add">+1</button>
    <button @click="reduce">-1</button>
  </div>
</template>

<script>
export default {
  methods: {
      add() {
          this.$store.commit('setCount', this.$store.state.count + 1);
      },
      reduce() {
          this.$store.commit('setCount', this.$store.state.count - 1);
      }
  }
};
</script>

<style scoped>
button {
  width: 100px;
  height: 100px;
  font-size: 30px;
}
</style>