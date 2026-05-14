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


// gnb
    gnbOpenBtn.addEventListener("click", function(e){
        const browserWidth = window.innerWidth;  // 브라우저의 너비
        console.log(browserWidth);

        if(browserWidth < 1024){  // 모바일~테블릿
            e.preventDefault();  // 기본 동작(링크a) 막기
            gnbBox.classList.toggle("show");
            
            // if(gnb.className = "show"){
            //     gnbOpenBtn.classList.add("on");
            // }else{
            //     gnbOpenBtn.classList.remove("on");
            // }

            // gnb에 show가 있으면 버튼에 on 추가
            if(gnbBox.classList.contains("show")){
                gnbOpenBtn.classList.add("on");
            } else {
                gnbOpenBtn.classList.remove("on");
            }
        }
        
    });
    
    // window 브라우저 리사이즈시 동작 변화를 주고 싶을 때
    // - resize() : 1px만 달라져도 실행됨 > 성능에 영향을 줌 >> 브라우저 과부화, 모바일일 때 배터리 과사용 및 성능 이슈

    // 디바운딩(리사이즈 최적화)
    let timerID = null;
    window.addEventListener("resize", function(){
        clearTimeout(timerID);  // 이전 resize 실행 제거

        // 일정 시간이 지난 후에 1번 실행하도록 유도
        timerID = setTimeout(()=>{
            const browserWidth = window.innerWidth;  // 브라우저의 너비
            console.log(browserWidth);

            // 데스크탑에서는 .show클래스 제거
            gnb.classList.remove("show");
        }, 200);  // 0.2~0.3초로 봄
    });