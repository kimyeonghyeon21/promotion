$(document).ready(function(){ //문서준비이벤트 시작


    //스크롤이동 애니메이션
    // $('.gnb > li > a').click(function(event){
    //     event.preventDefault(); //이전의 이벤트를 기본값
    //     x = $(this).attr("href");
    // });

    $(".gnb > li > a[href^='#']").click(function(){
        event.preventDefault();  // 기본 a링크 동작 방지
        let target = $(this.hash);
        $('html, body').animate({ scrollTop: target.offset().top }, 500);
    });

    $(".mb_list > li > a[href^='#']").click(function(){
        event.preventDefault();  // 기본 a링크 동작 방지
        let target = $(this.hash);
        $('html, body').animate({ scrollTop: target.offset().top }, 500);
    });


    //mb_menu
    $('.mb_wrap').hide();

    $('.mb').click(function(){
        $('body').css({'overflow':'hidden'});
        $('.mb_wrap').fadeIn();
    });

    $('.mb_close').click(function(){
        $('body').css({'overflow':'auto'});
        $('.mb_wrap').fadeOut();
    });


    $('.mb_cs').hide();

    $('.mb_list li:nth-of-type(5)').click(function(){
        $('.mb_cs').stop().slideToggle();
    });



    //notice_vertical
    const mv_notice = new Swiper(".mv_notice", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        loop: true,
        speed: 700, //1ch
        direction: "vertical",


    });


    $('.moon_bg').hide();

    $('.moon_light li').mouseenter(function(){
        $('.moon_bg').stop().fadeIn();
    });

    $('.moon_light li').mouseleave(function(){
        $('.moon_bg').stop().fadeOut();
    });



    $('.wave').ripples();

    $('.wave').ripples({
        resolution: 216,
        dropRadius: 20,
        perturbance: 0.01,
    });


    var scroll_slide = new Swiper(".scroll_slide", {
        direction: "horizontal",
        mousewheel: true,
        slidesPerView: 1.5,
        spaceBetween: 50,    

        centeredSlides: true,

        breakpoints: {

            768: {
                slidesPerView: 1.5,  //브라우저가 768보다 클 때
                spaceBetween: 50,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
            1400: {
                slidesPerView: 2,
                spaceBetween: 200,
            },
        },

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
    });


    //youtube 모달팝업
    $('.modal_yotube1').hide();

    $('.scroll_slide li:nth-of-type(1)').click(function(){
        $('.modal_yotube1').show();
        $('body').css({'overflow':'hidden'});
    });

    $('.modal_close1').click(function(){
        $('.modal_yotube1').hide();
        $('body').css({'overflow':'auto'});
    });


    $('.modal_yotube2').hide();

    $('.scroll_slide li:nth-of-type(2)').click(function(){
        $('.modal_yotube2').show();
        $('body').css({'overflow':'hidden'});
    });

    $('.modal_close1').click(function(){
        $('.modal_yotube2').hide();
        $('body').css({'overflow':'auto'});
    });


    $('.modal_yotube3').hide();

    $('.scroll_slide li:nth-of-type(3)').click(function(){
        $('.modal_yotube3').show();
        $('body').css({'overflow':'hidden'});
    });

    $('.modal_close1').click(function(){
        $('.modal_yotube3').hide();
        $('body').css({'overflow':'auto'});
    });


    $('.modal_yotube4').hide();

    $('.scroll_slide li:nth-of-type(4)').click(function(){
        $('.modal_yotube4').show();
        $('body').css({'overflow':'hidden'});
    });

    $('.modal_close1').click(function(){
        $('.modal_yotube4').hide();
        $('body').css({'overflow':'auto'});
    });

    
    //안내보기 모달팝업
    $('.modal_info').hide();

    $('.moon_light li:nth-child(2)').click(function(){
        $('.modal_info').show();
        $('body').css({'overflow':'hidden'});
    });

    $('.modal_close1').click(function(){
        $('.modal_info').hide();
        $('body').css({'overflow':'auto'});
    });

   
    //day 스크롤 애니메이션
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".cloud1", {
        scrollTrigger: {
            trigger: ".cloud1",
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            // markers: true,
        },
        x: -700,
        ease: "none",
        duration: 3
    });

    gsap.to(".cloud2", {
        scrollTrigger: {
            trigger: ".cloud2",
            start: "bottom bottom",
            end: "top top",
            scrub: true,
        },
        x: -100,
        ease: "none",
        duration: 3
    });

    gsap.to(".cloud3", {
        scrollTrigger: {
            trigger: ".cloud3",
            start: "bottom bottom",
            end: "top top",
            scrub: true,
        },
        x: -400,
        ease: "none",
        duration: 3
    });

    gsap.to(".cloud4", {
        scrollTrigger: {
            trigger: ".cloud4",
            start: "bottom bottom",
            end: "top top",
            scrub: true,
        },
        x: -100,
        ease: "none",
        duration: 3
    });


    //night 스크롤 애니메이션

    
    
    gsap.fromTo(".star1", {}, {
        x:1000,
        y:1300,
      scrollTrigger: {
        trigger: ".star1",
        scrub: true,
        start: "1500vw bottom",
        end: "4900vw top",
        ease: "none",
        duration: 3,
      }
    
    });

    gsap.fromTo(".star2", {}, {
        x:700,
        y:900,
      scrollTrigger: {
        trigger: ".star2",
        scrub: true,
        start: "2000vw bottom",
        end: "3000vw top",
        ease: "none",
        duration: 3,
      }
    
    });

    gsap.fromTo(".star3", {}, {
        x:350,
        y:400,
      scrollTrigger: {
        trigger: ".star3",
        scrub: true,
        start: "1000vw bottom",
        end: "1200vw top",
        ease: "none",
        duration: 3
      }
    
    });

    gsap.fromTo(".star4", {}, {
        x:700,
        y:900,
      scrollTrigger: {
        trigger: ".star4",
        scrub: true,
        start: "500vw bottom",
        end: "1200vw top",
        ease: "none",
        duration: 3
      }
    
    });
    
    

    


}); //문서준비이벤트 종료