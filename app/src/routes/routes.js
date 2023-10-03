import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Home from 'src/pages/Home.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'

import Aluno from 'src/pages/Aluno/index'
  import CreateAluno from 'src/pages/Aluno/create'
  import EditAluno from 'src/pages/Aluno/edit'
  import ShowAluno from 'src/pages/Aluno/show'
  
import Professor from 'src/pages/Professor/index'
  import CreateProfessor from 'src/pages/Professor/create'
  import EditProfessor from 'src/pages/Professor/edit'
  import ShowProfessor from 'src/pages/Professor/show'

 import Matricula from 'src/pages/Matricula/index'
  import CreateMatricula from 'src/pages/Matricula/create'
  import EditMatricula from 'src/pages/Matricula/edit'
  import ShowMatricula from 'src/pages/Matricula/show'

import Turma from 'src/pages/Turma/index'
  import CreateTurma from 'src/pages/Turma/create'
  import EditTurma from 'src/pages/Turma/edit'
  import ShowTurma from 'src/pages/Turma/show'

import Curso from 'src/pages/Curso/index'
  import CreateCurso from 'src/pages/Curso/create'
  import EditCurso from 'src/pages/Curso/edit'
  import ShowCurso from 'src/pages/Curso/show' 

import Historico from 'src/pages/Historico/index'
  import CreateHistorico from 'src/pages/Historico/create'
  import EditHistorico from 'src/pages/Historico/edit'
  import ShowHistorico from 'src/pages/Historico/show'  


import Colaborador from 'src/pages/Colaborador/index'
//import Venda from 'src/pages/Venda/index'
//import Produto from 'src/pages/Produto/index'
//import Agendamento from 'src/pages/Agendamento'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'aluno',
        name: 'Aluno',
        component: Aluno
      },
/************ SUB PAGES DE ALUNO**/
          {
            path: 'create-aluno',
            name: 'CreateAluno',
            component: CreateAluno
          },
          {
            path: 'edit-aluno',
            name: 'EditAluno',
            component: EditAluno
          },
          {
            path: 'show-aluno',
            name: 'ShowAluno',
            component: ShowAluno
          },
         
/*************SUB PAGES DE PROFESSOR**/
      {
        path: 'professor',
        name: 'Professor',
        component: Professor
      },
          {
            path: 'create-professor',
            name: 'CreateProfessor',
            component: CreateProfessor
          },
          {
            path: 'edit-professor',
            name: 'EditProfessor',
            component: EditProfessor
          },
          {
            path: 'show-professor',
            name: 'ShowProfessor',
            component: ShowProfessor
          },

/**************SUB PAGES DE MATRICULA**/
      {
        path: 'matricula',
        name: 'Matricula',
        component: Matricula
      },

          {
            path: 'create-matricula',
            name: 'CreateMatricula',
            component: CreateMatricula
          },
          {
            path: 'edit-matricula',
            name: 'EditMatricula',
            component: EditMatricula
          },
          {
            path: 'show-matricula',
            name: 'ShowMatricula',
            component: ShowMatricula
          },
/**************SUB PAGES DE TURMA**/          
      {
        path: 'turma',
        name: 'Turma',
        component: Turma
      },
          {
            path: 'create-turma',
            name: 'CreateTurma',
            component: CreateTurma
          },
          {
            path: 'edit-turma',
            name: 'EditTurma',
            component: EditTurma
          },
          {
            path: 'show-turma',
            name: 'ShowTurma',
            component: ShowTurma
          },
/**************SUB PAGES DE TURMA**/          
      {
        path: 'historico',
        name: 'Historico',
        component: Historico
      },
          {
            path: 'create-historico',
            name: 'CreateHistorico',
            component: CreateHistorico
          },
          {
            path: 'edit-historico',
            name: 'EditHistorico',
            component: EditHistorico
          },
          {
            path: 'show-historico',
            name: 'ShowHistorico',
            component: ShowHistorico
          }, 

/**************SUB PAGES DE TURMA**/          
      {
        path: 'curso',
        name: 'Curso',
        component: Curso
      },
          {
            path: 'create-curso',
            name: 'CreateCurso',
            component: CreateCurso
          },
          {
            path: 'edit-curso',
            name: 'EditCurso',
            component: EditCurso
          },
          {
            path: 'show-curso',
            name: 'ShowCurso',
            component: ShowCurso
          },  

      {
        path: 'colaborador',
        name: 'Colaborador',
        component: Colaborador
      },
      
      
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
