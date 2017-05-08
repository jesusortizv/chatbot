import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import Chat from '@/vue/components/chat/chat'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chat HomeScreen',
      component: Chat
    }
  ]
})
