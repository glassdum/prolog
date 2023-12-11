$(function(){
    // $('.allmenu_wrap').hide();
    $('.gnb').mouseenter(function(){
        $('.headerwrap').stop().animate({'height':320},200)
        $('.depth2').show();
    })
    $('.gnb').mouseleave(function(){
        $('.headerwrap').stop().animate({'height':70},200)
        $('.depth2').hide();
    })
    $('.slider').slick({
        autoplay:true,
        fade:true,
        dots:false,
        arrows:false
    })
    // footer family site
    $('.btn_busin').click(function(){
        $('.left_family').toggle();
        $(this).toggleClass('on');
        $('.right_family').hide();
        $('.btn_corp').removeClass('on');

    })
    $('.btn_corp').click(function(){
        $('.right_family').toggle();
        $(this).toggleClass('on');
        $('.left_family').hide();
        $('.btn_busin').removeClass('on');
    })
    $('header>.inner>.util>.first>a').click(function(){
        $('header>.inner>.util>.first>.search_form').stop().slideToggle(250);
    })
    $('header>.inner>.util>.first>.search_form').mouseleave(function(){
        $(this).stop().slideUp(250);
    })
    $('.util>li:last-child').click(function(){
        $('.allmenu_wrap').css('width','100%');
        // $('.allmenu_slide').show();
    })
    $('.btn_close').click(function(){
        $('.allmenu_wrap').css('width',0);
    })
    $('.allmenu_slide').slick({
        dots:true,
        arrows:false,
        autoplay:true,
    })
    let change = true;
    $('.stop_slide').click(function(){
        if(change == true){
            $(this).addClass('on')
            $('.allmenu_slide').slick('slickPause')
            change = false
        }else{
            $(this).removeClass('on')
            $('.allmenu_slide').slick('slickPlay')
            change = true
        }
    })
    $('.depth4_menu').mouseenter(function(){
        $('.depth4').stop().slideDown(200)
    })
    $('.depth4').mouseleave(function(){
        $(this).stop().slideUp(200)
    })
})