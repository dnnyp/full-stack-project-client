'use strict'

const config = require('./../config')
const store = require('./../store')

const createRoster = data => {
  return $.ajax({
    url: config.apiUrl + '/rosters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createRoster
}
