const admins = ({ bot }) => {
  const { GROUP_CHAT_ID } = process.env

  return async context => {
    const administrators = await bot.telegram.getChatAdministrators(GROUP_CHAT_ID)

    const response = administrators
      .map(admin => {
        const { first_name: firstName, last_name: lastName, username } = admin.user

        return `${firstName} ${lastName || ''} - @${username}\n`
      })
      .join('')

    context.reply(response)
  }
}

module.exports = admins
