$(document).ready(function() {
    // Property showcase slider
    $('.portfolio-projects').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        fade: true,
        speed: 1200,
        cssEase: 'linear'
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