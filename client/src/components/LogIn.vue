<template>
    
    <v-layout>
        
        <v-flex xs12 sm6 offset-sm3>
            <v-card class="mx-auto"
                color="#ffff"
                light
                max-width="900">
                <img src="../assets/logo.png">
                <v-card-text class="headline font-weight-bold">
                    <p class="text-md-center">{{ msg }}</p>
                </v-card-text>
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
                <v-card-text>
                    <v-btn color="primary" v-on:click="login()" dark>Iniciar sesión</v-btn>
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
  .form-elegant .font-small {
    font-size: 0.8rem; }

  .form-elegant .z-depth-1a {
    -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
    box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }

  .form-elegant .z-depth-1-half,
  .form-elegant .btn:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
    box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }
</style>