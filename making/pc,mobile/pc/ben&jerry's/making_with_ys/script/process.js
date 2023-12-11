$(function(){
    $('.menu>li>a').mouseenter(function(){
        $('header').stop().animate({'height':220},50);
        $('header').css({'background':'#6DCDEC'});
        $('.left_inner .menu>li>a').css({'color':'#fff'});
        $('.right_inner button svg').css({'fill':'#fff'});
        $('.left_inner h1 a').css({'background':'url(images/logo/logo2.png)'})
        $('.left_inner h1 a').css({'background-size':'cover'})
    });
    $('header').mouseleave(function(){
        $('header').stop().animate({'height':70},10);
        $(this).css({'background':'#fff'})
        $('.left_inner .menu>li>a').css({'color':'#333'});
        $('.right_inner button svg').css({'fill':'#333'});
        $('.left_inner h1 a').css({'background':'url(images/logo/logo.png)'})
        $('.left_inner h1 a').css({'background-size':'cover'})
    });
    $(window).scroll(function(){
        let num = $(document).scrollTop();
        console.log(num);
        if(num < 232){
            
        } else if (num >= 232 && num <= 3300){
            $('.tit_box figure').css({'opacity':1})
            $('.process_list figure').css({'opacity':1})
            $('.tit_box figure').css({'top':num + 245});
            $('.process_list figure').css({'top':num - 610});
        } else {
            $('.tit_box figure').css({'opacity':0})
            $('.process_list figure').css({'opacity':0})
        };

        if(num >= 700){
            $('.tank .pr_img').css({'opacity':1,'right':'-75px'})
        };
        if(num >= 1355){
            $('.sterilization .pr_img').css({'opacity':1,'left':'-75px'})
        };
        if(num >= 1675){
            $('.keep .pr_img').css({'opacity':1,'right':'-75px'})
        };
        if(num >= 2175){
            $('.chunk .pr_img').css({'opacity':1,'left':'-75px'})
        };
        if(num >= 2875){
            $('.pigment .pr_img').css({'opacity':1,'right':'-75px'})
        };
    })
});