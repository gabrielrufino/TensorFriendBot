'use strict'

/**
 * Returns a joined name from a telegram user
 * @param {Object} user - Telegram user
 * @param {string} user.first_name - First name
 * @param {string} user.last_name - Last name
 * @returns {string}
 */
const joinName = user => `${user.first_name} ${user.last_name}`

module.exports = joinName
