// 4. 스크롤 이벤트
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// window는 우리가 보고있는 화면 자체
// ★lodash 외부 스크립트 라이브러리★를 통해 _.throttle() 명령을 쓸수 있도록 연결
window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY);
    //window.scrollY => 스크롤을 내릴 때 윈도우에 있는 scrollY 속성 값이 그때그때 갱신
    if (window.scrollY > 500) {
        // window창의 스크롤이 500px 초과할 경우, Badge 숨기기

        // ★ gsap 애니메이션 제어 라이브러리 ★
        // gsap.to(요소, 지속시간, 옵션{객체데이터 Key : Value}) ★★★★★★★★★★★★★★★★★
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
                // gsap 라이브러리 사용할 때 숫자데이터는 그냥 입력해도 되지만 
                //문자데이터 형식으로 입력할 때는 none이 아닌 'none'으로 따옴표와 함께 서술
        });
        // TOP 버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0 //x축(원래 위치로 이동하도록.)
        });

    } else {
        // Badge 노출
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // TOP 버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100 //x축(오른쪽으로 100px 이동하도록.)
        });

    }
}, 300));
// _.throttle(함수, 시간) : 300=0.3초 단위로 부하를 줘서 함수가 우르르 실행되는 것을 방지하는 용도


// TOP 버튼 위로이동 (scrollToPlugin)

toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, { //윈도우 창에서 0.7초 동안
        scrollTo: 0 //스크롤을 0px 위치로 이동시키겠다.
    });
});




// 5. fade-in
// 배너의 이미지 요소(.fade-in)를 시간 차를 두고 노출되도록 제어
const fadeEls = document.querySelectorAll('.visual .fade-in');
// forEach => 요소들 반복 실행 (반복할 요소, 반복할 요소의 index 넘버)
fadeEls.forEach(function(fadeEl, index) {
    // 애니메이션 라이브러리 gsap에서 지원하는 기능
    // gsap.to(요소, 지속시간, 옵션{객체데이터 Key : Value}) ★★★★★★★★★★★★★★★★★
    gsap.to(fadeEl, 1, {
        opacity: 1,
        // css에서 이미 opacity를 0으로 설정해두었음.
        delay: (index + 1) * .7 //애니메이션이 1초동안 실행될 것인데, 이것이 몇 초 뒤에 실행될 것인지
            // (index+1) => 4개의 이미지 요소가 한 번에 등장하는 것이 아닌 딜레이 설정이 되어있음.
            // index는 0부터 시작되는데 0*0.7은 0이므로 +1을 해주는 것. 그리고 html은 제로베이스드 넘버링 아니라서!
            // 따라서 0.7 > 1.4> 2.1 > 2.7 순서대로 실행
    });
});


// SWIPER
// new란 자바스크립트에서 사용하는 클래스 즉, 생성자를 의미
// new Swiper('인수인 css 클래스 선택자 작성, 옵션{객체 데이터}');
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
});

// PROMOTION SWIPER
new Swiper('.promotion .swiper-container', {
    direction: 'horizontal', //direction 기본 값이 horizontal
    slidesPerView: 3, // 한 번에 보여 줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    /* autoplay: {
         delay: 5000, //0.5초 마다. delay 기본 값은 3초
     } */
    //  pagination
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 (클릭)
    },
    navigation: {
        prevEl: '.promotion .swiper-prev', //이전 버튼을 어떤 클래스에 정의할 것인가.
        nextEl: '.promotion .swiper-next' //다음 버튼을 어떤 클래스에 정의할 것인가.
    }
});

// 배너 롤링
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


//TOGGLE
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion // =! 반대 값 즉 true가 isHidePromotion에 할당
        // false이면 true가 되고, true이면 false가 됨 ★즉, 어떤 특정 변수의 값을 지속적으로 반대값으로 전환시킴
    if (isHidePromotion) {
        // 숨김처리 (isHidePromotion이 true이면)
        promotionEl.classList.add('hide');
    } else {
        // 보임처리 (isHidePromotion이 false이면)
        promotionEl.classList.remove('hide');
    }
});
// promotion 부분이 감춰져있을 때 isHidePromotion = true / 열려있을 때 isHidePromotion = false


//youtube 아이콘 애니메이션
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) { //두번째인수 : 딜레이(지연시간), 세번째인수 : 위아래로 움직이는 크기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(
        selector,
        random(1.5, 2.5), { //위 랜덤함수에서 실행되고 반환된 값이 해당 애니메이션 스크립트에서 지속시간으로 사용
            // random(최소시간, 최대시간)
            y: size, //y축 size(매개변수, 함수호출 시 지정된 값을 불러옴)
            repeat: -1, //-1 은 무한 반복(js 속성)
            yoyo: true, //한 번 재생된 애니메이션을 다시 뒤로 재생을 해서 상하 움직임이 될 수 있는 구조
            ease: Power1.easeInOut, //조금 더 자연스러운 움직임 속성
            delay: random(0, delay) // 몇 초 뒤에 시작하겠다. random(0초, 함수호출 시 설정한 delay 인수 값)
        }); //floatingObject라는 함수가 실행될 때 밖에서 받은 selector 라는 매개변수를 첫 번째 인수로 할당
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
            triggerHook: .8 // 뷰포트 시작점 = 0 / 끝지점 1 > triggerHook 즉 고리 부분에 걸리면 다음 스크립트 .setClassToggle() 실행
        })
        .setClassToggle(spyEl, 'show') //.setClassToggle(토글할 요소, '토글할 클래스 명' )
        .addTo(new ScrollMagic.Controller()); //추가한 옵션들을 내부의 컨트롤러의 내용을 할당하여 실제로 동작할 수 있는 구조를 만들어 줌
    //Scene() : 특정 요소를 감시하는 옵션을 지정하는 메소드
    // setClassToggle() : html 클래스 속성을 넣었다 뺏다 설정
    // addTo() : scrollmagic 자바스크립트가 필요한 컨트롤러의 내용을 추가
});