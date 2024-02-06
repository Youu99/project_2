$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });
    
});

$(window).scroll(function(){
    let wsc = $(this).scrollTop();
    console.log(wsc)

    $("#sub_page_img").css("opacity",1-(900/wsc)/1),
    $("#pc").css("opacity",(1400-wsc)/500),
    $("#p_pc").css("opacity",1-(900/wsc)/100)
    
})

