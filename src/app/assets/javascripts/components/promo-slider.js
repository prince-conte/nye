$( function() {

    var slidesCountry = 0;

    function sliderInit() {

        var windowHeight = $(window).height();
        var headerHeight = $('.js-site-header').outerHeight();
        var promoHeight = windowHeight;

        // $('.js-promo-slider .js-promo-slider-item').each(function() {
        //     slidesCountry = slidesCountry + 1;
        // });
        //
        // slidesCountry = slidesCountry - 1;

        $('.js-promo-slider-item').css('height' , promoHeight);

    }


    // $(document).on('click', '.slick-next.slick-disabled', function(){
    //
    //     $('.js-promo-slider').slick ('slickGoTo', 0);
    //     return false
    //
    // });
    //
    // $(document).on('click', '.slick-prev.slick-disabled', function(){
    //
    //     $('.js-promo-slider').slick ('slickGoTo', slidesCountry);
    //     return false
    //
    // });

    $('.js-promo-slider').slick({
        infinite: true,
        cssEase: 'ease',
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

        // .smartresize(function() {
        //     sliderInit();
        // });
});
