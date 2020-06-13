const leftChatMember = require('./left_chat_member')

describe('Testing the left_chat_member event handler', () => {
  test('Should be a function', () => {
    expect(leftChatMember).toBeInstanceOf(Function)
  })

  test('Should call the context.reply method with a string', () => {
    const context = {
      reply: jest.fn()
    }

    leftChatMember(context)

    expect(context.reply).toHaveBeenCalled()
    expect(typeof context.reply.mock.calls[0][0]).toBe('string')
  })
})
