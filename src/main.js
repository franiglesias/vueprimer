import Vue from 'vue'
import App from './App.vue'
import * as Vue2Leaflet from 'vue2-leaflet';

let {LMap, LTileLayer, LMarker} = Vue2Leaflet;
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

Vue.component('v-map', LMap);
Vue.component('v-tilelayer', LTileLayer);
Vue.component('v-marker', LMarker);

new Vue({
  render: h => h(App),
}).$mount('#app')
