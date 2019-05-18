<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Información de ubicación</h2>
    <v-container fluid grid-list-md>
      <v-layout row wrap align-center>
        <div class="inner">
          <v-select class="drop-down-conf" v-model="circulo" label="Seleccione el círculo que desea ver" :items="circles" ></v-select>
          <v-text-field label = "Orientadores" v-model="orientadores" readonly></v-text-field>
          <v-textarea
          name="input-7-1"
          label="Información" readonly
        ></v-textarea>
        
          <v-btn depressed dark class="orange font-weight-bold" v-on:click="creado()">Enviar</v-btn> <v-btn depressed dark class="grey font-weight-bold" v-on:click="cancelar()">Cancelar</v-btn>
        </div>
      </v-layout>
    </v-container>
    </div>
</template>


<script>
import router from '../router'

    export default {
        name: 'UserType',
        data () {
            return {
                msg: 'Enviar planificación',
                orientadores: '',
                circulo: '',
                region: '',
                number: '',
                circles: ['Aca se jalaria de la db']
            }
        },
        methods: {
            creado() {

                router.push({ name: "AdminHome" });
            },
            cancelar() {

                router.push({ name: "AdminHome" });
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
