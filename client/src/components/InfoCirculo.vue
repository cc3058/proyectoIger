<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
    <v-container fluid grid-list-md>
      <v-layout row wrap align-center>
        <div class="inner">
          <v-select class="drop-down-conf" v-model="circulo" label="Seleccione el círculo que desea ver" id = "circulo" :items="circles" ></v-select>
          <v-text-field label = "Orientadores" readonly id ="orientadores"></v-text-field>
          <br>
          <h3><small>Estudiantes</small></h3>
          <b-pagination
            align="center"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            ></b-pagination>
            <p class="mt-3">Página actual: {{ currentPage }}</p>
            <b-table striped hover :fields="fields" :items="items" :per-page="perPage" :current-page="currentPage"></b-table>
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
                msg: 'Información de círculo',
                circulo: '',
                circles: ['Aca se jalaria de la db'],
                //De la tabla
                perPage: 5,
                currentPage: 1,
                fields: [
                    {
                        key: 'last_name',
                        label: 'Apellido',
                        sortable: true
                    },
                    {
                        key: 'first_name',
                        label: 'Nombre',
                        sortable: false
                    },
                    {
                        key: 'grado',
                        label: 'Grado',
                        sortable: true,
                        // Variant applies to the whole column, including the header and footer
                        //variant: 'danger'
                    }
                ],
                items: [
                    // Para efectos didácticos pero debería ser desde la db
                    { grado: 4, first_name: 'Dickerson', last_name: 'Macdonald' },
                    { grado: 5, first_name: 'Larsen', last_name: 'Shaw' },
                    { grado: 'Retirado', first_name: 'Geneva', last_name: 'Wilson' },
                ]
            }
        },
        methods: {
            creado() {

                router.push({ name: "AdminHome" });
            },
            cancelar() {

                router.push({ name: "AdminHome" });
            }
          },
        computed: {
            rows() {
            return this.items.length
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
