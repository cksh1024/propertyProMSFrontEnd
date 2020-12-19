import Vue from 'vue'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import Login from '../components/login.vue'
import Employee from '../components/employee/employee.vue'
import FrontDesk from '../components/frontDesk/frontDesk.vue'
import Manager from '../components/manager/manager.vue'
import SuperUser from '../components/superUser/superUser.vue'
import File from '../components/commons/file.vue'

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
      component: SuperUser
    },
    {
      path: '/file',
      component: File
    }
  ]
})
