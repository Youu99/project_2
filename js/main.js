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

    if (window.matchMedia("(max-width: 767px)").matches) { 

        $(".buttonicon").click(function(){
            let idx = $(this).index();
    
            $(".buttonicon").removeClass("pix1");
            $(this).addClass("pix1");
            
            let move = -100 *idx;
    
            $(".modellist,.modellist3,.modellist4").animate({marginLeft:`${move}%`},800);
        });
   
   } else if (window.matchMedia("(min-width: 768px) and (max-width: 1359px)").matches) { 
   
    $(".buttonicon").click(function(){
        let idx = $(this).index();

        $(".buttonicon").removeClass("pix1");
        $(this).addClass("pix1");
        
        let move = -50 *idx;

        $(".modellist,.modellist3,.modellist4").animate({marginLeft:`${move}%`},800);
    });
   
    }else{
        $(".buttonicon").click(function(){
            let idx = $(this).index();
    
            $(".buttonicon").removeClass("pix1");
            $(this).addClass("pix1");
            
            let move = -33.33*idx;
    
            $(".modellist,.modellist3,.modellist4").animate({marginLeft:`${move}%`},800);
        });
    }
   
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

$(function(){
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   },
          loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
        },
      });
})

