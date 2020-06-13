const newChatMembers = require('./new_chat_members')

describe('Testing the new_chat_members event', () => {
  test('Should be a function', () => {
    expect(newChatMembers).toBeInstanceOf(Function)
  })
})
