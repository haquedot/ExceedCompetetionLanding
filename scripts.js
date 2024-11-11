$(document).ready(function(){
    $(".bestChoice-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1.1
            },
            600: {
                items: 1
            }
        }
    });
});

$(document).ready(function(){
    $('.gallery-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1 
            },
            600: {
                items: 2 
            },
            1000: {
                items: 1 
            }
        }
    });
});

$(document).ready(function(){
    $(".testimonials-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2.7
            }
        }
    });
});
