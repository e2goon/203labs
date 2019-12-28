(function() {
  var $btnHamburger = $('.btn-hamburger'),
      $menu = $('.main-menu');
  $('.masonry-list').masonry({
    itemSelector: '.masonry-list-item',
    percentPosition: true
  });

  $btnHamburger.on('click', function(){
    $menu.addClass('is-open');
  });

  AOS.init({
    duration: 1000,
    easing: '203labs'
  });
})();
