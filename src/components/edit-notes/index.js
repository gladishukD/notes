import { mapGetters, mapMutations, mapActions } from 'vuex'
import {
  UPDATE_INPUT_VALUE,
  UPDATE_AREA_VALUE,
  CREATE_ARRAY_NOTE,
  EDIT_NOTE,
  GET_LIST_NOTES,
  SAVE_EDIT_NOTE
} from '@/store/mutation-types'
import message from '../message/index.vue'

export default {
  name: 'edit-notes',
  components: {
    message
  },
  data () {
    return {
      id: this.$route.params.id
    }
  },
  created () {
    this.fetch()
    this.dataForEdit(this.id)
  },
  computed: {
    ...mapGetters({
      note: 'notes/note',
      name: 'notes/name',
      content: 'notes/content',
      message: 'notes/message'
    })
  },
  methods: {
    ...mapMutations('notes/', {
      updateInputValue: UPDATE_INPUT_VALUE,
      updateAreaValue: UPDATE_AREA_VALUE,
      dataForEdit: EDIT_NOTE
    }),
    ...mapActions('notes/', {
      pushData: CREATE_ARRAY_NOTE,
      fetch: GET_LIST_NOTES,
      saveEditData: SAVE_EDIT_NOTE
    }),
    saveData () {
      this.saveEditData(this.id)
    }
  }
}
