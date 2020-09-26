$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
        $(".mo-modal-overlay").fadeIn(500)
        $(".mo-modal").addClass("mo-modal-in");
    });
});
$(document).ready(function () {
    new WOW().init();

    $('.mo-modal-overlay').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
    });
    $('.mo-modal').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-modal-close').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
    });
    ///////// **Main Slider** ///////// 
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        autoplay: true,
        loop: true,
        nav: false,
    });
    ///////// **brands Slider** ///////// 
    $('.brandsSlider').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 2,
                margin: 13,
            },
            480: {
                items: 3,
                margin: 25,
            },
            767: {
                items: 4,
                margin: 25,
            },
            992: {
                items: 5,
                margin: 25,
            },
            1200: {
                items: 6,
                margin: 15,
            },
        }
    });
    ///////// **media** ///////// 

    if ($(window).width() <= 991) {
        $('.feats').addClass("featsSlider")
        $('.featsSlider').addClass("owl-carousel")
        $('.featsSlider').removeClass("feats")
        $('.featsSlider').owlCarousel({
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 2,
                },
                767: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 4,
                },
            }
        });
    }

    if ($(window).width() <= 991) {
        $('.products').addClass("productsSlider")
        $('.productsSlider').addClass("owl-carousel")
        $('.productsSlider').removeClass("products-grid")
        $('.productsSlider').owlCarousel({
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                767: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 4,
                },
            }
        });
    }
    if ($(window).width() <= 767) {
        /////////search/////////
        $('.search-icon').click(function () {
            $(".search-cont").fadeIn(400);
            $("body").addClass("overflow");
            $(".search-form").addClass("open");
        });
        $('.search-cont').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").fadeOut(400);
            $(".search-form").removeClass("open");
        });
        $('.search-form').click(function (e) {
            e.stopPropagation();
        });
        $('.cats-head').click(function () {
            $(".mo-navbar").slideToggle(300);
            $(".cats-head").toggleClass("active");
        });
    }

    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
});