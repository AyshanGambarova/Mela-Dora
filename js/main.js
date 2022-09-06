$(document).ready(function (e) {
    navbar()
    $(window).on("scroll", function () {
        navbar();
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 3,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    })
    function navbar() {
        if ($(window).scrollTop() > 30) {
            $("#main-header,#about-header").addClass("scrolled");
            $("#about-header .navbar-nav a.nav-link").addClass("text-white");
            $(".navbar-top").css('display', 'none');
            $(".navbar-brand img").attr("src", "images/logo-scrolled.svg");
            $(".scroll-top").css({ opacity: 1 });
         
            
        }
        else {
            $("#main-header,#about-header").removeClass("scrolled");
            $("#about-header .navbar-nav a.nav-link").removeClass("text-white");
            $(".navbar-top").css('display', 'flex');
            $("#main-header .navbar-brand img").attr("src", "images/logo-primary.svg");
            $("#about-header .navbar-brand img").attr("src", "images/logo-tertiary-dark.svg");
            $(".scroll-top").css({ opacity: 0 });


        }
    }






 
});