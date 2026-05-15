// 선택자
const headerSearch = document.querySelector('.header-search');
const searchOpen = document.querySelector('.search-open');
const searchInput = document.querySelector('#headerSearch');

const gnbBox = document.querySelector(".gnb-box");
const gnbOpenBtn = document.querySelector(".gnb-open-btn");

const main = document.querySelectorAll(".main");
const sub = document.querySelectorAll(".sub");


// 헤더 통합검색 활성화
searchOpen.addEventListener('click', function () {
    headerSearch.classList.add("on");
    searchInput.focus();
});
// 마우스가 영역을 벗어나면 다시 꺼지게? <-흠

// 데스크탑 버전으로 변경
function GnbMode() {
    const browserWidth = window.innerWidth;

    if (browserWidth >= 880) {
        gnbBox.classList.add("desktop");
        gnbOpenBtn.classList.add("desktop");

        gnbBox.classList.remove("show");
        gnbOpenBtn.classList.remove("on");
    } else if (browserWidth < 880) {
        gnbBox.classList.remove("desktop");
        gnbOpenBtn.classList.remove("desktop");
    }
}
GnbMode();

// 모바일 메뉴 토글
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

// 메인 카테고리 클릭
main.forEach((i) => {
    i.addEventListener("click", () => {
        main.forEach((target) => {
            target.classList.remove("on");
        })
        i.classList.add("on");
        // 데스크탑 버전일 때, 
        main.forEach
    })
});


// 리사이즈 이벤트 성능 최적화 예시
let timer; //변수지정
window.addEventListener('resize', () => {
    // 0.2초 이내에 다시 리사이즈되면 이전 타이머 취소
    clearTimeout(timer);
    
    // 0.2초 후에 실행
    timer = setTimeout(() => {
        GnbMode();
    }, 200);
});