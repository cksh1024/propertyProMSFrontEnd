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
import Client from '../components/superUser/projrct/client.vue'

import Salary from '../components/superUser/salary/S_information.vue'
import Hissalary from '../components/superUser/salary/his_salary.vue'

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

import SelectStaff from '../components/frontDesk/selectStaff.vue'
import AddStaff from '../components/frontDesk/AddStaff.vue'
import SelectClient from '../components/frontDesk/selectClient.vue'
import AddClient from '../components/frontDesk/AddClient.vue'
import modifyStaff from '../components/frontDesk/modifyStaff.vue'
import ModifyClient from '../components/frontDesk/ModifyClient.vue'

import EClient from '../components/employee/client.vue'
import FinishedPro from '../components/employee/FinishedPro.vue'
import PresentPro from '../components/employee/PresentPro.vue'
import Audit from '../components/commons/audit.vue'
import Personal from '../components/employee/P_center.vue'
import Homepage from '../components/employee/homepage.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/employee',
      component: Employee,
      redirect: '/employee/present',
      children: [
        {
          path: '/employee/client',
          component: EClient
        },
        {
          path: '/employee/finished',
          component: FinishedPro
        },
        {
          path: '/employee/present',
          component: PresentPro
        },
        {
          path: '/employee/audit',
          component: Audit
        },
        {
          path: '/employee/file',
          component: File
        },
        {
          path: '/personal',
          component: Personal
        },
        {
          path: '/password',
          component: Password
        },
        {
          path: '/employee/homepage',
          component: Homepage
        }
      ]
    },
    {
      path: '/frontDesk',
      component: FrontDesk,
      redirect: '/frontDesk/selectStaff',
      children: [
        {
          path: '/frontDesk/selectStaff',
          component: SelectStaff
        },
        {
          path: '/frontDesk/addStaff',
          component: AddStaff
        },
        {
          path: '/frontDesk/addClient',
          component: AddClient
        },
        {
          path: '/frontDesk/selectClient',
          component: SelectClient
        },
        {
          path: '/frontDesk/modifyStaff/:id',
          component: modifyStaff
        },
        {
          path: '/frontDesk/modifyClient/:id',
          component: ModifyClient
        }
      ]
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
        path: '/his_salary',
        component: Hissalary
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
