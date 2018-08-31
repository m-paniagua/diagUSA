$(document).ready(function () {
    AOS.init({
        once: true,
        duration: 3000,
        ease: 'ease-out'
    })

    var scroll_start = 0;
    var startchange = $('#about');
    var links = $('.navbar-scroll .navbar-nav .nav-link')
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top - 90) {
                $(".navbar-scroll").css({ 'background-color': '#fff', 'box-shadow': '0 4px 6px 0 hsla(0, 0%, 0%, .2)' });
                $('.navbar').removeClass('navbar-dark').addClass('navbar-light');
                // links.removeClass('light').addClass('dark');
                $('#logo').attr('src', './img/logo.gif');
            } else {
                $('.navbar-scroll').css({ 'background-color': 'transparent', 'box-shadow': 'none' });
                $('.navbar').removeClass('navbar-light').addClass('navbar-dark');
                // links.removeClass('dark').addClass('light');
                $('#logo').attr('src', './img/logo2.gif');
            }
        });
    }
    // $(window).scroll(function () {
    //     // checks if window is scrolled more than viewport, adds/removes solid class to navbar and changes links color
    //     if ($(this).scrollTop() > 400) {
    //         $(".navbar-scroll").css({ 'background-color': '#fff', 'box-shadow': '0 4px 6px 0 hsla(0, 0%, 0%, .2)' });
    //         $('.navbar').removeClass('navbar-dark').addClass('navbar-light');
    //         // links.removeClass('light').addClass('dark');
    //         $('#logo').attr('src', './img/logo.gif');
    //     } else {
    //         $('.navbar-scroll').css({ 'background-color': 'transparent', 'box-shadow': 'none' });
    //         $('.navbar').removeClass('navbar-light').addClass('navbar-dark');
    //         // links.removeClass('dark').addClass('light');
    //         $('#logo').attr('src', './img/logo2.gif');
    //     }
    // });

});