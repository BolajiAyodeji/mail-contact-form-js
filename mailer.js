// script goes here
const sendMessage = document.getElementById('send_message');
const purposeValue = ['Hi', 'Let\'s talk about a speaking engagement', 'Let\'s talk about a project'];

sendMessage.addEventListener('click', () => {
  const name = document.getElementById('form_name').value;
  const email = document.getElementById('form_email').value;
  // const purpose = document.getElementById('purpose').value;
  const message = document.getElementById('form_message').value;

  fetch('https://weconnect-orelongz.herokuapp.com/api/v1/contactUs', { 
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      message
    })
  })
  .then(function (data) {  
    console.log('Request success: ', data);  
  })  
  .catch(function (error) {  
    console.log('Request failure: ', error);  
  });

});
