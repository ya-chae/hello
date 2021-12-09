$(function(){

    // 내비게이션 메뉴 클릭 시 부드럽게 해당 위치로 이동
    $('.scroll').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 600);
    });

    // section 이 화면 가득하게 만드는 js 
    // 브라우저 창의 크기에 맞춰 너비,높이 조정
    $(window).resize(function(){
        $('.container').width($(window).width()).height($(window).height());
    });

    // 패럴랙스 스크롤링 효과 : 옵션은 friction만 존재 (0~1사이 소수로 표시)
    // 0이면 배경 이미지가 콘텐츠를 따라 스크롤
    // 1이면 배경이 완전히 고정되어 콘텐츠만 스크롤
    $('.bg-holder').parallaxScroll({
        friction:0.3
    });

})