<template>
  <v-responsive>
    <v-container>
      <h1>{{ msg }}</h1>
      <h2>Información de ubicación</h2>
      <v-container fluid grid-list-md px-5>
        <v-layout row wrap align-center>
          <v-flex xs12>
            <v-text-field v-model="dept" label="Departamento"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="municipio" label="Municipio"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label = "Número de círculo" v-model="number"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label = "Dirección" v-model="direccion"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label = "Coordinador" v-model="coordinador"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label = "Encargado" v-model="encargado"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-textarea label = "Orientador (si es más de uno, separarlos por comas)" v-model="orientador"></v-textarea>
          </v-flex>
          <v-layout v-bin="binding">
            <v-flex xs6 px-1>
              <v-btn block mx5 depressed dark class="orange font-weight-bold" v-on:click="creado()">Crear círculo</v-btn>
            </v-flex>
            <v-flex xs6 px-1>
              <v-btn block mx5 depressed dark class="grey font-weight-bold" v-on:click="cancelar()">Cancelar</v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
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
                msg: 'Crear Circulo',
                direccion: '',
                dept: '',
                municipio: '',
                number: '',
                coordinador: '',
                encargado: '',
                orientador: ''
            }
        },
        methods: {
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
</style>
