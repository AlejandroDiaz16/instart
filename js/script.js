

// $('.owl-carousel').owlCarousel({
//     rtl:true,
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// });

$(document).ready(function () {
  // carousel top
  $('.owl-carousel.top').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
    ],
    // autoplay: true,
    // autoplayHoverPause: true,
    // autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items:1
      },
      964: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // carousel new trending and sale
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items:2
      },
      964: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
});

$('.menuProfile').click(function(){
  if($('.menu').hasClass('menu-Active')){
    $('.menu').removeClass('menu-Active');
    $('.itemsContainer').removeClass('twoColumns');
  }else {
    $('.menu').addClass('menu-Active');
    $('.itemsContainer').addClass('twoColumns');
  }
});


function getWidth(){
  return $(window).width();
}
$('.burger-button').click(function(){
  if(getWidth()<=767){
    console.log("si sirve");
    if($('#showMenu').hasClass('is-Active')){
      $('#showMenu').removeClass("is-Active");
    }else {
      console.log("no sirve");
      $('#showMenu').addClass("is-Active");
    }
  }
});