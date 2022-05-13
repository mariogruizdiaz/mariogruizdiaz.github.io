/*
* _theThemeName v1.0.0 (https://themeforest.net/user/themetags)
* Copyright 2020 Themetags
* Licensed under ThemeForest License
*/
// TABLE OF CONTENTS
//  1. preloader
//  2. page scrolling feature - requires jQuery Easing plugin
//  3. fixed navbar
//  4. back to top
//  5. counter up js
//  6. Screenshots slider
//  7. our clients logo carousel
//  8. client carousel two
//  9. magnify popup video
// 10. client-testimonial one item carousel
// 11. monthly and yearly pricing switch
// 12. coming soon count
jQuery(function ($) {
  'use strict'; // 1. preloader

  $(window).ready(function () {
    $('#preloader').delay(200).fadeOut('fade');
  }); // 2. page scrolling feature - requires jQuery Easing plugin

  $(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 60
      }, 900, 'easeInOutExpo');
      event.preventDefault();
    });
  }); // 3. fixed navbar

  $(window).on('scroll', function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 0) {
      $('.navbar').addClass('affix');
      $('.scroll-to-target').addClass('open');
    } else {
      $('.navbar').removeClass('affix');
      $('.scroll-to-target').removeClass('open');
    } // checks if window is scrolled more than 500px, adds/removes top to target class


    if ($(this).scrollTop() > 500) {
      $('.scroll-to-target').addClass('open');
    } else {
      $('.scroll-to-target').removeClass('open');
    }
  }); // 4. back to top

  if ($('.scroll-to-target').length) {
    $(".scroll-to-target").on('click', function () {
      var target = $(this).attr('data-target'); // animate

      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);
    });
  } // 5. counter up js


  $('.count-number').rCounter(); // 6. Screenshots slider

  $('.screen-carousel').owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      991: {
        items: 4
      },
      1200: {
        items: 4
      },
      1920: {
        items: 4
      }
    }
  }); // 7. our clients logo carousel

  $('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      800: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  }); // 8. client carousel two

  $('.clients-carousel-2').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    autoplayTimeout: 4500,
    slideTransition: 'linear',
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      800: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  }); // 9. magnify popup video

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  }); // 10. client-testimonial one item carousel

  $('.client-testimonial-1').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    items: 1
  }); // 11. monthly and yearly pricing switch

  // 11. monthly and yearly pricing switch
  $("#js-contcheckbox").change(function () {
    if (this.checked) {
        $('.monthly-price').css('display', 'none');
        $('.yearly-price').css('display', 'block');
        $('.afterinput').addClass('text-success');
        $('.beforeinput').removeClass('text-success');
    } else {
        $('.monthly-price').css('display', 'block');
        $('.yearly-price').css('display', 'none');
        $('.afterinput').removeClass('text-success');
        $('.beforeinput').addClass('text-success');
    }
  });

  $(".js-contcheckbox2").change(function () {
    const key = this.dataset.key;
    if (this.checked) {
      $(`#posts-${key}`).css('display', 'none');
      $(`#accounts-${key}`).css('display', 'block');
      $(`#afterinput-${key}`).addClass('text-success');
      $(`#beforeinput-${key}`).removeClass('text-success');
    } else {
      $(`#posts-${key}`).css('display', 'block');
      $(`#accounts-${key}`).css('display', 'none');
      $(`#afterinput-${key}`).removeClass('text-success');
      $(`#beforeinput-${key}`).addClass('text-success');
    }
  }); // 12. coming soon count

  $('#clock').countdown('2021/07/01', function (event) {
    $(this).html(event.strftime('' + '<div class="row">' + '<div class="col">' + '<h2 class="mb-1">%-D</h2>' + '<h5>Day%!d</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-1">%H</h2>' + '<h5>Hours</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-1">%M</h2>' + '<h5>Minutes</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-1">%S</h2>' + '<h5>Seconds</h5>' + '</div>' + '</div>'));
  });
}); // JQuery end