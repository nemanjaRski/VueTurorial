import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Login from "@/components/Login"
import MainPage from "@/components/MainPage"
import StartPage from "@/components/StartPage"
import Register from "@/components/RegisterPage"
import HelloWorld from "@/components/HelloWorld"

Vue.use(Router)
Vue.use(Vuex)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
        path: "/secure",
        name: "MainPage",
        component: MainPage
    }
  ]
})
