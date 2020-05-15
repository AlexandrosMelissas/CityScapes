//check if mail exists
var emailExists = true;
$("#email").blur(function() {

    const email = $('#email').val();

    const error = document.querySelector('.error-email');
    if (email == "") {
        return;
    }


    $.ajax({
        url: 'auth/doregister.php',
        type: 'post',
        data: {
            email: email,
            email_check: 1
        },

        success: function(response) {

            error.style.display = 'none';
            emailExists = false;
        },

        error: function(e) {


            error.textContent = 'email exists';
            error.style.display = "block";
            emailExists = true;

        }

    });
});


// validating fields


function validate(input, message, event) {
    let element = document.querySelector(`#${input}`);
    element.addEventListener(`${event}`, function() {

        let error = document.querySelector(`.error-${input}`);
        if (element.validity.valueMissing) {
            error.style.display = 'block';
            error.textContent = 'This field is required';
        } else if (!element.checkValidity()) {
            error.textContent = message;
            error.style.display = 'block';
        } else {
            error.style.display = 'none';
        }
    });
}


validate('surname', "Must contain only letters.", "keyup");
validate('surname', "Must contain only letters.", "focus");
validate('name', "Must contain only letters.", "keyup");
validate('name', "Must contain only letters.", "focus");
validate('nickname', "Enter at least 3 characters.", "keyup");
validate('nickname', "Enter at least 3 characters.", "focus");
validate("password1", "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters", "keyup");
validate("password1", "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters", "focus");
validate("email", "Enter a valid email address.", "keyup");
validate("email", "Enter a valid email address.", "focus");
validate("age", "Enter a valid age.", "keyup");
validate("age", "Enter a valid age.", "focus");



// Register Confirm Password Validation

$('#btnRegister').on('click', function() {

    let gender = '';
    const error = document.querySelector(".error");
    const pass1 = document.querySelector("#password1").value;
    const pass2 = document.querySelector("#password2").value;
    const name = document.querySelector("#name").value;
    const surname = document.querySelector("#surname").value;
    const nickname = document.querySelector("#nickname").value;
    const email = document.querySelector("#email").value;
    const age = document.querySelector("#age").value;
    if(document.querySelector('#male').checked){
        gender = document.querySelector("#male").value;
    }else{
        gender = document.querySelector("#female").value;
    }
     
    console.log(gender)
    
    //New Confirm Password

    if (pass1 != pass2) {
        let error = document.querySelector(".error-password2");
        error.style.display = 'block';

    } else if ((document.querySelector("#register-form").checkValidity()) && (emailExists == false)) {


        $.ajax({
            url: "auth/doregister.php",
            type: "POST",
            data: {
                name: name,
                surname: surname,
                nickname: nickname,
                pass1: pass1,
                pass2: pass2,
                email: email,
                age: age,
                gender: gender

            },
            success: function() {
                window.location = '#login.php';
            }
        })

    }
});