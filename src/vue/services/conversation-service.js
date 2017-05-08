/**
 * Conversation Service
 * @namespace services.conversationService
 **/

import Vue from 'vue'

/**
 * @method getAnswers
 * @desc Get the answers from a user enquire.
 * @return {Promise} AJAX request as promise - Array of answers.
 * @memberof services.conversationService
 **/
export function getAnswers (question, chatId) {
  return Vue.http.get(`https://us-central1-hutoma-backend.cloudfunctions.net/chat?q=${question}&chatId=${chatId}`,
    {
      headers: {
        'Authorization': 'Basic YXBwbGljYW50Og=='
      }
    })
}
