import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'message',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      message: 'notes/message_value'
    })
  }
}
