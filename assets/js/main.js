$(function() {


    // Fixed Header 
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }

    // Smooth Scroll
    $("[data-scroll]").on('click', function() {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass('show');

        $('html, body').animate({
            scrollTop: elementOffset - 55
        }, 700)
    });

    // navToogle
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    });

    // Blog
    let slider = $("#blog_slider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
      });

});