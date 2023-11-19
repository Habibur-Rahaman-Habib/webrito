(function ($) {


  $(".client_project_slider").slick({
    autoplay: true,
    slidesToShow: 2,
    prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  // have a project counter
  $(document).ready(function () {
    $('.count').counterUp({
      delay: 10,
      time: 5000
    });
  });

})(jQuery);