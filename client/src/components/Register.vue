<template>
    <v-layout id="card" >
        
        <v-flex xs12 sm6 offset-sm3 > 
            <v-card class="mx-auto"
                id = "transparent"
                light
                max-width="600">
                <img align="left" alt="Logo IGER" width="270" height="230" src="../assets/logo.png">
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
                
                <v-card-text>
                    <v-subheader>Correo electronico</v-subheader>
                    <v-text-field prepend-inner-icon="email" v-model="email"></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-subheader>Contraseña</v-subheader>
                    <v-text-field prepend-inner-icon="lock" v-model="password" type="password"></v-text-field>
                </v-card-text>
                <v-layout row wrap>
                    <v-flex xs12 sm6>
                        <v-card-text>
                            <v-subheader>Nombre</v-subheader>
                            <v-text-field  v-model="first_name"></v-text-field>
                        </v-card-text>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-card-text>
                            <v-subheader>Apellido</v-subheader>
                            <v-text-field  v-model="last_name"></v-text-field>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-card-text>
                    <v-select class="drop-down-conf" prepend-inner-icon="person" v-model="role" label="Tipo de usuario" :items="items" ></v-select>
                </v-card-text>
               <v-card-text  class="text-md-center">
                    <v-btn round color="primary" v-on:click="register()" dark>Registrar usuario</v-btn>
                </v-card-text>
                
                
            </v-card>
        </v-flex>
    </v-layout>
   
</template>

<script>
    import router from '../router'
    import AuthenticationService from '@/services/AuthenticationService'

    export default {
        name: 'Register',
        data () {
            return {
                msg: 'Registrar nueva cuenta',
                email: '',
                password: '',
                first_name: '',
                last_name: '',
                role: '',
                items:['Administrador','Estudiante','Encargado de círculo/Maestro']
            }
        },
        methods: {
            navigate() {
                router.push({ name: "LogIn" });
            },
            async register() {
                try {
                const response = AuthenticationService.register({
                email: this.email,
                password: this.password,
                first_name: this.first_name,
                last_name: this.last_name,
                role: this.role
                })
                console.log(response.data)
                } catch (error) {
                    console.log(error.data)
                }

                //router.push({name: "StudentHome"});
                //estos son los datos pero idk como mandarlos a express
                //this.email;
                //this.password;
                //this.type;
                //this.name;
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
    }

</style>
