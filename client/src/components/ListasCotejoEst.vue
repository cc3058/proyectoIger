<template>
  <v-responsive>
    <v-container>
      <h1>{{ msg }}</h1>
      <h2>Lista de Cotejo</h2>
      <b-container fluid>
          <b-row align-h="center">
              <b-col sm="8"><v-select v-model="materia" label="Materia" :rules="notEmpty" required></v-select> <!-- Este deberia ser un select (drop down) --></b-col>
          </b-row>
          <b-row align-h="center">
              <b-col sm="8"><v-text-field v-model="semana" label="Semana" :rules="notEmpty" required></v-text-field> <!-- Este tambien --></b-col>
          </b-row>
          <b-row>
              <b-col sm><p>Pregunta 1</p></b-col>
              <b-col sm align-content="center">
                <v-radio-group v-model="pregunta1" :mandatory="true" row align-items="center"> 
                    <v-radio label="Radio 1" value="radio-1"></v-radio>
                    <v-radio label="Radio 2" value="radio-2"></v-radio>
                    <v-radio label="Radio 3" value="radio-3"></v-radio>
                </v-radio-group>
              </b-col>
          </b-row>
          <b-row>
              <b-col sm><p>Pregunta 2</p></b-col>
              <b-col sm align-content="center">
                <v-radio-group v-model="pregunta2" :mandatory="true" row align-items="center">
                    <v-radio label="Radio 1" value="radio-1"></v-radio>
                    <v-radio label="Radio 2" value="radio-2"></v-radio>
                    <v-radio label="Radio 3" value="radio-3"></v-radio>
                </v-radio-group>
              </b-col>
          </b-row>
          <b-row>
              <b-col sm><p>Pregunta 3</p></b-col>
              <b-col sm align-content="center">
                <v-radio-group v-model="pregunta3" :mandatory="true" row align-items="center">
                    <v-radio label="Radio 1" value="radio-1"></v-radio>
                    <v-radio label="Radio 2" value="radio-2"></v-radio>
                    <v-radio label="Radio 3" value="radio-3"></v-radio>
                </v-radio-group>
              </b-col>
          </b-row>
          <b-row>
              <b-col sm><p>Pregunta 4</p></b-col>
              <b-col sm align-content="center">
                  <v-radio-group v-model="pregunta4" :mandatory="true" row align-items="center">
                    <v-radio label="Radio 1" value="radio-1"></v-radio>
                    <v-radio label="Radio 2" value="radio-2"></v-radio>
                    <v-radio label="Radio 3" value="radio-3"></v-radio>
                </v-radio-group>
              </b-col>
          </b-row>
          <b-row>
              <b-col sm><p>Pregunta 5</p></b-col>
              <b-col sm align-content="center">
                  <v-radio-group v-model="pregunta5" :mandatory="true" row align-items="center">
                    <v-radio label="Radio 1" value="radio-1"></v-radio>
                    <v-radio label="Radio 2" value="radio-2"></v-radio>
                    <v-radio label="Radio 3" value="radio-3"></v-radio>
                </v-radio-group>
              </b-col>
          </b-row>
          <b-row>
              <b-col sm>
            <v-btn depressed dark class="orange font-weight-bold" v-on:click="enviar()">Enviar lista de cotejo</v-btn>
          </b-col>
          <b-col sm>
              <v-btn depressed dark class="grey font-weight-bold" v-on:click="cancelar()">Cancelar</v-btn>
          </b-col>
          </b-row>
      </b-container>
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
                msg: 'Llenar lista de cotejo',
                materia: '',
                semana: '',
                pregunta1: '',
                pregunta2: '',
                pregunta3: '',
                pregunta4: '',
                pregunta5: '',
                materias:['Contabilidad','Física','Matemática','Literatura'],
                notEmpty: [
                  v => !!v || 'Requerido'
                ],
            }
        },
        methods: {
            cancelar() {
                router.push({ name: "StudentHome" });
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
