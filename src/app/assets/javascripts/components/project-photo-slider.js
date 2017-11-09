$( function() {

    function projectPhotoSlider_init() {

        $('.js-project-photo-slider').slick({
            arrows: false,
            dots: true,
            customPaging: function(slider, i) {
                return $('<span></span>');
            },
            centerMode: true,
            centerPadding: '430px',
            slidesToShow:1,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        centerMode: true,
                        centerPadding: '230px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }


    function earOfSurrenderInit () {

        var windowWidth = $(window).width();
        var photoSlide = $('.js-project-photo-slide').width();
        var earOfSurrender = (windowWidth - photoSlide) / 2;

        $('.js-earOfSurrender').css('width', earOfSurrender);

        $('.js-project-photo-next').on('click',function(){
            $('.js-project-photo-slider').slick('slickNext');
            return false;
        });

        $('.js-project-photo-prev').on('click',function(){
            $('.js-project-photo-slider').slick('slickPrev');
            return false;
        });



    }


    $(window)
        .on('load', function() {
            projectPhotoSlider_init();
            earOfSurrenderInit();
        })

        .smartresize(function() {
            projectPhotoSlider_init();
            earOfSurrenderInit();
        });


});