import Vue from 'vue'
import chatActionPanel from '@/vue/components/chat-action-panel/chat-action-panel'

describe('Chat action panel', () => {
  let vm

  beforeEach(() => {
    const Constructor = Vue.extend(chatActionPanel)
    vm = new Constructor().$mount()
  })

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.action-panel__textbox label').textContent).to.equal('Type a message..')
  })

  it('should reset currentQuestion value', () => {
    const mockThis = {
      currentQuestion: 'Hi'
    }

    vm.$options.methods.resetCurrentQuestion.call(mockThis)
    expect(mockThis.currentQuestion).to.equal('')
  })
})
