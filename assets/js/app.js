(function() {
  var $body = $("body"),
    $header = $(".header"),
    $btnHamburger = $(".btn-hamburger");

  // mobile menu click
  $btnHamburger.on("click", function() {
    $header.toggleClass("is-open");
    $body.toggleClass("menu-open");
  });

  // 스크롤
  $(".js-scroll").on("click", function(e) {
    e.preventDefault();
    var hash = this.hash;
    var targetOffsetTop;
    var offset = $(this).data("offset") || 0;
    if (hash !== "") {
      targetOffsetTop = $(hash).offset().top;
    } else {
      targetOffsetTop = 0;
    }
    $("html, body")
      .stop()
      .animate({ scrollTop: targetOffsetTop + offset }, 1000, "swing");
  });

  // work filter layout
  var workShuffle = new Shuffle(document.querySelector('.masonry-list'), {
    itemSelector: '.masonry-list-item',
    sizer: '.masonry-sizer'
  });

  // masonry ui
  $('.category').on('click', 'a', function(e) {
    e.preventDefault();
    var filterName = $(this).data('group');
    workShuffle.filter(filterName);
    var filteredItems = workShuffle.items.filter(function(item) {
      return item.isVisible === true;
    });
    $.each(workShuffle.items, function(i, item) {
      item.element.classList.remove('is-two');
    });
    if (filteredItems.length >= 2) {
      filteredItems[1].element.classList.add('is-two');
    }
  });

  // 스크롤 인터렉션
  function initAOS() {
    if (window.innerWidth < 768) {
      // 모바일
      AOS.init({
        duration: 1000,
        easing: "203labs",
        anchorPlacement: "top-center"
      });
    } else {
      // 데탑
      AOS.init({
        duration: 1000,
        easing: "203labs"
      });
    }
  }

  // 로드시 실행, 클릭시 인터렉션 버그 대응
  $(window).on("DOMContentLoaded", initAOS);
  workShuffle.on(Shuffle.EventType.LAYOUT, initAOS);
})();
