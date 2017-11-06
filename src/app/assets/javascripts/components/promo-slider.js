$( function() {

    var slidesCountry = 0;

    function sliderInit() {

        var windowHeight = $(window).height();
        var headerHeight = $('.js-site-header').outerHeight();
        var promoHeight = windowHeight;

        if (Modernizr.mq(mq.lg.str)) {

            $('.js-promo-slider-item').css('height' , promoHeight);

        } else if (Modernizr.mq(mq.sm.str)) {

            console.log(headerHeight);

            $('.js-promo-slider').css('margin-top' , 'auto');

        }
    }


    $('.js-promo-slider').slick({
        infinite: true,
        cssEase: 'ease',
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        speed: 660,
        slidesToShow: 1,
        easing: 'linear',
        arrows: false,
        dots: true,
        customPaging: function(slider, i) {
            return $('<span></span>');
        },
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });


    sliderInit();
    $(window)
        .on('load', function() {
            sliderInit();
        })

        .smartresize(function() {
            sliderInit();
        });
});
