import { mapGetters, mapMutations, mapActions } from 'vuex'
import message from '../message/index.vue'
import {
  UPDATE_AUTHOR_VALUE,
  UPDATE_COMMENT_VALUE,
  GET_LIST_NOTES,
  DEL_ALL_NOTES,
  DEL_ITEM_NOTE,
  SAVE_COMENT,
  CLEAR_STORE_COMMENT_VALUE
} from '@/store/mutation-types'
import { db } from '../../main'

export default {
  name: 'list',
  components: {
    message
  },
  data () {
    return {
      author: null,
      content: null,
      list: db.collection('note')
    }
  },
  mounted () {
    this.fetch()
    console.log('hi', db.collection('note'))
    console.log('hi', this.list)
  },
  computed: {
    ...mapGetters({
      note: 'notes/note',
      comment: 'notes/comment',
      message: 'notes/message'
    })
  },
  methods: {
    ...mapMutations('notes/', {
      updateAutor: UPDATE_AUTHOR_VALUE,
      updateContent: UPDATE_COMMENT_VALUE,
      clearCommentStore: CLEAR_STORE_COMMENT_VALUE
    }),
    ...mapActions('notes/', {
      fetch: GET_LIST_NOTES,
      delAllNotes: DEL_ALL_NOTES,
      delItem: DEL_ITEM_NOTE,
      saveComment: SAVE_COMENT
    }),
    save (value) {
      this.author = null
      this.content = null
      this.saveComment(value)
      this.clearCommentStore()
    }
  }
}
