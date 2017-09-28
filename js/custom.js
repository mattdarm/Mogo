$(document).ready(function() {

// SMOOTH SCROLLING TO SECTIONS
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// MOBILE MENU
   $("#mobile-button").click(function(){
      $("#header .main-menu").toggleClass("mobile-menu");
   });

// COUNTER FOR STATISTICS
   $('.statistic-value').each(function() {
      $(this).prop('Counter', 0).animate({
         Counter: $(this).text()
      }, {
         duration: 4000,
         easing: 'swing',
         step: function(now) {
            $(this).text(Math.ceil(now));
         }
      });
   });

// ACCORDION IN SECTION SERVICES
   $( function() {
    $("#accordion").accordion();
   });

// MAP IN FOOTER
   $('#map-trigger').click(function(){
      $("#map-trigger").fadeOut("1000");
      $("#google-map").css('display','block')
   })

}); // end of function document ready
