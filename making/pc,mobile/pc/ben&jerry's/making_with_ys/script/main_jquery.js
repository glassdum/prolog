$(function(){
    $('.list_menu li').click(function(){
        $('.list_menu li').removeClass('on')
        $(this).addClass('on')
        let num = $(this).index();
        console.log(num)
        $('.product>div').hide();
        $('.product>div').eq(num).show();
    });
    $('.menu>li>a').mouseenter(function(){
        $('header').stop().animate({'height':220},50);
        $('header').css({'background':'#6DCDEC'});
    });
    $('header').mouseleave(function(){
        $('header').stop().animate({'height':70},10);
        $(this).css({'background':'none'})
    });
    $('.product_list ul li a').click(function(){
        $(this).children().addClass('on').parent().parent().siblings().children().children().removeClass('on');
    })
    $('.listno1').click(function(){
        $('.ice_cream1').show()
        $('.ice_cream2').hide()
    })
    $('.listno2').click(function(){
        $('.ice_cream2').show()
        $('.ice_cream2').css({'display':'flex'})
        $('.ice_cream1').hide()
    })
    $('.slide_images').slick({
        autoplay:true,
        fade:true,
        dots:true,
        arrows:false,
    },3000)
    $('.ice_cream1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.ice_cream2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.slide_page').slick({
        infinite: true,
        autoplay:false,
        dots:true,
        arrows:true
    });

    $('.product_list2 li').click(function(){
        let num = $(this).index()
        $(this).addClass('on').siblings().removeClass('on')
        $('.product2_box > div').removeClass('active')
        $('.product2_box > div').eq(num).addClass('active')
    })
});