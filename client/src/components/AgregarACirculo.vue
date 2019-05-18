<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Ingreso de usuarios</h2>
    <v-container fluid grid-list-sm>
      <v-layout wrap align-center>
        <div class="inner">
          <!--No quite lo de tipo de usuario porque puede ser que quiera agregar un nuevo orientador-->
          <v-select class="drop-down-conf" v-model="type" label="Seleccione el tipo de usuario" :items="items" :rules="notEmpty" required></v-select>
          <v-text-field v-model="circle" label="Ingrese el código del círculo" :items="sectores" :rules="notEmpty" required></v-text-field>
          <v-textarea label = "Ingrese el código del usuario a agregar (si es más de uno, separarlo por comas)" v-model="user" :rules="notEmpty" required></v-textarea>
          <v-btn depressed dark class="orange font-weight-bold" v-on:click="agregar()">Agregar</v-btn> <v-btn depressed dark class="grey font-weight-bold" v-on:click="cancelar()">Cancelar</v-btn>
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
                msg: 'Agregar a Circulo',
                items:['Estudiante','Orientador'],
                notEmpty: [
                  v => !!v || 'Requerido'
                ],
            }
        },
        methods: {
            agregar() {

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
