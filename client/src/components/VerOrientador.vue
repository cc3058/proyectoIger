<template>
    <div>
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
        <v-form>
            <b-container fluid>
                <v-text-field label = "Ingresar encargado" v-model="encargado" required></v-text-field>
                <v-btn round block color='primary' depressed dark class="font-weight-bold" v-on:click="search()">Ver orientadores</v-btn>
            </b-container>
        </v-form>
        <ul>
            <li v-for="orientador in orientadores" v-bind:key="orientador">{{orientador}}</li>
        </ul>
    </div>
</template>
<script>
import Api from '@/services/Api'
import axios from 'axios'
export default {
    name: 'VerOrientador',
    data() {
        return {
            encargado: '',
            orientadores: []
        }
    },
    methods: {
        search() {
            const get = Api().get

            const params = {
                        encargado: this.encargado
                    }

            get(
                'circulos/orientador',
                {params}
                
            ).then((response) => {
                this.orientadores = response.data.orientadores;
                console.log(response);
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

