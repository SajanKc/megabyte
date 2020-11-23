// Owl Carousel
$(document).ready(function () {
  // Client review slider
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
