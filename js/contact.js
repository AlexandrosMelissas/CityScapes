
// Event Listener

document.querySelector('#send-message').addEventListener('click',sendmail);


// Function gia na steilei to email
function sendmail(){

    let message = document.querySelector('#email-message')

    $.ajax({
        url: 'other/send_email.php',
        type: 'POST',
        data: {message: message.value},
        success: function(data){
              if(data=='Success'){
                  showAlert('Το μήνυμα στάλθηκε επιτυχώς!','alert alert-success mt-3');
              }else{
                showAlert('Κάτι πήγε στραβά..Προσπαθήστε ξανά','alert alert-danger mt-3');
              }
        }
    })
    
    message.value = '';

}



// Emfanizei to mhnyma gia to email
function showAlert(message,classname){
    const button = document.querySelector("#email-message");
    const container = document.querySelector('.email-container');
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(message));
    div.className = classname;
    
    container.insertBefore(div,button.nextElementSibling.nextElementSibling);
    setTimeout(clearAlert,3000);
}

function clearAlert(){
    const alert = document.querySelector('.alert')
    if(alert){
        alert.remove();
    }
}

