<template lang="html">
  <v-container fluid="fluid" class="chat">
    <chat-header></chat-header>
    <conversation-panel
      :conversation-history="conversationHistory">
    </conversation-panel>
    <v-col xs10 offset-xs1 v-if="this.gettingAnswer">
      <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
    </v-col>
    <chat-action-panel
      @question="getAnswers"
    ></chat-action-panel>
  </v-container>
  </div>
</template>

<script>
import * as conversationService from '@/vue/services/conversation-service'
import chatHeader from '@/vue/components/chat-header/chat-header'
import conversationPanel from '@/vue/components/chat-conversation-panel/chat-conversation-panel'
import chatActionPanel from '@/vue/components/chat-action-panel/chat-action-panel'

export default {
  data () {
    return {
      chatId: '',
      conversationHistory: [],
      gettingAnswer: false
    }
  },
  components: {
    chatHeader,
    conversationPanel,
    chatActionPanel
  },
  methods: {
    getAnswers (question) {
      this.gettingAnswer = true

      conversationService.getAnswers(question, this.chatId).then((res) => {
        const result = res.body.result
        this.conversationHistory.push({
          query: result.query,
          answer: result.answer
        })
        this.gettingAnswer = false
        if (!this.chatId) {
          this.chatId = res.body.chatId
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import './chat';
</style>
