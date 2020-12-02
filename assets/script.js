// Owl Carousel
$(document).ready(function () {
  // Hero Slider
  $("#hero__slider").owlCarousel({
    navigation: true,
    autoplay: true,
    loop: true,
    smartSpeed: 2000,
    paginationSpeed: 1500,
    autoplayHoverPause: false,
    singleItem: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
  });

  // Case Studies Slider
  $("#case__slider").owlCarousel({
    navigation: true,
    autoplay: true,
    loop: true,
    smartSpeed: 1500,
    paginationSpeed: 400,
    autoplayHoverPause: false,
    singleItem: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
  });

  // Client Review Slider
  $("#owl").owlCarousel({
    navigation: true,
    center: true,
    dots: true,
    loop: true,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1500,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
});
