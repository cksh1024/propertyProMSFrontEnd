import Vue from 'vue'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import Login from '../components/login.vue'
import Employee from '../components/employee/employee.vue'
import FrontDesk from '../components/frontDesk/frontDesk.vue'
import Manager from '../components/manager/manager.vue'
import SuperUser from '../components/superUser/superUser.vue'
import File from '../components/commons/file.vue'
import Client from '../components/employee/client.vue'
import FinishedPro from '../components/employee/FinishedPro.vue'
import PresentPro from '../components/employee/PresentPro.vue'
import Audit from '../components/commons/audit.vue'
import Personal from '../components/employee/P_center.vue'
import Password from '../components/employee/password.vue'
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
          component: Client
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
      component: FrontDesk
    },
    {
      path: '/manager',
      component: Manager
    },
    {
      path: '/superUser',
      component: SuperUser
    },
    {
      path: '/file',
      component: File
    },
    {
      path: '/audit',
      component: Audit
    }
  ]
})
