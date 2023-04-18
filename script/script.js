$(function () {
    var sw = $('.sub-slide > a').width(); //슬라이더 넓이 저장
    var scnt = $('.sub-slide > a').length - 1; //슬라이더 갯수 -1 저장
    $('.sub-slide > a').each(function (index) {
        $(this).css({ left: index * sw, transform: 'translateX(-50%)' });
    });
    // : idx 변수에 1을 할당하고, count 클래스의 텍스트를 "01"로 설정합니다.
    let idx = 1; // idx변수를 1로 초기화
    $(".count").text("01"); //요소들을 01로 초기화
    setInterval(function () {
        idx == scnt+1 ? idx = 1 : idx++; //1이면 01로 갱신
        if(idx < 10){//10보다 작으면 0과 함께 텍스트를 갱신, 그렇지 않으면 idx값으로 갱신
            $(".count").text("0"+idx);    
        }else{

            $(".count").text(idx);
        }
        //각 슬라이더 반복 실행
        $('.sub-slide > a').each(function (index) {
            $(this).animate({
                left: '-=' + sw
            });
            //만약 슬라이드의 left 값이 0보다 작으면 다음 코드를 실행합니다.
            if (parseInt($(this).css('left')) < 0) {
                //슬라이더 보인것 맨뒤로 이동
                $(this).delay(400).animate({ left: scnt * sw - sw }, 0);
            }
        });
    }, 3000);








// jQuery 셀렉터를 사용하여 id가 gnb인 요소의 첫 번째 자식 li 요소와 mback 클래스를 가진 요소를 선택
    $("#gnb > li:first-child, .mback").hover(function () {
        $(".mback").stop().slideToggle();
    }, function () {
        $(".mback").stop().slideToggle();
    });
//알파벳 리스트 클릭시 콜백 함수 실행
    $('.alphabat>li').click(function () {
        var group = $(this).text(); // 클릭한 리스트 아이템에서 텍스트 읽어와 그룹 변수에저장
        $('.brand-menu>li').each(function () {//리스트 순회
            if (group == 'ALL') {//올이면 올 보여주기
                $(this).show();
            } else if ($(this).attr('data-group') == group) {
                $(this).show();//그렇지 않으면 데이터 그룹이 스룹 변수에 저장된 값과 같으면 리스트 보여줌
            } else {
                $(this).hide();//숨김
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
        slidesToShow: 6, //보여질 슬라이드 이미지의 갯수
        slidesToScroll: 1, //한번에 스크롤될 슬라이드 이미지 개수
        autoplay: true, //자동 재생
        autoplaySpeed: 2000, //자동 재생이 되는 간격 2초마다 
    });

//그린 소코 프로덕션 라이브러리
    gsap.registerPlugin(ScrollTrigger); // 스크롤 플러그인 등록
gsap.to('progress', {
  value: 100, //속성값 지정
  ease: 'none', //애니메이션 속도 유지
  scrollTrigger: { scrub: 0.3 } // 스크롤 이벤트와 애니메이션 속도 비율 조정
});

});