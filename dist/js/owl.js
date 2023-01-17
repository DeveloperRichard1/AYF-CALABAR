$(document).ready(function () {

    $("#owl-example").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        pagination: false,
        navigation: false,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
            },
            480 : {
                items:2
            },
            // breakpoint from 768 up
            768 : {
                items:3
            },
            1200 : {
                items: 4
            }
        }
    });

});
