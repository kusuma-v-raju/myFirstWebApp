const submitButton = document.querySelector('#submit-button');
function emailValidate(email) {
  return email.includes('@');
}
function validateNSFW(messageText) {
    return messageText.includes('crap');
}
  function clickListener(event) {
      event.preventDefault();
      let emailInput = document.querySelector('#email');
      let messageInput = document.querySelector('#message');
      let emailText = emailInput.value;
      let messageText = messageInput.value;

  if(emailValidate(emailText) !== true) {
    console.log('The email address must contain @');
    return false;
  }

  if(validateNSFW(messageText) === true) {
    console.log('This message is not valid');
    return false;
}
  console.log('Thanks for your message');
}
submitButton.addEventListener('click', clickListener);