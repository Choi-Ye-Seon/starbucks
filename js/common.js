// 1. .search div (아이콘 포함)선택 시, input 박스가 focus 되도록!

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 원래는 .search 안에서 input 요소를 찾아야 함 => ('.search input')
// 그런데 이미 위에서 .search 요소를 찾았기 때문에 중복 검색 되는 꼴임
// 따라서 이미 찾은 .search 값을 가진 searchEl에서 input 요소를 찾도록 searchEl.querySelector('input') 간결화 해줌

searchEl.addEventListener('click', function() {
    //실행명령 (input요소를 focus해라)
    searchInputEl.focus();

});

// 2. .search div 영역에 focus되면 focused 클래스를 추가 > input 요소에 placeholder value 추가
searchInputEl.addEventListener('focus', function() {
    //실행명령 (search의 input 영역이 focus되면 .search div 요소에 focused 클래스를 추가)
    searchEl.classList.add('focused');
    //input요소에 (input요소에 html 속성을 지정하겠다.)
    //searchInputEl.setAttribute('속성 이름', '실제 값(value)');
    searchInputEl.setAttribute('placeholder', '통합검색');
});


// 3. .search div 영역에 focus가 해제되면(=blur) focuse 클래스 제거 > input 요소에 placeholder value 값 제거
//blur : focus 해제
searchInputEl.addEventListener('blur', function() {
    //실행명령 (.search div 영역에 focus가 해제되면(=blur) focuse 클래스 제거)
    searchEl.classList.remove('focused');
    //input요소에 (input요소에 html 속성을 지정하겠다.)
    //searchInputEl.setAttribute('속성 이름', '실제 값(value)');
    searchInputEl.setAttribute('placeholder', '');
});


// 푸터 자동 년수 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// Date() : 현재 날짜를 뽑아낼 때 사용하는 객체
// getFullYear() : 현재 년도의 정보가 숫자 데이터로 반환됨.