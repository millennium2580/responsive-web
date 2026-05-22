// 선택자
const headerSearch = document.querySelector('.header-search');
const searchOpen = document.querySelector('.search-open');
const searchInput = document.querySelector('#headerSearch');
const gnbBox = document.querySelector(".gnb-box");
const gnbOpenBtn = document.querySelector(".gnb-open-btn");
const main = document.querySelectorAll(".main");
const sub = document.querySelectorAll(".sub");

const num = document.querySelectorAll(".page-num-box .num");
const prevBtn = document.querySelector(".page-num-box .prev");
const nextBtn = document.querySelector(".page-num-box .next");
const firstBtn = document.querySelector(".page-num-box .first");
const lastBtn = document.querySelector(".page-num-box .last");


// GNB
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

    /* 모바일 카테고리 선택 */
    main.forEach(function (m) {
        const title = m.querySelector(".tit-gnb");

        title.addEventListener("click", function (e) {
            if (gnbBox.classList.contains("desktop")) return;

            e.preventDefault();

            main.forEach(function (item) {
                item.classList.remove("on");
            });

            m.classList.add("on");
        });
    });

    /* 리사이즈 대응해서 GNB 모드 적용 */
    let resizeTimer;

    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {
            GnbMode();
        }, 200);
    });
// GNB

// 페이지번호 
    let start = 0;

    showPage();

    // 숫자 클릭
    for (let i = 0; i < num.length; i++) {
        num[i].addEventListener("click", function () {

            for (let j = 0; j < num.length; j++) {
                num[j].classList.remove("on");
            }

            this.classList.add("on");
        });
    }

    // 다음
    nextBtn.addEventListener("click", function () {
        if (start < 5) {
            start += 5;
            showPage();
        }
    });

    // 이전
    prevBtn.addEventListener("click", function () {
        if (start > 0) {
            start -= 5;
            showPage();
        }
    });

    // 맨뒤
    firstBtn.addEventListener("click", function () {
        if (start > 0) {
            start -= 5;
            showPage();
        }
    });

    // 맨앞
    lastBtn.addEventListener("click", function () {
        if (start < 5) {
            start += 5;
            showPage();
        }
    });

    // 페이지 보여주기
    function showPage() {
        for (let i = 0; i < num.length; i++) {
            num[i].style.display = "none";
            num[i].classList.remove("on");
        }

        for (let i = start; i < start + 5; i++) {
            if (num[i]) {
                num[i].style.display = "";
            }
        }

        if (num[start]) {
            num[start].classList.add("on");
        }
    }

// 페이지번호 - end


// 탭
const subTab = document.querySelector(".sub-tab");
const subTabPrev = subTab.querySelector(".prev");
const subTabNext = subTab.querySelector(".next");
const subTabBtns = document.querySelectorAll(".sub-tab-btn"); // li가 둘 이상, querySelectorAll 사용
const tabDetails = document.querySelectorAll(".tab-detail") // 둘 이상, querySelectorAll 사용

// 탭영역
subTabBtns.forEach(function(btn, inx){
    btn.addEventListener("click", function(b){
        b.preventDefault();
        subTabBtns.forEach(function(b){
            b.classList.remove("on")
        })
        subTabBtns[inx].classList.add("on");
    
        tabDetails.forEach(function(b){
            b.classList.remove("on")
        })
        tabDetails[inx].classList.add("on")
    })
})

// subTabPrev.addEventListener("click", function(b))