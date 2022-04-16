import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ResetPassword from '../views/ResetPassword.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/edit/:id",
    props: true,
    name: "Edit",
    component: () => import("../views/EditForm.vue")
  },
  {
    path: "/create-user",
    name: "CreateUser",
    component: () => import("../views/EditForm.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/recover-password",
    name: "RecoverPassword",
    component: ResetPassword
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
