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
                
                <v-text-field v-model="circle" label="Ingrese el código del círculo como: Departamento,Municipio,Número (sin espacios)" :rules="notEmpty" required></v-text-field>
                <v-textarea label = "Ingrese el código del usuario a agregar (si es más de uno, separarlo por comas y sin espacio despues de las mismas)" v-model="students" :rules="notEmpty" required></v-textarea>
                <br>
                <v-btn depressed round block color="primary" v-on:click="agregar()">Agregar</v-btn>
                 
                
            </v-form>
        </v-container>
    </div>
</template>


<script>
import router from '../router'

import Api from '@/services/Api'


    export default {
        name: 'AgregarACirculo',
        data () {
            return {
                msg: 'Agregar a círculo',
                notEmpty: [
                  v => !!v || 'Requerido'
                ],
                circle: '',
                students: ''
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
                var estudiantes = this.students.split(',')
                console.log(estudiantes)
                for(var estud=0;estud<estudiantes.length;estud++){
                    const params = {
                        departamento: this.circle.split(',')[0],
                        municipio: this.circle.split(',')[1],
                        circulo: this.circle.split(',')[2],
                        nombre: estudiantes[estud]
                    }
                    const post = Api().post

                    post(
                        'estudiantes/add',
                        params
                        
                    ).then((response) => {
                        
                    }).catch(error => {
                        console.log(error)
                    })

                    
                }
                
    
                //router.push({ name: "AdminHome" });
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
