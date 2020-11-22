<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-button variant="primary" @click="login()">Login</b-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    // HelloWorld,
  },
})
export default class App extends Vue {
  login() {
    this.$msal.login( ['api://8c1423d4-35c6-4425-a655-2fcc88d63248/ApiAccess'] )
      .then( (x: any) => {
        console.log( 'ok', x)
      })
      .catch( (x: any) => {
        console.log( 'error', x)
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
