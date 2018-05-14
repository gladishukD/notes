import { mapGetters, mapMutations, mapActions } from 'vuex'
import message from '../message/index.vue'
import {
  UPDATE_INPUT_VALUE,
  UPDATE_AREA_VALUE,
  CREATE_ARRAY_NOTE
} from '@/store/mutation-types'
export default {
  name: 'create-notes',
  components: {
    message
  },
  data () {
    return {
    }
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
      updateAreaValue: UPDATE_AREA_VALUE
    }),
    ...mapActions('notes/', {
      pushData: CREATE_ARRAY_NOTE
    })
  }
}
