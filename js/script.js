$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // AOS.init({
    //     once: true,
    //     duration: 3000,
    //     ease: 'ease-out'
    // })

    // var scroll_start = 0;
    // var startchange = $('#jumbotron');
    // var links = $('.navbar-scroll .navbar-nav .nav-link')
    // var offset = startchange.offset();

    // if (startchange.length) {
    //     $(document).scroll(function () {
    //         scroll_start = $(this).scrollTop();
    //         if (scroll_start > offset.top) {
    //             $(".navbar-scroll").css({ 'background-color': '#fff', 'box-shadow': '0 4px 6px 0 hsla(0, 0%, 0%, .2)' });
    //             $('.navbar').removeClass('navbar-dark').addClass('navbar-light');
    //             // links.removeClass('light').addClass('dark');
    //             $('#logo').attr('src', './img/logo.gif');
    //         } else {
    //             $('.navbar-scroll').css({ 'background-color': 'transparent', 'box-shadow': 'none' });
    //             $('.navbar').removeClass('navbar-light').addClass('navbar-dark');
    //             // links.removeClass('dark').addClass('light');
    //             $('#logo').attr('src', './img/logo2.gif');
    //         }
    //     });
    // }

});