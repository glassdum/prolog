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

    // 배열 타이틀
    let video_tit =['Acro Seoul Forest','1915 Canakkale Bridge','Petrochemical Plant'];
    let video_p = ['시대가 흘러도 변하지 않는 가치, 아크로 서울포레스트','세계 6번째 현수교 기술자립국, 세계최고의 기술력, DL이앤씨','1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년'];
    let video_url = ['https://www.youtube.com/embed/lAJ3SGjbdr4?si=I8K_vHjcIbOM4v0B','https://www.youtube.com/embed/vM8b0CZd2Ww?si=SPW537tjn1uabL5w','https://www.youtube.com/embed/gehtA1gfXPc?si=It-5jWHUJRTIjz4d'];

    $('.btn_list .btn_close').click(function(){
        $('.modal_wrap').fadeOut();
    })

    $('.list>li').click(function(){
        let num = $(this).index();
        console.log(num);
        $('.modal_wrap').fadeIn();
        $('.tit h2').text(video_tit[num]);
        $('.tit p').text(video_p[num]);
        $('.tit iframe').attr('src',video_url[num]);
        $('.btn_list .after').click(function(){
            if(num==2){
                num=0
            }else{
                num++
            }
            $('.tit h2').text(video_tit[num]);
            $('.tit p').text(video_p[num]);
            $('.tit iframe').attr('src',video_url[num]);
        })
        $('.btn_list .before').click(function(){
            if(num==0){
                num=2
            }else{
                num--
            }
            $('.tit h2').text(video_tit[num]);
            $('.tit p').text(video_p[num]);
            $('.tit iframe').attr('src',video_url[num]);
        })
    })


})