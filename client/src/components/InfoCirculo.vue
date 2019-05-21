<template>
    <div class="hello">
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
            Encargado
            </v-toolbar-title>
        </div>

        <v-spacer />
        <v-toolbar-items>
            <v-flex
            align-center
            layout
            py-2
            >
            <v-btn flat v-on:click="circulos()">Info de Circulo</v-btn>
            <v-btn flat  v-on:click="salir()">Salir</v-btn>
            </v-flex>
        </v-toolbar-items>
        </v-toolbar>

    <h1>{{ msg }}</h1>
    <v-container fluid grid-list-md>
      <v-layout row wrap align-center>
        <div class="inner">
          <v-text-field label = "Ingrese su nombre (encargado)" v-model="encargado"></v-text-field>
          <v-btn depressed dark class="orange font-weight-bold" v-on:click="buscar()">Buscar</v-btn>
          <ul>
            <p>Círculo</p>
            <li v-bind:key="circulo">{{circulo}}</li>
            <p>Orientadores</p>
            <li v-for="orientador in orientadores" v-bind:key="orientador">{{orientador}}</li>
        </ul>
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
        </div>
      </v-layout>
    </v-container>
    </div>
</template>


<script>
import router from '../router'
import Api from '@/services/Api'
    export default {
        name: 'UserType',
        data () {
            return {
                encargado: '',
                orientadores: [],
                msg: 'Información de círculo',
                circulo: '',
                circles: [],
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
            buscar() {
                const get = Api().get

                const params = {
                        encargado: this.encargado
                    }

                get(
                    'circulos/orientador',
                    {params}
                    
                ).then((response) => {
                    this.orientadores = response.data.orientadores;
                    this.circulo = response.data.dpto + ", " + response.data.mun + ", " + response.data.num
                    console.log(response);
                }).catch(error => {
                    console.log(error)
                })
            },
            salir() {

                router.push({ name: "LogIn" });
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
