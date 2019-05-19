<template>
 
    
    <v-layout id="card" >
        
        <v-flex xs12 sm6 offset-sm3 > 
            <v-card class="mx-auto"
                id = "transparent"
                light
                max-width="600">
                <img align="left" alt="Logo IGER" width="230" height="230" src="../assets/logo.png">
                <br>
                <br>
                <br>
                <v-card-text >
                    <h1 class="text-md-center">Bachillerato Digital</h1>
                </v-card-text>
                <br>
                <br>
                <br>
                <br>
                <v-card-text >
                    <v-subheader>Correo electronico</v-subheader>
                    <v-text-field v-model="email"
                            outline
                            clearable
                            type="email"
                            prepend-inner-icon="email"
                            required ></v-text-field>                    
                </v-card-text>
                <v-card-text>
                    <v-subheader>Contraseña</v-subheader>
                    <v-text-field outline 
                            clearable 
                            v-model="password" 
                            prepend-inner-icon="lock"
                            type="password"></v-text-field>
                </v-card-text>
                <v-card-text  class="text-md-center">
                    <v-btn round large color="primary" v-on:click="login()" dark>Iniciar sesión</v-btn>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
    
</template>
        
                        


<script>
import AuthenticationService from '@/services/AuthenticationService'
import router from '../router'
   

    export default {
        name: 'LogIn',
     
        data () {
           
            return {
                msg: 'Inicia sesión',
                email: '',
                password: ''
            }
        },
        methods: {
        async login() {
          //router.push({name: "StudentHome"});
          try {
            const response = await AuthenticationService.login({
              email: this.email,
              password: this.password
            })
              console.log(response.data)
              if (response.data == 'Administrador'){
                router.push({name: "AdminHome"});
              } else if (response.data == 'Estudiante'){
                router.push({name: "StudentHome"});
              } else if (response.data == 'Encargado de círculo/Maestro'){
                router.push({name: "TeachHome"});
              }
          } catch (error){
            //this.error = error.response.data.error
          }
          //estas son las variables que hay que pasar
          //this.email;
          //this.password;
        }
        }
    }
</script>

<style>
    #card{
        margin-top: 3%;
        
         
    }
    #transparent{
        
        background-color: white!important;
        opacity: 0.87;
        border-color: transparent!important;
        border-radius: 4%;
        padding: 40px;
    }

</style>

