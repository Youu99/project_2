$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });

    $(".buttonicon").click(function(){
        let idx = $(this).index();

        $(".buttonicon").removeClass("pix1");
        $(this).addClass("pix1");
    });
});