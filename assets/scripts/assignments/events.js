'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetAssignments = event => {
  event.preventDefault()
  api.getAssignments()
    .then(ui.onGetAssignmentsSuccess)
    .catch(ui.onGetAssignmentsFailure)
}

const onNewAssignment = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.newAssignment(formData)
    .then(ui.onNewAssignmentSuccess)
    .catch(ui.onNewAssignmentFailure)
  $('form').trigger('reset')
}

const addHandlers = () => {
  $('#new-assignment').on('submit', onNewAssignment)
  $('#get-all-assignments').on('click', onGetAssignments)
}

module.exports = {
  addHandlers
}
