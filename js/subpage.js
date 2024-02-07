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
    // $(".inside_box_item p").css("opacity",(9400/wsc)*2)
    // $(".inside_box2,.inside_box1").css("background-color","black")
    
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
            
        })
    })

})

