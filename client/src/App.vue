<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
        <b-button variant="primary" @click="login()">Login</b-button>
    </div>
    <br>
    <div>
        <b-button variant="primary" @click="getData()">Get Data</b-button>
    </div>
    <div>
      <b-table striped hover :items="tableData"></b-table>
    </div>
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
  private token?: string = undefined
  private tableData: any

  data() {
    return {
      tableData: []
    }
  }

  login() {
    this.$msal.login( ['api://8c1423d4-35c6-4425-a655-2fcc88d63248/ApiAccess'] )
      .then( (x: any) => {
        console.log( 'ok', x)
        const accessToken = x.accessToken
        console.log( accessToken )
        this.token = accessToken
      })
      .catch( (x: any) => {
        console.log( 'error', x)
      })
  }

  async getData() {
    if( this.token === undefined ) {
      alert( 'Not loged in')
      return
    }

    const headers = new Headers()
    const bearer = `Bearer ${this.token}`
    headers.append("Authorization", bearer)
    const options = {
        method: "GET",
        headers: headers
    }
      
    try {
      const response = await fetch( 'http://localhost:5000/WeatherForecast', options)
      const data = await response.json()
      this.tableData = data
    } catch (e)
    {
      console.log( 'got error', e)
    }
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
