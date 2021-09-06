$(document).ready(function () {

    $('.close-bars').on('click', function (e) {
        $('.navigation-container').hide();
        $('.navbar').show();
        $('body').css('overflow', 'auto');
    });

    $('.menu-link, #bars').on('click', function (e) {
        $('.navigation-container').show();
        $('.navbar').hide();
        $('body').css('overflow', 'hidden');
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').show();
        } else {
            $('.navbar').hide();
        }
    });

});
