/*global $, alert, console */

$(document).ready(function() {


    /* ===============================  click on navbar toggler  =============================== */

    $('.navbar-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.sidebar').toggleClass("opened");
        $('.overlay_gen').fadeToggle().on('click', function() {
            $(this).fadeOut();
            $('.navbar-toggler').removeClass('open')
            $('.sidebar').removeClass("opened");
        });
    })

    /* ===============================  haeder carousel  =============================== */
    $(".header .owl-carousel").owlCarousel({
        autoplay: true,
        nav: true,
        dots: false,
        loop: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        items: 1,
        responsive: {
            0: { nav: false },
            576: { nav: false },
            768: { nav: true },
            1200: {}
        }
    });

    /* ===============================  clients section  =============================== */

    $(".clients_section .owl-carousel").owlCarousel({
        autoplay: true,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        responsive: {
            0: { items: 1, dots: false, },
            576: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 }
        }
    });

    /* ===============================  haeder carousel  =============================== */
    $(".Companies_section .owl-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        dots: true,
        loop: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        items: 1,
    });



    /* ===============================  Smooth scroll into second section  =============================== */

    $('.smoothscroll').on('click', function() {

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'easeInOutExpo')
    })




    /* ===============================  WOW.js  =============================== */

    new WOW().init();


    /* ===============================  search popup  =============================== */

    $('.search_icon').on('click', function(e) {
        e.preventDefault();
        $('.search-popup').addClass('active')
    })

    $('.search-popup').on('click', function() {
        $(this).removeClass('active')
    })

    $('.aws-search-form').on('click', function(e) {
        e.stopPropagation();
    })




    /* ===============================  clients section  =============================== */
    $(".services_section .owl-carousel").owlCarousel({
        autoplay: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 }
        }
    });



    /* ===============================  Button Up  =============================== */

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {

            $('.up').addClass('fade')
        } else {

            $('.up').removeClass('fade')
        }

        if ($(window).scrollTop() >= 137) {

            $('.nav_bar').addClass('sticky_nav')

        } else {

            $('.nav_bar').removeClass('sticky_nav')

        }

        if ($(window).scrollTop() >= 170) {

            $('.sticky_nav .vission').addClass('active')

        } else {

            $('.sticky_nav .vission').removeClass('active')

        }
    })


    $('.up').on('click', function() {

        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'easeInOutExpo')
    })

    if ($(window).scrollTop() >= 137) {

        $('.nav_bar').addClass('sticky_nav')

    } else {

        $('.nav_bar').removeClass('sticky_nav')

    }

    if ($(window).scrollTop() >= 170) {

        $('.sticky_nav .vission').addClass('active')

    } else {

        $('.sticky_nav .vission').removeClass('active')

    }


    /* ===============================  dropdown  =============================== */

    $('.dropdown-toggle').dropdown()

});