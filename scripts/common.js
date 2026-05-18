// 선택자
const num = document.querySelectorAll(".page-num-box .num");
const prevBtn = document.querySelector(".page-num-box .prev");
const nextBtn = document.querySelector(".page-num-box .next");
const firstBtn = document.querySelector(".page-num-box .first");
const lastBtn = document.querySelector(".page-num-box .last");

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

    num[start].classList.add("on");
}


// 탭
const subTab = document.querySelector(".sub-tab");
const subTabBtns = document.querySelectorAll(".sub-tab-btn"); // li가 둘 이상, querySelectorAll 사용
const tabDetails = document.querySelectorAll(".tab-detail") // 둘 이상, querySelectorAll 사용

subTabBtns.forEach(function(btn, inx){
    btn.addEventListener("click", function(b){
        b.preventDefault(); // 링크 안 열게 막기
        subTabBtns.forEach(function(b){
            b.classList.remove("on") // 클래스 먼저 다 제거
        })
        subTabBtns[inx].classList.add("on"); // 내가 누른 거(inx) 만 add
    
        tabDetails.forEach(function(b){
            b.classList.remove("on")
        })
        tabDetails[inx].classList.add("on")
    })
})

// 사이드바 열림접힘 표시
const asideWrap = document.querySelector(".aside-wrap")
const isSub = asideWrap.querySelector(".is-sub")
