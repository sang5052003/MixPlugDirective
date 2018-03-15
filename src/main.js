import Vue from 'vue'
import App from './App.vue'

import VuePointer from './plugin'
Vue.use(VuePointer);
//
import PointerDemo from './components/PointerDemo'
import PointerCanvas from './components/PointerCanvas'
import PointerLog from './components/PointerLog'
import AxiosChainTest from './components/AxiosChainTest'
Vue.component('pointer-demo', PointerDemo);
Vue.component('pointer-canvas', PointerCanvas);
Vue.component('pointer-log', PointerLog);
Vue.component('axios-chain-test', AxiosChainTest);

new Vue({
  el: '#app',
  render: h => h(App)
})
