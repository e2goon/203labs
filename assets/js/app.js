(function() {
  $('.masonry-list').masonry({
    itemSelector: '.masonry-list-item',
    percentPosition: true
  });

  AOS.init({
    duration: 1000,
    easing: '203labs'
  });
})();
