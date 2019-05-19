<template>
  <v-responsive>
    <v-container>
      <h1>{{ msg }}</h1>
      <h2>Información de ubicación</h2>
      <v-form>
        <b-container fluid>
          <b-row>
            <b-col sm><v-text-field v-model="dept" label="Departamento" :rules="notEmpty" required></v-text-field></b-col>

            <b-col sm><v-text-field v-model="municipio" label="Municipio" :rules="notEmpty" required></v-text-field></b-col>

            <b-col sm><v-text-field label = "Número de círculo" v-model="number" :rules="notEmpty" required></v-text-field></b-col>
          </b-row>
          <b-row>
            <b-col sm><v-text-field label = "Dirección" v-model="direccion" :rules="notEmpty" required></v-text-field></b-col>
          </b-row>
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
          <b-row align-h="center">
            <b-col sm>
              <v-btn depressed dark class="orange font-weight-bold" v-on:click="creado()">Crear círculo</v-btn>
            </b-col>
            <b-col sm>
                <v-btn depressed dark class="grey font-weight-bold" v-on:click="cancelar()">Cancelar</v-btn>
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
                msg: 'Crear Circulo',
                
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
            validacion(e){
                if (this.direccion && this.dept && this.municipio && this.number && this.coordinador && this.encargado && this.orientador){
                  return true;
                }

                this.errors = []

                if(!this.direccion){
                  this.errors.push('dirrección requerida');
                }
                if(!this.dept){
                  this.errors.push('departamento requerida');
                }
                if(!this.municipio){
                  this.errors.push('municipio requerida');
                }
                if(!this.number){
                  this.errors.push('numero requerida');
                }
                if(!this.coordinador){
                  this.errors.push('coordinador requerido');
                }
                if(!this.encargado){
                  this.errors.push('encargado requerida');
                }
                if(!this.orientador){
                  this.errors.push('orientador requerida');
                }
                e.preventDefault();          
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
