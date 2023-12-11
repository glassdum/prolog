new fullpage('#fullpage',{
	autoScrolling:true,
	scrollHorizontally: true,
    scrollingSpeed: 1000,
    navigation:true,
    navigationPosition:'left',
    anchors:['num0', 'num1', 'num2', 'num3'],
})


let span = document.getElementsByClassName('fp-sr-only');

console.log(span);

span[0].innerHTML = `HOME`
span[1].innerHTML = `PROFILE`
span[2].innerHTML = `WORK`
span[3].innerHTML = `CONTACT`

function section0(){
    anime({
        targets: '.name2 path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        delay: 3000,
        direction: 'alternate',
        loop: false
    });
    setTimeout(function(){
        $('.name1').css({'opacity':1})
    },5001);
    setTimeout(function(){
        $('.name2').css({'opacity':0})
    },5001);
    setTimeout(function(){
        $('.line').css({'width':'calc(50% - 197px)'})
    },2800);
    setTimeout(function(){
        $('.cover').fadeOut(500)
    },2500)
}
section0();


$('.navi_bar li').click(function(){
    $(this).addClass('on').siblings().removeClass('on')
    let num = $(this).index();
    $('.main ul').eq(num).addClass('active').siblings().removeClass('active')
})
$('.main ul li').mouseenter(function(){
    $(this).find('p').stop().fadeIn(300).css({'display':'flex'})
})
$('.main ul li').mouseleave(function(){
    $(this).find('p').stop().fadeOut(300)
})

$('.main .cording li').click(function(){
    let cordingnum = $('.main .cording li');
    let cnlength = cordingnum.length;
    let num = $(this).index();
    $('.sub1').stop().fadeIn();
    $('.sub1 .cording li').eq(num).show();
    $('.right').click(function(){
        if(num<cnlength-1){
            $('.sub1 .cording li').eq(num).stop().fadeOut();
            num++;
            $('.sub1 .cording li').eq(num).stop().fadeIn();
        }else{
            $('.sub1 .cording li').eq(num).stop().fadeOut();
            num = 0;
            $('.sub1 .cording li').eq(num).stop().fadeIn();
        }
    })
    $('.left').click(function(){
        if(num>0){
            $('.sub1 .cording li').eq(num).stop().fadeOut();
            num--;
            $('.sub1 .cording li').eq(num).stop().fadeIn();
        }else{
            $('.sub1 .cording li').eq(num).stop().fadeOut();
            num = cnlength - 1;
            $('.sub1 .cording li').eq(num).stop().fadeIn();
        }
    })
    $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
    console.log('number')
})
$('.main .design li').click(function(){
    let designnum = $('.main .design li');
    let dnlength = designnum.length;
    let num = $(this).index();
    $('.sub2').stop().fadeIn();
    $('.sub2 .design li').eq(num).show();
    $('.right').click(function(){
        if(num<dnlength-1){
            $('.sub2 .design li').eq(num).stop().fadeOut();
            num++;
            $('.sub2 .design li').eq(num).stop().fadeIn();
        }else{
            $('.sub2 .design li').eq(num).stop().fadeOut();
            num = 0;
            $('.sub2 .design li').eq(num).stop().fadeIn();
        }
    })
    $('.left').click(function(){
        if(num>0){
            $('.sub2 .design li').eq(num).stop().fadeOut();
            num--;
            $('.sub2 .design li').eq(num).stop().fadeIn();
        }else{
            $('.sub2 .design li').eq(num).stop().fadeOut();
            num = dnlength - 1;
            $('.sub2 .design li').eq(num).stop().fadeIn();
        }
    })
    $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
})
$('.close').click(function(){
    $('.sub').stop().fadeOut(); 
    $('.sub li').fadeOut();
    $('body').off('scroll touchmove mousewheel');
})
$(function(){
    $('.dr .link1 a').click(function(){
        window.open("./making/pc,mobile/pc/DLe&c/26_derim/index.html",'_blank')
    })
    $('.dr .link2 a').click(function(){
        window.open("./making/pc,mobile/pc/DLe&c/26_derim/ceo.html",'_blank')
    })
    $('.bj .link1 a').click(function(){
        window.open("./making/pc,mobile/pc/ben&jerry's/making_with_ys/index.html",'_blank')
    })
    $('.bj .link2 a').click(function(){
        window.open("./making/pc,mobile/pc/ben&jerry's/making_with_ys/product_detail.html",'_blank')
    })
    $('.bj .link3 a').click(function(){
        window.open("./making/pc,mobile/pc/ben&jerry's/making_with_ys/process.html",'_blank')
    })
    $('.wd p a').click(function(){
        window.open("./making/js/api/weather_api/index.html", "_blank");
    })
    $('.lm p a').click(function(){
        window.open("./making/responsive/lafuma/08_lafuma/index.html",'_blank')
    })
    $('.tdl p a').click(function(){
        window.open("./making/js/todo_list/index.html",'_blank')
    })
    $('.lc .link1 a').click(function(){
        window.open("./making/ui,ux/lottecinema/pc.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.lc .link2 a').click(function(){
        window.open("./making/ui,ux/lottecinema/tablet.jpg",'_blank','menubar=no, toolbar=no, width=767, height=1000')
    })
    $('.lc .link3 a').click(function(){
        window.open("./making/ui,ux/lottecinema/mobile.jpg",'_blank','menubar=no, toolbar=no, width=375, height=1000')
    })
    $('.pi_dwm .link1 a').click(function(){
        window.open("./making/photo,illust/dancewithme/poster008_mockup.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_dwm .link2 a').click(function(){
        window.open("./making/photo,illust/dancewithme/dancewithme_origin.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_nt .link1 a').click(function(){
        window.open("./making/photo,illust/natureintactly/poster007_mockup.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_nt .link2 a').click(function(){
        window.open("./making/photo,illust/natureintactly/natureintactly_mockup_origin.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_oe .link1 a').click(function(){
        window.open("./making/photo,illust/ooahChecklist/poster006_mockup.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_oe .link2 a').click(function(){
        window.open("./making/photo,illust/ooahChecklist/ooah_origin.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_di .link1 a').click(function(){
        window.open("./making/photo,illust/textdesign/poster004_mockup.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_di .link2 a').click(function(){
        window.open("./making/photo,illust/textdesign/text001_origin.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
})