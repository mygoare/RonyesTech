require('./style.scss');



var swiperBanner = new Swiper('.swiper-container-banner', {
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  loop: true,
});


function generateSwiperFeed(slidesPerView = 6) {
  return new Swiper('.swiper-container-feed', {
    slidesPerView: slidesPerView,
    slidesPerColumn: 2,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // http://idangero.us/swiper/api/#parameters
    breakpoints: {
      760: {
        slidesPerView: 3,
      }
    }
  });
}

var swiperFeed = generateSwiperFeed();


document.addEventListener('DOMContentLoaded', function () {
  // Dropdowns

  var $dropdowns = getAll('.dropdown:not(.is-hoverable)');

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.stopPropagation();
        $el.classList.toggle('is-active');
      });
    });

    document.addEventListener('click', function (event) {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $dropdowns.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Toggles

  var $burgers = getAll('.burger');

  if ($burgers.length > 0) {
    $burgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }


  // experiments filter menu
  var $experimentsMenusTrigger = getAll('.experiments-menu-filter-trigger');
  if ($experimentsMenusTrigger.length > 0) {
    $experimentsMenusTrigger.forEach(function($el) {
      $el.addEventListener('click', function() {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $target.classList.toggle('is-active');
      })
    })
  }

  // collapse
  var menuLabel = getAll('.menu-label');
  if (menuLabel.length > 0) {
    menuLabel.forEach(function($el) {
      $el.addEventListener('click', function() {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $target.classList.toggle('is-active');
        $el.getElementsByTagName('i')[0].classList.toggle('fa-chevron-up');
      })
    })
  }

  // tabs fixed when scroll
  window.onscroll = function(){
      var $tabs = document.querySelector('.tabs');
      var $tabsPlaceholder = document.querySelector('.tabs-placeholder');

      if (window.pageYOffset > document.querySelector('.tabs').parentElement.offsetTop) {
        $tabs.classList.add('is-fixed');

        $tabsPlaceholder.classList.add('is-visible');
      } else {
        $tabs.classList.remove('is-fixed');

        $tabsPlaceholder.classList.remove('is-visible');
      }
  };


  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }


  console.log('....');

});


