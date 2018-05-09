import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list/index.vue'
import CreateNotes from '@/components/create-notes/index.vue'
import EditNotes from '@/components/edit-notes/index.vue'
import NotesMoreInfo from '@/components/notes-more-info/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/add',
      name: 'CreateNotes',
      component: CreateNotes
    },
    {
      path: '/edit/:id',
      name: 'EditNotes',
      component: EditNotes
    },
    {
      path: '/details/:id',
      name: 'NotesMoreInfo',
      component: NotesMoreInfo
    }
  ]
})
