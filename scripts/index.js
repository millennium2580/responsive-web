// 선택자
const headerSearch = document.querySelector('.header-search');
const searchOpen = document.querySelector('.search-open');
const searchInput = document.querySelector('#headerSearch');

// 헤더 통합검색 활성화
searchOpen.addEventListener('click', function () {
    headerSearch.classList.add('is-open');
    searchInput.focus();
});

// 마우스가 영역을 벗어나면 다시 꺼지게?