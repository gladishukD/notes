import { mapGetters, mapMutations, mapActions } from 'vuex'
import {
  GET_LIST_NOTES,
  DEL_ALL_NOTES,
	DEL_ITEM_NOTE
} from '@/store/mutation-types'

export default {
  name: 'list',
  components: {},
  data () {
    return {
    }
  },
  mounted () {
    this.fetch()
  },
  computed: {
    ...mapGetters({
      note: 'notes/note'
    })
  },
  methods: {
    ...mapActions('notes/', {
      fetch: GET_LIST_NOTES,
      delAllNotes: DEL_ALL_NOTES,
			delItem: DEL_ITEM_NOTE
    })
  }
}
