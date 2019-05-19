<template>
 
  <v-app id="app" v-bind:style="{ background: '#ffff'}">
    
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
@import url('https://fonts.googleapis.com/css?family=Archivo+Black|Francois+One|Patua+One&display=swap');
#app {
  display: flex;
  height: 200%;
  justify-content: center;
  align-items: center;
 
}
</style>
