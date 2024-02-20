$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });

    $(".buttonicon").click(function(){
        let idx = $(this).index();

        $(".buttonicon").removeClass("pix1");
        $(this).addClass("pix1");


        $(".slide").hide();
        $(".slide").eq(idx).fadeIn();
    })

    if (window.matchMedia("(max-width: 767px)").matches) { 

        $(".buttonicon2").click(function(){
            let idx = $(this).index();
    
            $(".buttonicon2").removeClass("pix1");
            $(this).addClass("pix1");
            
            let move = -100 *idx;
    
            $(".modellist,.modellist3,.modellist4").animate({marginLeft:`${move}%`},500);
        });
   
   } else if (window.matchMedia("(min-width: 768px) and (max-width: 1359px)").matches) { 
   
    $(".buttonicon2").click(function(){
        let idx = $(this).index();

        $(".buttonicon2").removeClass("pix1");
        $(this).addClass("pix1");
        
        let move = -50 *idx;

        $(".modellist,.modellist3,.modellist4").animate({marginLeft:`${move}%`},500);
    });
   
    }else{
        $(".buttonicon2").click(function(){
            let idx = $(this).index();
    
            $(".buttonicon2").removeClass("pix1");
            $(this).addClass("pix1");
            
            let move = -33.33*idx;
    
            $(".modellist,.modellist3,.modellist4").animate({marginLeft:`${move}%`},500);
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
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
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


$(function(){
    $(".modellist").not(':first').hide();

    $("#modelsearch").change(function(){
        let idx = $(this).prop('selectedIndex')
        console.log(idx)

        $(".modellist").hide();
        $(".modellist").eq(idx).fadeIn();         
    });
})


