<template>
  <v-app id="app" v-bind:style="{ background: 'linear-gradient(to bottom, #b33009 0%, #ff5c00 100%)'}">
    
      <v-content>
      <v-responsive>
        <router-view/>
      </v-responsive>
      </v-content>
    
  </v-app>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  display: flex;
  height: 200%;
  justify-content: center;
  align-items: center;
 
}
</style>
