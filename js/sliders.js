$(document).ready(function () {
  const modernSlider = new Swiper(".modern-slider", {
    speed: 900,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.works-slider-btns__next',
        prevEl: '.works-slider-btns__prev',
      },

});
const slider = $('.slider-wrapper').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.prev-btn'),
  nextArrow: $('.next-btn'),
  dots: true,
  responsive: [

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    },
    {
      breakpoint: 601,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('a#logo , a#arrow-down').click(function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top + 'px'
  },{
    duration: 500,
    easing: 'swing',
  });
  return false;
});

});