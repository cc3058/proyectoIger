<template>
    <div >
        <v-toolbar
        id="core-toolbar"
        app
        prominent
        dark 
        color="orange"
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
            <v-btn flat v-on:click="registro()">Registrar usuarios</v-btn>
            <v-btn flat  v-on:click="salir()">Salir</v-btn>
            </v-flex>
        </v-toolbar-items>
        </v-toolbar>
        <h1 align="center">{{ msg }}</h1>
        <br>
        
        <v-container>
            <h4>Ingreso de usuarios</h4>
            <br>
            <v-form>
                
                <v-select class="drop-down-conf" v-model="type" label="Seleccione el tipo de usuario" :items="items" :rules="notEmpty" required></v-select>
                <v-text-field v-model="circle" label="Ingrese el código del círculo como: Departamento, Municipio, Número" :items="sectores" :rules="notEmpty" required></v-text-field>
                <v-textarea label = "Ingrese el código del usuario a agregar (si es más de uno, separarlo por comas)" v-model="user" :rules="notEmpty" required></v-textarea>
                <br>
                <v-btn depressed round block color="primary" v-on:click="agregar()">Agregar</v-btn>
                 
                
            </v-form>
        </v-container>
    </div>
</template>


<script>
import router from '../router'

    export default {
        name: 'UserType',
        data () {
            return {
                msg: 'Agregar a círculo',
                items:['Estudiante','Orientador'],
                notEmpty: [
                  v => !!v || 'Requerido'
                ],
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
        font-family: 'Archivo Black', sans-serif;
        font-size: 50px;
        
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
