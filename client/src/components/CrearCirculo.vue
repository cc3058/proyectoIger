<template>
  <v-responsive>
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
    <v-container>
      <h1 align="center">{{ msg }}</h1>
      <br>
      <br>
           
      <v-form>
        <b-container fluid>
            <h4>Información de ubicación</h4>
            <br>
          <b-row>
            <b-col sm><v-text-field v-model="dept" label="Departamento" :rules="notEmpty" required></v-text-field></b-col>

            <b-col sm><v-text-field v-model="municipio" label="Municipio" :rules="notEmpty" required></v-text-field></b-col>

            <b-col sm><v-text-field label = "Número de círculo" v-model="number" :rules="notEmpty" required></v-text-field></b-col>
          </b-row>
          <b-row>
            <b-col sm><v-text-field label = "Dirección" v-model="direccion" :rules="notEmpty" required></v-text-field></b-col>
          </b-row>
          <hr>
          <br>
          <h4>Información de usuarios</h4>
          <br>
          <b-row>
            <b-col sm>
              <v-text-field label = "Coordinador" v-model="coordinador" :rules="notEmpty" required></v-text-field>
            </b-col>
            <b-col sm>
              <v-text-field label = "Encargado" v-model="encargado" :rules="notEmpty" required></v-text-field>

            </b-col>
          </b-row>
          <b-row>
            <b-col sm>
              <v-textarea label = "Orientador (si es más de uno, separarlos por comas)" v-model="orientador" :rules="notEmpty" required></v-textarea>
            </b-col>
          </b-row>
          <hr>
          <b-row align-h="center">
            <b-col sm>
              <v-btn round block color='primary' depressed dark class="orange font-weight-bold" v-on:click="creado()">Crear círculo</v-btn>
            </b-col>
            
          </b-row>
        </b-container>
      </v-form>
    </v-container>
  </v-responsive>
</template>


<script>
import router from '../router'
import Api from '@/services/Api'

    export default {
        name: 'UserType',
        data () {
            return {
                valid: false,
                msg: 'Creación de círculos',
                
                direccion: '',
                dept: '',
                municipio: '',
                number: '',
                coordinador: '',
                encargado: '',
                orientador: '',
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
            creado() {
                const post = Api().post

                const data = {
                    departamento: this.dept,
                    municipio: this.municipio,
                    circulo: this.number,
                    coordinador: this.coordinador,
                    encargado: this.encargado,
                    orientador: this.orientador.split(',')
                }

                post(
                    'circulos/add',
                    data
                ).catch( error => {
                    console.log(error)
                    return null
                }).then(response => {
                    router.push({ name: "AdminHome" })
                })
            },
            cancelar() {
                router.push({ name: "AdminHome" });
            }
          },
          computed: {
            binding () {
              const binding = {}

              if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

              return binding
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
    hr{
        height: 10px;
        border: 0;
        box-shadow: 0 10px 10px -10px #8c8b8b inset;
    }
</style>
