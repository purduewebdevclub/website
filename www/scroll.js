$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() !== 0) {
            var nav = $(".navbar");
            nav.css("background-color", "white");
            $("a.white").removeClass("white").addClass("gray");
        } else {
            var nav = $(".navbar");
            nav.css("background-color", "transparent");
            $("a.gray").removeClass("gray").addClass("white");
        }
    });
});
