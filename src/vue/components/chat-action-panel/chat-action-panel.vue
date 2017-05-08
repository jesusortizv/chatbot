<template>
  <v-col xs12 class="action-panel">
    <div class="action-panel__wrapper">
      <v-col xs12 class="action-panel__textbox">
        <v-text-field
          @keyup.native.enter="getAnswers"
          v-model="currentQuestion"
          label="Type a message.."
          single-line>
        </v-text-field>
      </v-col>
    </div>
  </v-col>
</template>

<script>
export default {
  data () {
    return {
      currentQuestion: ''
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    getAnswers () {
      if (!this.currentQuestion) return
      this.$emit('question', this.currentQuestion)
      this.resetCurrentQuestion()
    },
    resetCurrentQuestion () {
      this.currentQuestion = ''
    }
  },
  components: {}
}
</script>

<style lang="scss">
  @import './chat-action-panel';
</style>
