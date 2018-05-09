import Vue from 'vue'
// import store from '@/store/index'
import {
  UPDATE_INPUT_VALUE,
  UPDATE_AREA_VALUE,
  CREATE_ARRAY_NOTE,
  GET_LIST_NOTES,
  DEL_ALL_NOTES,
  EDIT_NOTE,
  DEL_ITEM_NOTE,
  NOTE_DETAILS
} from '../mutation-types'

const state = {
  newNoteData: {
    newName: '',
    newContent: ''
  },
  currentEl: [],
  name: '',
  content: '',
  note: []
}

// getters
const getters = {
  currentEl: state => state.currentEl,
  note: state => state.note,
  name: state => state.name,
  content: state => state.content
}

// mutations
const mutations = {
  [UPDATE_INPUT_VALUE] (state, payload) {
    Vue.set(state, 'name', payload)
  },
  [UPDATE_AREA_VALUE] (state, payload) {
    Vue.set(state, 'content', payload)
  },
  [CREATE_ARRAY_NOTE] (state) {},
  [GET_LIST_NOTES] (state) {},
  [DEL_ALL_NOTES] (state) {},
  [DEL_ITEM_NOTE] (state) {},
  [EDIT_NOTE] (state, payload, commit) {
    console.log('payload', payload)
    let key = payload
    state.note.forEach((item, index) => {
      if (index == key) {
        state.currentEl = item
      } else {
        // console.log('2serch true item', item)
        // console.log('2serch true index', index)
      }
    })
    Vue.set(state, 'content', state.currentEl.content)
    Vue.set(state, 'name', state.currentEl.name)
  },
  [NOTE_DETAILS] (state, payload, commit) {
    console.log('payload', payload)
    let key = payload
    state.note.forEach((item, index) => {
      if (index == key) {
        state.currentEl = item
      } else {
        // console.log('2serch true item', item)
        // console.log('2serch true index', index)
      }
    })
  }
}

// actions
const actions = {
  CREATE_ARRAY_NOTE ({ commit, state }, payload) {
    const tempParams = {
      'name': state.name,
      'content': state.content,
      'coments': [
        // {
        //   'author': '',
        //   'content': '',
        //   'created_at': null
        // }
      ]
    }
    state.note.push(tempParams)
    console.log(state.note)
    let serialObj = JSON.stringify(state.note)
    localStorage.setItem('note', serialObj)
    commit(UPDATE_INPUT_VALUE, '')
    commit(UPDATE_AREA_VALUE, '')
  },
  GET_LIST_NOTES ({commit, state}) {
    let retrievedObject = localStorage.getItem('note')
    console.log('retrievedObject: ', JSON.parse(retrievedObject))
    let temp = JSON.parse(retrievedObject)
    state.note = temp
  },
  DEL_ALL_NOTES ({commit, state}) {
    localStorage.removeItem('note')
    Vue.set(state, 'note', '')
  },
  DEL_ITEM_NOTE ({commit, state}, payload) {
    let key = payload
    state.note.splice(key, 1)
    let serialObj = JSON.stringify(state.note)
    localStorage.setItem('note', serialObj)
  },
  SAVE_EDIT_NOTE ({state, commit}, payload) {
    let key = payload
    console.log('post', payload)
    Vue.set(state.note[key], 'name', state.name)
    Vue.set(state.note[key], 'content', state.content)
    console.log('note arr', state.note[key].content)
    let serialObj = JSON.stringify(state.note)
    localStorage.setItem('note', serialObj)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
