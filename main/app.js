function sendEmail(){

    (function(){
        emailjs.init("user_48v0v2ixexu0gGtiBREac");
     })();  

let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let phone = document.getElementById('phone').value;
let subject = document.getElementById('subject').value;
let message = document.getElementById('message').value;


var templateParams = {

    firstName : name,
    myEmail : email,
    myPhone : phone,
    mySubject : subject,
    myMessage : message,

};

emailjs.send('catseller', 'catsellerId', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}
 
