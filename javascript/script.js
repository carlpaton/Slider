$(document).ready(function() {
  for (var i = 0; i < 80; i++) {
    $(".owl-carousel").append(
      `<img src='./assets/d6064711d707988c83a4c4cf2cb37dd8-${i}.jpg' />`
    );
  }

  $(document).on("keydown", function(e) {
    switch (e.keyCode) {
      case 37: // left = 37;
        $(".owl-prev").trigger("click");
        break;
      case 39: // right = 39;
        $(".owl-next").trigger("click");
        break;
      default:
        break;
    }
  });

  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    lazyLoad: true,
    nav: true,
    navText: [
      '<div class="cp-page-arrow cp-page-arrow-left"></div>',
      '<div class="cp-page-arrow cp-page-arrow-right"></div>'
    ]
  });
});
