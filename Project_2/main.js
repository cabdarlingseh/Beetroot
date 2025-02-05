// For the Scrolling of the title bar

window.addEventListener('scroll', function () {
    let titleBar = document.querySelector('.title_bar');
    if (window.scrollY > 50) {
        titleBar.classList.add('scrolled');
        titleBar.style.paddingTop = "0";
    } else {
        titleBar.classList.remove('scrolled');
        titleBar.style.paddingTop = "53px";
    }
})

$(document).ready(function () {

    //    Changing the main texts JQuery

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