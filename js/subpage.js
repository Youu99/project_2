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


    let ins1=$('.inside_box_item').eq(1).offset().top;
    let ins2=$('.inside_box_item').eq(2).offset().top;
    let ins3=$('.inside_box_item').eq(3).offset().top;
    let ins4=$('.inside_box_item').eq(4).offset().top;
    let ins5=$('.inside_box_item').eq(5).offset().top;
    let ins6=$('.inside_box_item').eq(6).offset().top;
    let ins7=$('.inside_box_item').eq(7).offset().top;
    let ins8=$('.inside_box_item').eq(8).offset().top;
    let ins9=$('.inside_box_item').eq(9).offset().top;
    if(wsc >= ins1-600){
        $('.inside_box_item').eq(0).find('p').css({opacity:0, transition: 'opacity 0.5s'});
       
    }else {
        $('.inside_box_item').eq(0).find('p').css({opacity:1, transition: 'opacity 0.5s'});
     
    }
    if(wsc >= ins2-600){
        $('.inside_box_item').eq(1).find('p').css({opacity:0, transition: 'opacity 0.5s'});
       
    }else {
        $('.inside_box_item').eq(1).find('p').css({opacity:1, transition: 'opacity 0.5s'});
     
    }
    if(wsc >= ins3-600){
        $('.inside_box_item').eq(2).find('p').css({opacity:0, transition: 'opacity 0.5s'});
       
    }else {
        $('.inside_box_item').eq(2).find('p').css({opacity:1, transition: 'opacity 0.5s'});
     
    }
    if(wsc >= ins4-600){
        $('.inside_box_item').eq(3).find('p').css({opacity:0, transition: 'opacity 0.5s'});
       
    }else {
        $('.inside_box_item').eq(3).find('p').css({opacity:1, transition: 'opacity 0.5s'});
     
    }
    if(wsc >= ins5-600){
        $('.inside_box_item').eq(4).find('p').css({opacity:0, transition: 'opacity 0.5s'});
        
    }else {
        $('.inside_box_item').eq(4).find('p').css({opacity:1, transition: 'opacity 0.5s'});
     
    }
    if(wsc >= ins6-600){
        $('.inside_box_item').eq(5).find('p').css({opacity:0, transition: 'opacity 0.5s'});
       
    }else {
        $('.inside_box_item').eq(5).find('p').css({opacity:1, transition: 'opacity 0.5s'});
     
    }
    if(wsc >= ins7-600){
        $('.inside_box_item').eq(6).find('p').css({opacity:0, transition: 'opacity 0.5s'});
       
    }else {
        $('.inside_box_item').eq(6).find('p').css({opacity:1, transition: 'opacity 0.5s'});
        $('inside_box_item').eq(6).find('div').css("background-color","black")
    }
    if(wsc >= ins8-600){
        $('.inside_box_item').eq(7).find('p').css({opacity:0, transition: 'opacity 0.5s'});
       
    }else {
        $('.inside_box_item').eq(7).find('p').css({opacity:1, transition: 'opacity 0.5s'});
     
    }
    if(wsc >= ins9-600){
        $('.inside_box_item').eq(8).find('p').css({opacity:0, transition: 'opacity 0.5s'});
       
    }else {
        $('.inside_box_item').eq(8).find('p').css({opacity:1, transition: 'opacity 0.5s'});
     
    }
    
    $(function(){
        let color= ["#A3B6D2","white","gray","darkgray","mediumpurple","slateblue","rgba(168, 17, 17, 0.836)","rgb(77, 76, 76)"]

        
        $(".colorbtn2 li").click(function(){
            let idx = $(this).index();
            $("#color li").eq(idx).siblings().fadeOut();
            $("#color li").eq(idx).fadeIn();
            $(".color_page1").css("background-color",color[idx]);
            
            if(idx==1){
                $(".colorbtn2 li").css("color","black");
                $(".colorbtn1 p").css("color","black");
            }
            // else(idx )
            // $(".colorbtn2 li").css("color","#fff");
            //     $(".colorbtn1 p").css("color","#fff");
        })
    })

    $(function(){
        $(".Gallery_img_box img").click(function(){
            $(".pupopage_pop").fadeIn();
        
        $(".popx").click(function(){
            $(".pupopage_pop").fadeOut();
        })
           
        })
    })


    $(function(){
        function prev(){
            $(".popslide li:last").prependTo(".popslide");
            $(".popslide").css({marginLeft:-1680});
            $(".popslide").stop().animate({marginLeft:0},400)
        }

        function next(){
            $(".popslide").stop().animate({marginLeft:-1680},400,function(){
                $(".popslide li:first").appendTo(".popslide");
                $(".popslide").css({marginLeft:0})
            })
        }
        $(".prev").click(function(){
            prev();
        })
        $(".next").click(function(){
            next();
        })
    })

})

