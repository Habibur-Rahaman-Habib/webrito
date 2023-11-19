(function ($) {


  $(".service_list_slider").slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 10000,
    autoplaySpeed: 100,
    cssEase: 'linear',
    pauseOnHover: true,
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
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });






})(jQuery);