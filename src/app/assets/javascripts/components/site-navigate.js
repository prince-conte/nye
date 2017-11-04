$( function() {

    var $siteNavigate = $('.js-site-navigate');


    $(document).on('click' ,  '.js-open-menu' , function() {

        $(this).toggleClass('is-active');

        if ($(this).hasClass('is-active')) {

            $siteNavigate.addClass('is-active');

        } else {

            $siteNavigate.removeClass('is-active');

        }

        return false

    });

    $(document).on('click', '.js-site-navigate > ul > li > a' , function () {

        var siteGutter = 0;

        var elementClick = $(this).attr("href");
        var heightNav = $('.site-header').outerHeight();

        if ($(elementClick).hasClass('js-alter-section')) {

            if (Modernizr.mq(mq.sm.str)) {
                    siteGutter = 0;
            }

        } else {

            if (Modernizr.mq(mq.sm.str)) {
                siteGutter = 20;
            }
        }

        var destination = $(elementClick).offset().top - heightNav - siteGutter;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);

        $('.js-open-menu').trigger('click');

        siteGutter = 0;

        return false;

    });

    $(document).mouseup(function (e){
        var popup = $('.js-section-next-menu');
        if (!popup.is(e.target)
            && popup.has(e.target).length === 0) {
            $('.js-open-menu').removeClass('is-active');
            $('.js-site-navigate').removeClass('is-active');
        }
    });

});

$( function() {

    $(document).on('click' , '.js-open-section-next-menu' , function() {

        $(this).toggleClass('is-active');

        return false

    })

    $(document).mouseup(function (e){
        var popup = $('.js-section-next-menu');
        if (!popup.is(e.target)
            && popup.has(e.target).length === 0) {
            $('.js-open-section-next-menu').removeClass('is-active');
        }
    });

});