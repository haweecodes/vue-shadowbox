<template>
  <div id="app">
    <button @click="visible = true">Open LightBox</button>
    <vue-shadow-box :media="data" v-model="visible"></vue-shadow-box>
  </div>
</template>

<script>
import VueShadowBox from 'vue-shadowbox';
import 'vue-shadowbox/dist/vue-shadowbox.css';

export default {
  name: 'app',
  components: {
    VueShadowBox,
  },
  data() {
    return {
      visible: false,
      data: [
        {
          src: 'https://images.unsplash.com/photo-1593339365176-a5ef604bed6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80',
          type: 'img',
          description: 'A picture with lots of story',
        }, {
          src: 'https://images.unsplash.com/photo-1593339365176-a5ef604bed6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80',
          type: 'img',
          description: 'A picture with lots of story',
        }, {
          src: 'https://images.unsplash.com/photo-1593339365176-a5ef604bed6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80',
          type: 'img',
          description: 'A picture with lots of story',
        }, {
          src: 'https://images.unsplash.com/photo-1593339365176-a5ef604bed6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80',
          type: 'img',
          description: 'A picture with lots of story',
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
