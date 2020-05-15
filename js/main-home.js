$(window).on("load", function() {
    if (window.location.hash == "") {
        window.location.hash = "cities.php";
        var Hash = window.location.hash.substring(1);
        $mainContent = $("#card-container");
        $(window).bind('hashchange', function() {

            newHash = window.location.hash.substring(1);

            if (newHash) {
                $mainContent
                    .fadeOut(200, function() {
                        $mainContent.hide().load(newHash, function() {
                            $mainContent.fadeIn(200);
                        });
                    });
            }
        });

        $(window).trigger('hashchange');

    }
});


// Check if session is set or not || if not,redirect to index.php
$(window).on("load", function() {
    $.ajax({
        url: "session/check_session.php",
        type: "GET",
        error: function() {
            window.location = "index.php";
        }
    })

})




//pagging
$(document).ready(function() {
    $(function() {
        var newHash = "";
        $mainContent = $("#card-container");

        $(window).bind('hashchange', function() {

            newHash = window.location.hash.substring(1);

            if (newHash) {
                $mainContent
                    .fadeOut(200, function() {
                        $mainContent.hide().load(newHash, function() {
                            $mainContent.fadeIn(200);
                        });
                    });
            };

        });
        $(window).trigger('hashchange');
    });
});


//kinhsh to nav-tab on click kai refresh
$(document).ready(function() {
    $('a').click(function() {
        $("#navtab").find('a.nav-link.active').removeClass("active");
        $(this).addClass("active");
    });


    var page = window.location.hash.substr(1);
    if (page == "cities.php") {
        $("#navtab").find('a.nav-link.active').removeClass("active");
        $('[href*="cities.php"]').addClass("active");
    };
    if (page == "my_comments.php") {
        $("#navtab").find('a.nav-link.active').removeClass("active");
        $('[href*="my_comments.php"]').addClass("active");
    };
    if (page == "contact.php") {
        $("#navtab").find('a.nav-link.active').removeClass("active");
        $('[href*="contact.php"]').addClass("active");
    };

});

//εμφανιση username sthn home
$(document).ready(function() {
    let output = '';
    $.ajax({
        url: 'profile/fetch_my_profile.php',
        type: 'GET',
        success: function(user) {
            const nickname = document.querySelector('#nickname');

            output += `
            <p>${user[0].nickname}</p> 
            `
            nickname.innerHTML = output;
        }
    })
})


//logout button
$('#logout').click(function() {
    logout();
})

//logout function
function logout() {
    $.ajax({
        url: 'auth/dologout.php',
        type: 'GET',
        success: function() {
            window.location = 'index.php';

        }
    })
}