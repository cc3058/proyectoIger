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
                <v-text-field label = "Ingresar coordinador" v-model="coordinador" required></v-text-field>
                <v-btn round block color='primary' depressed dark class="font-weight-bold" v-on:click="search()">Ver círculos</v-btn>
            </b-container>
        </v-form>
        <ul>
            <li v-for="circulo in circulos" v-bind:key="circulo">{{circulo}}</li>
        </ul>
    </div>
</template>
<script>
import Api from '@/services/Api'
import axios from 'axios'
export default {
    name: 'VerCirculos',
    data() {
        return {
            coordinador: '',
            circulos: []
        }
    },
    methods: {
        search() {
            const get = Api().get

            const params = {
                        coordinador: this.coordinador
                    }
            
            get(
                'circulos/coordinador',
                {params}
                
            ).then((response) => {
                var resultado = response.data.length
                var circulosres = []
                    
                    for(var row=0;row<resultado;row++){
                        
                        circulosres.push(response.data[row].dpto + ", " +response.data[row].mun + ", " + response.data[row].num)
                    }
                this.circulos = circulosres
            }).catch(error => {

            })
        }
    }
}
</script>

