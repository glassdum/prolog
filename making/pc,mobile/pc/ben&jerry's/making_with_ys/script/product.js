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
    let h = false;
    $('.p1').click(function(){
        if(h == false){
            $('.exel').animate({'height':'112px','padding':'10px 13px'},300);
            $('.p1 span').addClass('on');
            h = true
            console.log(h)
        }else{
            $('.exel').animate({'height':0,'padding':'0px 13px'},300);
            $('.p1 span').removeClass('on')
            h = false
            console.log(h)
        }
        // $('.exel').animate({'height':'112px'},300)
    })
    $('.p2').click(function(){
        $('.allergy .detail').slideToggle()
        $('.p2 span').toggleClass('on')
    })
});