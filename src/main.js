import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  delay: 100,
  scale: 1,
  distance: '20px',
  mobile: true
});
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
