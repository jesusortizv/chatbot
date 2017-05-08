<template>
  <v-col xs12 class="conversacion-panel">
    <ul class="conversacion-panel__messages" >
      <li
        v-for="conversation in conversationHistory"
        v-scroll-into-view>
          <div class="conversacion-panel__messages__message conversacion-panel__messages__message--user">
            <blockquote>{{ conversation.query }}</blockquote>
          </div>
          <div class="conversacion-panel__messages__message conversacion-panel__messages__message--system">
            <v-icon>adb</v-icon>
            <blockquote>{{ conversation.answer }}</blockquote>
          </div>
      </li>
    </ul>
  </v-col>
</template>

<script>
import scrollIntoView from '@/vue/directives/scroll-into-view'
export default {
  props: {
    conversationHistory: {
      type: Array,
      default: []
    }
  },
  directives: {
    scrollIntoView
  }
}
</script>

<style lang="scss">
  @import './chat-conversation-panel';
</style>
