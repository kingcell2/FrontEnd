$(function () {
    $(window).scroll(function () {
        const currentPos = $("html").scrollTop();
        if (currentPos > 400) {
            $("#btn-totop").fadeIn();
        } else {
            $("#btn-totop").fadeOut();
        }
    });

})