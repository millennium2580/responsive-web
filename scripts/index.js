// 선택자
const headerSearch = document.querySelector('.header-search');
const searchOpen = document.querySelector('.search-open');
const searchInput = document.querySelector('#headerSearch');

const gnbOpenBtn = document.querySelector(".gnb-open-btn");
const gnbBox = document.querySelector(".gnb-box");

// 헤더 통합검색 활성화
searchOpen.addEventListener('click', function () {
    headerSearch.classList.add("on");
    searchInput.focus();
});
// 마우스가 영역을 벗어나면 다시 꺼지게?

/* 데스크탑 버전으로 변경 */
const browserWidth = window.innerWidth;
function GnbMode() {

    if (browserWidth >= 880) {
        gnbBox.classList.add("desktop");
        gnbOpenBtn.classList.add("desktop");

        gnbBox.classList.remove("show");
        gnbOpenBtn.classList.remove("on");
    } else {
        gnbBox.classList.remove("desktop");
        gnbOpenBtn.classList.remove("desktop");
    }
}


/* 초기 실행 */
GnbMode();


/* 모바일 메뉴 토글 */
gnbOpenBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (gnbBox.classList.contains("desktop")) return;

    gnbBox.classList.toggle("show");

    if(gnbBox.classList.contains("show")){
        gnbOpenBtn.classList.add("on");
    } else {
        gnbOpenBtn.classList.remove("on");
    }
});


// window 브라우저 리사이즈시 동작 변화를 주고 싶을 때
// - resize() : 1px만 달라져도 실행됨 > 성능에 영향을 줌 >> 브라우저 과부화, 모바일일 때 배터리 과사용 및 성능 이슈
