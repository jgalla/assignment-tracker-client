'use strict'

const config = require('../config')
const store = require('../store')

const getAssignments = () => {
  return $.ajax({
    url: config.apiUrl + '/assignments',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newAssignment = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/assignments',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  getAssignments,
  newAssignment
}
