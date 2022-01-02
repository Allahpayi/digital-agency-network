$(document).ready(function () {
    $("nav .right-menu .menu-bottom li:last-child input").focus(function (e) {
        e.preventDefault();
        $(this).animate({
            'width': '100%',
        }, 500);

    });
    $("nav .right-menu .menu-bottom li:last-child input").blur(function (e) {
        e.preventDefault();
        $(this).animate({
            'width': '60%',
        }, 500);

    });
    $('#region').change(function (e) {
        e.preventDefault();
        $('#city').removeAttr('disabled');
    });
    $(".bars").click(function (e) {
        e.preventDefault();
        $('nav .right-menu ').slideToggle(1000);

    });

    $(document).scroll(function (e) {
        let scrollTop = $(window).scrollTop();
        let documentHeight = $(document).height();
        let windowHeight = $(window).height();
        let progressWidth = (scrollTop / (documentHeight - windowHeight)) * 100;
        $(".progress").css("width", progressWidth + "%");
    });

});