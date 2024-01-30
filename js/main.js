$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });

    $(".buttonicon").click(function(){
        let idx = $(this).index();

        $(".buttonicon").removeClass("pix");
        $(this).addClass("pix");


        $(".slide").hide();
        $(".slide").eq(idx).fadeIn();
    })

    $(".buttonicon").click(function(){
        let idx = $(this).index();

        $(".buttonicon").removeClass("pix1");
        $(this).addClass("pix1");
        
        let move = -33.33*idx;

        $(".modellist,.modellist3,.modellist4").animate({marginLeft:`${move}%`},800);
    });
});

$(function(){
    $("#hamburger-1").click(function(){
        $("#popup").slideToggle(400, function(){
            if($('#popup').css('display') == 'none'){
                $('nav').css('position','fixed')
                $('#wrap').css({"height":"auto","overflow":"visible"})
            }else{
                $('nav').css('position','static')
                $('#wrap').css({"height":1200,"overflow":"hidden"})
            }
        })
       
    })
 
})

