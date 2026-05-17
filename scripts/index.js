// 선택자
const headerSearch = document.querySelector('.header-search');
const searchOpen = document.querySelector('.search-open');
const searchInput = document.querySelector('#headerSearch');

const gnbOpenBtn = document.querySelector(".gnb-open-btn");
const gnbBox = document.querySelector(".gnb-box");
const mainMenus = document.querySelectorAll("#gnb .main");


// 헤더 통합검색 활성화
searchOpen.addEventListener('click', function () {
    headerSearch.classList.add("on");
    searchInput.focus();
});


/* 데스크탑 / 모바일 모드 변경 */
function GnbMode() {
    const browserWidth = window.innerWidth;

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


/* 브라우저 리사이즈 시 모드 변경 */
window.addEventListener("resize", GnbMode);


/* 모바일 메뉴 토글 */
gnbOpenBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (gnbBox.classList.contains("desktop")) return;

    gnbBox.classList.toggle("show");

    if (gnbBox.classList.contains("show")) {
        gnbOpenBtn.classList.add("on");
    } else {
        gnbOpenBtn.classList.remove("on");
    }
});


/* 모바일 카테고리 선택 */
mainMenus.forEach(function (main) {
    const title = main.querySelector(".tit");

    title.addEventListener("click", function (e) {
        if (gnbBox.classList.contains("desktop")) return;

        e.preventDefault();

        mainMenus.forEach(function (item) {
            item.classList.remove("on");
        });

        main.classList.add("on");
    });
});