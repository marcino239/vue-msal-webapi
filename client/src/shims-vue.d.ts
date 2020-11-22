declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

import { MsalPlugin } from './lib/msalPlugin'

declare module 'vue/types/vue' {
  interface Vue {
    $msal: MsalPlugin
  }
}
