<template>
    <v-container>
    <h1>{{ msg }}</h1>
    <v-btn round depressed dark class="orange font-weight-bold" v-on:click="plan()">Ver datos de mi círculo</v-btn>
    <br>
    <v-btn round depressed dark class="grey font-weight-bold" v-on:click="salir()">Salir</v-btn>
    </v-container>
</template>


<script>
import router from '../router'

    export default {
        name: 'UserType',
        data () {
            return {
                msg: 'Inicio'
            }
        },
        methods: {
        plan(){
          router.push({name: 'CircleInfo'})
          },
          salir(){
            router.push({name: 'LogIn'})
            }
        }
    }
</script>


<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .inner {
      display: table;
      margin: 0 auto;
    }
</style>
