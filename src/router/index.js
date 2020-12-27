import Vue from 'vue'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import Login from '../components/login.vue'
// import File from '../components/file.vue'
// import UploadFile from '../components/uploadFile.vue'
import Employee from '../components/employee/employee.vue'
import FrontDesk from '../components/frontDesk/frontDesk.vue'
import Manager from '../components/manager/manager.vue'
import SuperUser from '../components/superUser/superUser.vue'

import Home from '../components/superUser/main/main.vue'

import EmployeeInfo from '../components/superUser/employee/E_information.vue'
import Team from '../components/superUser/employee/Team.vue'
import Monitor from '../components/superUser/employee/Monitor.vue'
import State from '../components/superUser/employee/state.vue'

import Project from '../components/superUser/projrct/P_information.vue'
import Stage from '../components/superUser/projrct/P_stage.vue'
import Journal from '../components/superUser/projrct/P_journal.vue'
import Client from '../components/superUser/projrct/client .vue'

import Salary from '../components/superUser/salary/S_information.vue'

import Center from '../components/P_center.vue'
import Password from '../components/password.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/employee',
      component: Employee
    },
    {
      path: '/frontDesk',
      component: FrontDesk
    },
    {
      path: '/manager',
      component: Manager
    },
    {
      path: '/superUser',
      component: SuperUser,
      children: [{
        path: '/',
        component: Home
        }, {
        path: '/E_information',
        component: EmployeeInfo
        }, {
        path: '/E_team',
        component: Team
        }, {
        path: '/E_monitor',
        component: Monitor
        }, {
        path: '/E_state',
        component: State
        }, {
        path: '/P_information',
        component: Project
        }, {
        path: '/P_stage',
        component: Stage
        }, {
        path: '/client',
        component: Client
        }, {
        path: '/P_journal',
        component: Journal
        }, {
        path: '/S_information',
        component: Salary
        }, {
        path: '/main',
        component: Home
        }, {
        path: '/P_center',
        component: Center
        }, {
        path: '/password',
        component: Password
      }]
    }
  ]
})
