<template>
    <div class="hello">
        <v-toolbar
        id="core-toolbar"
        app
        color="bg-default"
        prominent
        >
        <div class="v-toolbar-title">
            <v-toolbar-title
            class="tertiary--text font-weight-light"
            >
            Administrador
            </v-toolbar-title>
        </div>

        <v-spacer />
        <v-toolbar-items>
            <v-flex
            align-center
            layout
            py-2
            >
            <v-btn flat v-on:click="nuevocirculo()">Circulos</v-btn>
            <v-btn flat v-on:click="asignar()">Asignar estudiantes a un circulo</v-btn>
            <router-link flat to="/register">Registrar usuarios</router-link>
            <v-btn flat  v-on:click="salir()">Salir</v-btn>
            </v-flex>
        </v-toolbar-items>
        </v-toolbar>
        <h1>{{ msg }}</h1>
        <h2>Ingreso de usuarios</h2>
        <v-container fluid grid-list-xl>
        <v-layout wrap align-center>
            <div class="inner">
            <v-select class="drop-down-conf" v-model="type" label="Seleccione el tipo de usuario" :items="items" ></v-select>
            <v-select class="drop-down-conf" v-model="sector" label="Seleccione el sector" :items="sectores" ></v-select>
            <v-select class="drop-down-conf" v-model="region" label="Seleccione la región" :items="sectores" ></v-select>
            <v-select class="drop-down-conf" v-model="region" label="Seleccione el círculo al que desea agregar al usuario" :items="sectores" ></v-select>
            <v-text-field label = "Ingrese el código del usuario a agregar" v-model="number"></v-text-field>
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
                msg: 'Agregar a Circulo'
            }
        },
        methods: {
            nuevocirculo() {
                router.push({name: 'Circle'});
            },
            asignar(){
                router.push({name: 'Agregar'})
            },
            salir(){
                router.push({name: 'LogIn'})
            },
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
