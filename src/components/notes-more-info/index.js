import { mapGetters, mapMutations, mapActions } from 'vuex'
import {
  UPDATE_INPUT_VALUE,
  UPDATE_AREA_VALUE,
  CREATE_ARRAY_NOTE,
  NOTE_DETAILS,
  GET_LIST_NOTES,
  SAVE_EDIT_NOTE
} from '@/store/mutation-types'

export default {
  name: 'notes-more-info',
  components: {},
  data () {
    return {
      id: this.$route.params.id
    }
  },
  created () {
    this.fetch()
    this.dataDetails(this.id)
  },
  computed: {
    ...mapGetters({
      currentEl: 'notes/currentEl',
      note: 'notes/note',
      name: 'notes/name',
      content: 'notes/content'
    })
  },
  methods: {
    ...mapMutations('notes/', {
      updateInputValue: UPDATE_INPUT_VALUE,
      updateAreaValue: UPDATE_AREA_VALUE,
      dataDetails: NOTE_DETAILS
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
