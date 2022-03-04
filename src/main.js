import Vue from 'vue'
import App from './App2.vue'
import router from './router'
import quanjuzujian from '@/components/04quanjuzujian'
Vue.config.productionTip = false

Vue.component('quanju',quanjuzujian)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
