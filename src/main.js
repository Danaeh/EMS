$(document).ready(function() {

    var scroll = new SmoothScroll('a[href="#header"], [href="#Company"], [href="#Services"], [href="#Contact"]',  {
        // Selectors
        ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)

        // Speed & Easing
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        offset: 5, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
        easing: 'easeInOutCubic', // Easing pattern to use
        customEasing: function (time) {
            return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
        },

        // Callback API
        before: function (anchor, toggle) {}, // Callback to run before scroll
        after: function (anchor, toggle) {} // Callback to run after scroll
    });


  $('body').scrollspy({ target: '#navbar-primary' });

  //header shadow

  var header = $('#header');

  $(window).scroll(function(e){
    if(header.offset().top !== 0){
      if(!header.hasClass('header-shadow')){
        header.addClass('header-shadow');
        header.addClass('bg-white')
      }
    }else{
      header.removeClass('header-shadow');
      header.removeClass('bg-white')
    }
  });

});