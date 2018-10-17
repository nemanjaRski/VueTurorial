import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import LoginComponent from "@/components/LoginComponent"
import MainPageComponent from "@/components/MainPageComponent"
import StartPageComponent from "@/components/StartPageComponent"
import RegisterComponent from "@/components/RegisterComponent"
import HelloWorld from "@/components/HelloWorld"

Vue.use(Router)
Vue.use(Vuex)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPageComponent',
      component: StartPageComponent
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'LoginComponent',
      component: LoginComponent
    },
    {
      path: '/register',
      name: 'RegisterComponent',
      component: RegisterComponent
    },
    {
        path: "/secure",
        name: "MainPageComponent",
        component: MainPageComponent
    }
  ]
})
