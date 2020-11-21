import Vue from 'vue'
import App from './App.vue'
import { MsalPlugin } from './lib/msalPlugin'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(MsalPlugin, {
  auth: {
    clientId: '8c1423d4-35c6-4425-a655-2fcc88d63248',
    authority: 'https://login.microsoftonline.com/organizations'
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
