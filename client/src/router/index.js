import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/LogIn'
import Page2 from '@/components/Register'
import Student from '@/components/Estudiante'
import Admin from '@/components/Admin'
import Teacher from '@/components/Encargado'
import Circulo from '@/components/CrearCirculo'
import AdminHome from '@/components/AdminHome'
import Datos from '@/components/DatosEstudiante'
import StudentHome from '@/components/EstudHome'
import TeachHome from '@/components/TeachHome'
import AgregarACirculo from '@/components/AgregarACirculo'
import CircleInfo from '@/components/InfoCirculo'
import HelloWorld from '@/components/HelloWorld'
import ListaCotejo from '@/components/ListasCotejoEst'
import Encargado from '@/components/Encargado'
import VerCirculos from '@/components/VerCirculos'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "LogIn"
            }
        },
        {
            path: '/login',
            name: 'LogIn',
            component: Page1
        },
        {
            path: '/register',
            name: 'Register',
            component: Page2
        },
        {
          path: '/student',
          name: 'HomePage',
          component: Student,
          children: [
            {
              path: '',
              name: 'StudentHome',
              component: StudentHome
            },
            {
              path: 'cuenta',
              name: 'VerDatos',
              component: Datos
            },
            {
              path: 'lista',
              name: 'ListaCotejo',
              component: ListaCotejo
            }

          ]
        },
        {
          path: '/admin',
          name: 'HomePage2',
          component: Admin,
          children: [
            {
              path: 'nuevocirculo',
              name: 'Circle',
              component: Circulo
            },
            {
              path: '',
              name: 'AdminHome',
              component: AdminHome
            },
            {
              path: 'agregar',
              name: 'Agregar',
              component: AgregarACirculo
            },
            {
              path: 'circulos',
              name: 'VerCirculos',
              component: VerCirculos
            }
          ]
        },
        {
          path: '/teacher',
          name: 'HomePage3',
          component: Teacher,
          children: [
            {
              path: '',
              name: 'TeachHome',
              component: TeachHome
            },
            {
              path: 'infocirculo',
              name: 'CircleInfo',
              component: CircleInfo
            }
          ]
        },
  
        {
          path: '/helloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/encargado',
          name: 'Encargado',
          component: Encargado,
        },
        
    ]
})
