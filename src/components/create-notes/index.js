import { mapGetters, mapMutations, mapActions } from 'vuex'
import {
  UPDATE_INPUT_VALUE,
  UPDATE_AREA_VALUE,
  CREATE_ARRAY_NOTE
} from '@/store/mutation-types'

export default {
  name: 'create-notes',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      note: 'notes/note',
      name: 'notes/name',
      content: 'notes/content'
    })
  },
  methods: {
    ...mapMutations('notes/', {
      updateInputValue: UPDATE_INPUT_VALUE,
      updateAreaValue: UPDATE_AREA_VALUE
    }),
    ...mapActions('notes/', {
      pushData: CREATE_ARRAY_NOTE
    })
  }
}
