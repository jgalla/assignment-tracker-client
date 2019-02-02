'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

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
}

module.exports = {
  addHandlers
}
