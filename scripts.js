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
        dots: false, // Remove dots
        responsive: {
            0: {
                items: 1 // 1 item on mobile
            },
            600: {
                items: 2 // 2 items on tablets
            },
            1000: {
                items: 1 // 1 item on larger screens
            }
        }
    });
});
