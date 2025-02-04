$(document).ready(function () {
    $('.header_body').slick({
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autplaySpeed: 3000,
        infinite: true,
        speed: 500,
        cssEase: 'ease-in-out'
    });
})