import Vue from 'vue'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import Login from '../components/login.vue'

import Employee from '../components/employee/employee.vue'
import FrontDesk from '../components/frontDesk/frontDesk.vue'
import ProManagement from '../components/manager/Promanagement.vue'
import SuperUser from '../components/superUser/superUser.vue'

import Home from '../components/superUser/main/main.vue'

import EmployeeInfo from '../components/superUser/employee/E_information.vue'
import Team from '../components/superUser/employee/Team.vue'
import Monitor from '../components/superUser/employee/Monitor.vue'
import State from '../components/superUser/employee/state.vue'
import hisMonitor from '../components/superUser/employee/hisMonitor.vue'

import Project from '../components/superUser/projrct/P_information.vue'
import Stage from '../components/superUser/projrct/P_stage.vue'
import Journal from '../components/superUser/projrct/P_journal.vue'
import Client from '../components/superUser/projrct/client .vue'

import Salary from '../components/superUser/salary/S_information.vue'

import File from '../components/commons/file.vue'
import ManagerMain from '../components/manager/managerMain.vue'
import Manager from '../components/manager/manage.vue'
import teamWokers from '../components/manager/teamworkermanagement.vue'
import AddWorkers from '../components/manager/addworkers.vue'
import CreateProject from '../components/manager/creatproject.vue'
import ProjectAudit from '../components/manager/projectaudit.vue'
import ProjectBack from '../components/manager/projectback.vue'
import ProjectSwitch from '../components/manager/projectswitch.vue'
import ManagerInfo from '../components/manager/managerInfo.vue'
import PCenter from '../components/commons/P_center.vue'
import Password from '../components/commons/password.vue'

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
      component: Manager,
      children: [
        {
          path: '/manager/teamworkermanagement',
          component: teamWokers
        },
        {
          path: '/manager/P_center',
          component: PCenter
        },
        {
          path: '/manager/password',
          component: Password
        },
        {
          path: '/manager/creatproject',
          component: CreateProject
        },
        {
          path: '/manager/projectaudit',
          component: ProjectAudit
        },
        {
          path: '/manager/projectback',
          component: ProjectBack
        },
        {
          path: '/manager/projectswitch',
          component: ProjectSwitch
        },
        {
          path: '/manager/managerInfo',
          component: ManagerInfo
        },
        {
          path: '/manager/addworkers',
          component: AddWorkers
        },
        {
          path: '/manager/Promanagement',
          component: ProManagement
        }
      ]
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
        path: '/E_hismonitor',
        component: hisMonitor
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
        component: PCenter
        }, {
        path: '/password',
        component: Password
      }]
    },
    {
      path: '/file',
      component: File
    },
    {
      path: '/managerMain',
      component: ManagerMain
    }
  ]
})
