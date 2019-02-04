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

const updateAssignment = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/assignments/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteAssignment = id => {
  return $.ajax({
    url: config.apiUrl + '/assignments/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getAssignments,
  newAssignment,
  updateAssignment,
  deleteAssignment
}
