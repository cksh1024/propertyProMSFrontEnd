import Vue from 'vue'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import Login from '../components/login.vue'
import Employee from '../components/employee/employee.vue'
import FrontDesk from '../components/frontDesk/frontDesk.vue'
import Manager from '../components/manager/manager.vue'
import SuperUser from '../components/superUser/superUser.vue'
import SelectStaff from '../components/frontDesk/selectStaff.vue'
import AddStaff from '../components/frontDesk/AddStaff.vue'
import SelectClient from '../components/frontDesk/selectClient.vue'
import AddClient from '../components/frontDesk/AddClient.vue'
import modifyStaff from '../components/frontDesk/modifyStaff.vue'
import ModifyClient from '../components/frontDesk/ModifyClient.vue'

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
      component: Manager
    },
    {
      path: '/superUser',
      component: SuperUser
    }
  ]
})
