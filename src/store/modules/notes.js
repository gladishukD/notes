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
  NOTE_DETAILS,
  UPDATE_COMMENT_VALUE,
  UPDATE_AUTHOR_VALUE,
  SAVE_COMENT,
  MESSAGE_STATUS

} from '../mutation-types'

const state = {
  newNoteData: {
    newName: '',
    newContent: ''
  },
  comment: {
    author: '',
    content: '',
    created_at: null
  },
  currentEl: [],
  name: '',
  content: '',
  note: [],
  message: false
}

// getters
const getters = {
  currentEl: state => state.currentEl,
  comment: state => state.comment,
  note: state => state.note,
  name: state => state.name,
  content: state => state.content,
  message: state => state.message
}

// mutations
const mutations = {
  [MESSAGE_STATUS] (state, payload) {
    Vue.set(state, 'message', true)
    setTimeout(() => {
      Vue.set(state, 'message', false)
    }, 5000)
  },
  [UPDATE_INPUT_VALUE] (state, payload) {
    Vue.set(state, 'name', payload)
  },
  [UPDATE_AREA_VALUE] (state, payload) {
    Vue.set(state, 'content', payload)
  },

  [UPDATE_AUTHOR_VALUE] (state, payload) {
    Vue.set(state.comment, 'author', payload)
  },
  [UPDATE_COMMENT_VALUE] (state, payload) {
    Vue.set(state.comment, 'content', payload)
  },

  [CREATE_ARRAY_NOTE] (state) {},
  [GET_LIST_NOTES] (state) {},
  [DEL_ALL_NOTES] (state) {},
  [DEL_ITEM_NOTE] (state) {},
  [SAVE_COMENT] (state) {},
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
      'coments': []
    }
    if (state.note !== '' && state.content !== '') {
      state.note.push(tempParams)
      console.log(state.note)
      let serialObj = JSON.stringify(state.note)
      localStorage.setItem('note', serialObj)
      commit(UPDATE_INPUT_VALUE, '')
      commit(UPDATE_AREA_VALUE, '')
    } else {
      commit(MESSAGE_STATUS)
    }
  },
  GET_LIST_NOTES ({commit, state}) {
    console.log(state.note)
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
  },
  SAVE_COMENT ({state, commit}, payload) {
    if (state.comment.author !== '' && state.comment.content !== '') {
      let now = new Date()

      console.log('this date', now)
      const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }
      const data = {
        'author': state.comment.author,
        'content': state.comment.content,
        'created_at': now.toLocaleString('uk-UA', options)
      }
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
      state.currentEl.coments.push(data)
      console.log('curr arr', state.currentEl.coments)
      Vue.set(state.note[key], 'coments', state.currentEl.coments)
      console.log('data with coment', state.note)
      let serialObj = JSON.stringify(state.note)
      localStorage.setItem('note', serialObj)
      //
      Vue.set(state.comment, 'author', null)
      Vue.set(state.comment, 'content', null)
    } else {
      commit(MESSAGE_STATUS)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
