// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'

// import VueFire from 'vuefire'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'

// import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'note-cca56',
  databaseURL: 'https://note-cca56.firebaseio.com'
})
export const db = firebase.firestore()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
