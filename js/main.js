//effects
$(window).on("load", function() {
    if (window.location.hash == "") {
        window.location.hash = "login.php";
        var Hash = window.location.hash.substring(1);
        $mainContent = $("#container");
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


//pagging
$(document).ready(function() {
    $(function() {
        var newHash = "";
        $mainContent = $("#container");

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