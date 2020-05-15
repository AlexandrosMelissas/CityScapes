// Login Validation


$('#form').submit(function(event) {
    event.preventDefault();
    const nickname = document.querySelector("#nickname");
    const password = document.querySelector("#password");
    const error_nickname = document.querySelector('.error-nickname');
    const error_password = document.querySelector('.error-password');
    $.ajax({
        type: "POST",
        url: "auth/dologin.php",
        data: { nickname: nickname.value, password: password.value },
        success: function() {
            window.location.replace('home.php');
        },
        error: function() {
            nickname.className = 'form-control is-invalid';
            password.className = 'form-control is-invalid';
            error_nickname.style.display = "block";
            error_password.style.display = "block";

        }

    });
});