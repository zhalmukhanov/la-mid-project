$(document).ready(function(){
    $('.header_burger').click(function (e) { 
        $('.header_burger, .burger_main').toggleClass('active')
    });
});


const $header = $(".menu")
let prevScroll
let lastShowPos

$(window).on("scroll", function() {
  const scrolled = $(window).scrollTop()

  if (scrolled > 50 && scrolled > prevScroll) {
    $header.addClass("menu-out")
    lastShowPos = scrolled
  } else if (scrolled <= Math.max(lastShowPos - 50, 0)) {
    $header.removeClass("menu-out")
  }
  prevScroll = scrolled
})