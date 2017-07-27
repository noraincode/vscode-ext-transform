// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue        from 'vue'
import axios      from 'axios'
import App        from './App'
import Clipboard  from 'v-clipboard'

Vue.use(Clipboard)

Vue.config.productionTip = false
Vue.prototype.$http = axios

import '../static/css/reset.css'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'

import './css/system.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
