'use strict'

const store = require('../store')

const onAssignmentMessage = (message) => {
  $('#assignment-message').text(message)
}

const onNewAssignmentSuccess = () => {
  onAssignmentMessage('Successfully Created New Assignment')
  console.log('success')
}

const onNewAssignmentFailure = () => {
  onAssignmentMessage('Error Creating New Assignment')
  console.log('fail')
}

module.exports = {
  onNewAssignmentSuccess,
  onNewAssignmentFailure
}
