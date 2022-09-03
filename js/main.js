$(document).ready(function (e) {
    navbar()
    $(window).on("scroll", function () {
        navbar();
    })
    function navbar() {
        if ($(window).scrollTop() > 30) {
            $("#main-header").addClass("scrolled");
            $(".navbar-top").css('display', 'none');
            $(".navbar-brand img").attr("src", "images/logo-scrolled.svg");
            $(".scroll-top").css({ opacity: 1 });
            
        }
        else {
            $("#main-header").removeClass("scrolled");
            $(".navbar-top").css('display', 'block');
            $(".navbar-brand img").attr("src", "images/logo-primary.svg");
            $(".scroll-top").css({ opacity: 0 });


        }
    }





 
});