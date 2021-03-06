import Vue from 'vue'
import App from './App'
import router from './router'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
