$(document).ready(function() {
    // Property showcase slider
    $('.portfolio-projects').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false
    });

    // Featured project slider
    $('.featured-project').slick({
        autoplay: false,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});