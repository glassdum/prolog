$(function(){
    // 메인 슬라이드
    $('.visual').slick({
        autoplay:true,
        dots:true,
    });

    // 페밀리사이트
    $('.family').click(function(){
        $('.family_list').stop().slideToggle();
    });

    // roll over
    $('.collection div a').mouseenter(function(){
        let pre_src = $(this).find('img').attr('src');
        let next_src = pre_src.replace('ot','ov');
        console.log(next_src);
        $(this).find('img').attr('src',next_src);
    });
    $('.collection div a').mouseleave(function(){
        let pre_src = $(this).find('img').attr('src');
        let next_src = pre_src.replace('ov','ot');
        console.log(next_src);
        $(this).find('img').attr('src',next_src);
    });

    // roll over2
    $('.sns li a').mouseenter(function(){
        $(this).find('.cover').show();
    });
    $('.sns li a').mouseleave(function(){
        $(this).find('.cover').hide();
    });

    // 중요 //
    // 슬라이드 이미지 교체
    // 브라우저 크기를 조정하게 되면 함수를 실행시켜라.
    $(window).resize(function(){
        let num = $(this).width();
        console.log(num)
        if(num <= 767){
            $('.visual .slick-prev, .visual .slick-next').hide();
            $('.visual .visual1 img').attr('src','images/m_visual_a.jpg');
            $('.visual .visual2 img').attr('src','images/m_visual_b.jpg');
            $('.collection .collect1 img').attr('src','images/m_catalogue.jpg');
            $('.collection .collect2 img').attr('src','images/m_video.jpg');
            $('.collection .collect3 img').attr('src','images/m_product.jpg');
            $('.collection .collect4 img').attr('src','images/m_athletic.jpg');
            $('.collection .collect5 img').attr('src','images/m_camping.jpg');
        }else{
            $('.visual .slick-prev, .visual .slick-next').show();
            $('.visual .visual1 img').attr('src','images/visual_a.jpg');
            $('.visual .visual2 img').attr('src','images/visual_b.jpg');
            $('.collection .collect1 img').attr('src','images/cata_ot.jpg');
            $('.collection .collect2 img').attr('src','images/video_ot.jpg');
            $('.collection .collect3 img').attr('src','images/product_ot.jpg');
            $('.collection .collect4 img').attr('src','images/athletic_ot.jpg');
            $('.collection .collect5 img').attr('src','images/camping_ot.jpg');
        };
    });

    // 이벤트 발생 시키지 않고 스크립트를 바로 실행시켜라.
    let num = $(this).width();
    console.log(num)
    if(num <= 767){
        $('.visual .slick-prev, .visual .slick-next').hide();
        $('.visual .visual1 img').attr('src','images/m_visual_a.jpg');
        $('.visual .visual2 img').attr('src','images/m_visual_b.jpg');
        $('.collection .collect1 img').attr('src','images/m_catalogue.jpg');
        $('.collection .collect2 img').attr('src','images/m_video.jpg');
        $('.collection .collect3 img').attr('src','images/m_product.jpg');
        $('.collection .collect4 img').attr('src','images/m_athletic.jpg');
        $('.collection .collect5 img').attr('src','images/m_camping.jpg');
    }else{
        $('.visual .slick-prev, .visual .slick-next').show();
        $('.visual .visual1 img').attr('src','images/visual_a.jpg');
        $('.visual .visual2 img').attr('src','images/visual_b.jpg');
        $('.collection .collect1 img').attr('src','images/cata_ot.jpg');
        $('.collection .collect2 img').attr('src','images/video_ot.jpg');
        $('.collection .collect3 img').attr('src','images/product_ot.jpg');
        $('.collection .collect4 img').attr('src','images/athletic_ot.jpg');
        $('.collection .collect5 img').attr('src','images/camping_ot.jpg');
    };

    // 모바일 버튼 클릭하면 모바일 메뉴 출현
    $('.m_btn').click(function(){
        $('.m_cover').fadeIn();
        $('.menu_box').animate({'left':0},300);
        // 스크롤바는 
        $('body,html').css('overflow','hidden');
        $('.menu_box').css('overflow','auto');
    });
    // 모바일 메뉴 종료
    $('.m_cover').click(function(){
        $('.m_cover').fadeOut();
        $('.menu_box').animate({'left':'-100%'},300);
        $('body,html').css('overflow','auto');
    });

    // 아코디언메뉴
    $('.m_gnb>li>a').click(function(){
        $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp();
    })
});