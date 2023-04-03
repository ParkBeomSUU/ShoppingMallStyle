$(function () {
    var sw = $('.sub-slide > a').width();
    var scnt = $('.sub-slide > a').length - 1;
    $('.sub-slide > a').each(function (index) {
        $(this).css({ left: index * sw, transform: 'translateX(-50%)' });
    });
    let idx = 1;
    $(".count").text("01");
    setInterval(function () {
        idx == scnt+1 ? idx = 1 : idx++;
        if(idx < 10){
            $(".count").text("0"+idx);    
        }else{

            $(".count").text(idx);
        }
        $('.sub-slide > a').each(function (index) {
            $(this).animate({
                left: '-=' + sw
            });
            if (parseInt($(this).css('left')) < 0) {
                $(this).delay(400).animate({ left: scnt * sw - sw }, 0);
            }
        });
    }, 3000);









    $("#gnb > li:first-child, .mback").hover(function () {
        $(".mback").stop().slideToggle();
    }, function () {
        $(".mback").stop().slideToggle();
    });

    $('.alphabat>li').click(function () {
        var group = $(this).text();
        $('.brand-menu>li').each(function () {
            if (group == 'ALL') {
                $(this).show();
            } else if ($(this).attr('data-group') == group) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    $(".fa-user").click(function(){
        $("#user-menu").fadeToggle();
    })
    $(".fa-close").click(function(){
        $("#user-menu").fadeOut();
    });



    $('#item-gallery').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});

});