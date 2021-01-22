'use strict'

/**
 * Returns an array without repetitions from the given array
 * @param {*[]} array - Array of anything
 * @returns {*[]}
 */
const removeRepetitions = array => [...new Set(array)]

module.exports = removeRepetitions
