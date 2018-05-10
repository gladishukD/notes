import { mapGetters, mapMutations, mapActions } from 'vuex'
import message from '../message/index.vue'
import {
  UPDATE_AUTHOR_VALUE,
  UPDATE_COMMENT_VALUE,
  GET_LIST_NOTES,
  DEL_ALL_NOTES,
  DEL_ITEM_NOTE,
  SAVE_COMENT
} from '@/store/mutation-types'

export default {
  name: 'list',
  components: {
    message
  },
  data () {
    return {
      author: '',
      content: ''
    }
  },
  mounted () {
    this.fetch()
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
      updateContent: UPDATE_COMMENT_VALUE
    }),
    ...mapActions('notes/', {
      fetch: GET_LIST_NOTES,
      delAllNotes: DEL_ALL_NOTES,
      delItem: DEL_ITEM_NOTE,
      saveComment: SAVE_COMENT
    }),
    save (value) {
      this.saveComment(value)
    }
  }
}
