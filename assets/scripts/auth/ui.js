'use strict'

const store = require('../store')

const onAuthMessage = (message) => {
  $('#auth-message').text(message)
}

const onSignUpSuccess = () => {
  onAuthMessage('Successfully Signed Up')
}

const onSignUpFailure = () => {
  onAuthMessage('Error On Sign-up')
}

const onSignInSuccess = (responseData) => {
  onAuthMessage('Successfully Signed In')
  store.user = responseData.user
  $('.view-public').hide()
  $('.view-private').show()
  $('.content').empty()
}

const onSignInFailure = () => {
  onAuthMessage('Error On Sign-in')
}

const onChangePasswordSuccess = () => {
  onAuthMessage('Successfully Changed Password')
}

const onChangePasswordFailure = () => {
  onAuthMessage('Error On Change Password')
}

const onSignOutSuccess = () => {
  onAuthMessage('Successfully Signed Out')
  store.user = null
  $('.view-public').show()
  $('.view-private').hide()
  $('.content').empty()
}

const onSignOutFailure = () => {
  onAuthMessage('Error On Sign-out')
}

module.exports = {
  onAuthMessage,
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
