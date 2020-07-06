
import Vue from 'vue';
import App from './App.vue';
import VueShadowBox from './ShadowBox.vue';


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

export default VueShadowBox;
