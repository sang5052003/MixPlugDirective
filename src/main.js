import Vue from 'vue'
import App from './App.vue'

import VuePointer from './plugin'
Vue.use(VuePointer);
//
import PointerDemo from './components/PointerDemo'
import PointerCanvas from './components/PointerCanvas'
import PointerLog from './components/PointerLog'
Vue.component('pointer-demo', PointerDemo);
Vue.component('pointer-canvas', PointerCanvas);
Vue.component('pointer-log', PointerLog);

new Vue({
  el: '#app',
  render: h => h(App)
})
