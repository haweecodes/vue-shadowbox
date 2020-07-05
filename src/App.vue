<template>
  <div id="app">
    <button @click="visible = true">Click</button>
    <vue-light :media="data" v-model="visible"></vue-light>
  </div>
</template>

<script>
import VueLight from './LightBox.vue';

export default {
  name: 'app',
  components: {
    VueLight,
  },
  data() {
    return {
      visible: true,
      data: [
        {
          src: 'https://images.unsplash.com/photo-1593339365176-a5ef604bed6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80',
          type: 'img',
        },
        {
          src: 'https://images.unsplash.com/photo-1591877813825-e276030f6ed8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80',
          type: 'img',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
