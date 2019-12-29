(function() {
  function debounce(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
      var context = this;
      var args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  var $body = $("body"),
    $header = $(".header"),
    $btnHamburger = $(".btn-hamburger");

  $(".masonry-list").masonry({
    itemSelector: ".masonry-list-item",
    percentPosition: true
  });

  $btnHamburger.on("click", function() {
    $header.toggleClass("is-open");
    $body.toggleClass("menu-open");
  });

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

  $(window).on("DOMContentLoaded", function() {
    if (window.innerWidth < 768) {
      AOS.init({
        duration: 1000,
        easing: "203labs",
        anchorPlacement: "top-center"
      });
    } else {
      AOS.init({
        duration: 1000,
        easing: "203labs"
      });
    }
  });

  $(window).on("resize", debounce(function() {
    $(".masonry-list").masonry();
  }, 1000));
})();
