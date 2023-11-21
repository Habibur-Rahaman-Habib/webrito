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

  // testimonial
  $('.testi_ltr_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    // centerMode: true,
    draggable: true,
    pauseOnFocus: true,

    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 0,
    // speed: 8000,
    // slidesToShow: 4,
    // arrows: false,
    // dots: false,
    // centerMode: true,
    // cssEase: 'linear',
    // pauseOnFocus: true,
  });

  $('.testi_rtl_slider').slick({

    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    centerMode: true,
    rtl: true,

    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 0,
    // speed: 8000,
    // slidesToShow: 4,
    // arrows: false,
    // dots: false,
    // centerMode: true,
    // // cssEase: 'linear',
    // // pauseOnFocus: true,
    // rtl: true,
  });

  // have a project counter
  $(document).ready(function () {
    $('.count').counterUp({
      delay: 10,
      time: 5000
    });
  });

  // award slider
  $('.award_slider').slick({
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 6,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    // ]
  });



})(jQuery);

//read more
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = 'Read more <i class="fa-solid fa-angle-down"></i>';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = 'Read less <i class="fa-solid fa-angle-up"></i>';
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dotss");
  var moreText = document.getElementById("moree");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = 'Read more <i class="fa-solid fa-angle-down"></i>';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = 'Read less <i class="fa-solid fa-angle-up"></i>';
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dotsss");
  var moreText = document.getElementById("moreeee");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = 'Read more <i class="fa-solid fa-angle-down"></i>';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = 'Read less <i class="fa-solid fa-angle-up"></i>';
    moreText.style.display = "inline";
  }
}

function toggleClass(divId) {
  var myDiv = document.getElementById(divId);
  var className = 'highlighted' + divId.charAt(divId.length - 1);
  myDiv.classList.toggle(className);
}

