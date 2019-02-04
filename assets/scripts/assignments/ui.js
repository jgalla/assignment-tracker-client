'use strict'

const store = require('../store')
const showAssignmentsTemplate = require('../templates/assignment-listing.handlebars')

const onAssignmentMessage = (message) => {
  $('#assignment-message').text(message)
}

const onGetAssignmentsSuccess = (data) => {
  $('.content').empty()
  onAssignmentMessage('Success Retrieving Assignments')
  const showAssignmentsHtml = showAssignmentsTemplate({ assignments: data.assignments })
  $('.content').html(showAssignmentsHtml)
}

const onGetAssignmentsFailure = () => {
  onAssignmentMessage('Error Retrieving Assignments')
}

const onNewAssignmentSuccess = () => {
  onAssignmentMessage('Successfully Created New Assignment')
}

const onNewAssignmentFailure = () => {
  onAssignmentMessage('Error Creating New Assignment')
}

const onUpdateAssignmentSuccess = () => {
  onAssignmentMessage('Successfully Updated Assignment')
}

const onUpdateAssignmentFailure = () => {
  onAssignmentMessage('Error Updating Assignment')
}
module.exports = {
  onGetAssignmentsSuccess,
  onGetAssignmentsFailure,
  onNewAssignmentSuccess,
  onNewAssignmentFailure,
  onUpdateAssignmentSuccess,
  onUpdateAssignmentFailure
}
