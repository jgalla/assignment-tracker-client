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

const onUpdateAssignment = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const id = formData.assignment.id

  api.updateAssignment(id, formData)
    .then(ui.onUpdateAssignmentSuccess)
    .catch(ui.onUpdateAssignmentFailure)
  $('form').trigger('reset')
}

const addHandlers = () => {
  $('#new-assignment').on('submit', onNewAssignment)
  $('#get-all-assignments').on('click', onGetAssignments)
  $('#update-assignment').on('submit', onUpdateAssignment)
}

module.exports = {
  addHandlers
}
