(function() {
  var $body = $('body'),
      $header = $('.header'),
      $btnHamburger = $('.btn-hamburger');
      
  $('.masonry-list').masonry({
    itemSelector: '.masonry-list-item',
    percentPosition: true
  });

  $btnHamburger.on('click', function(){
    $header.toggleClass('is-open');
    $body.toggleClass('menu-open');
  });

  AOS.init({
    duration: 1000,
    easing: '203labs'
  });
})();
