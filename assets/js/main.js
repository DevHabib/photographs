(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		// Owl carousel
		$('.owl-theme').owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			margin: 25,
			dots: true,
			responsive: {
				992:{
					items: 3
				},
				768:{
					items: 2
				},
				320:{
					items: 1
				}
			}
		});
		// Owl Carousel ends
		new WOW().init();

		// Magnific Popup start
		$('.image-popup').magnificPopup({
			type: 'image',
			gallery: {
					enabled: true
				}
		})
		$('.video-popup').magnificPopup({
			type: 'iframe'
		})

		
		// Magnific Popup Ends

	});

	// Navbar starts
	jQuery(document).ready(function(){
	    function resizeNav() {
	        $(".menu").css({"height": window.innerHeight});
	        var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
	        var diameter = radius * 2;
	        $(".nav-layer").width(diameter);
	        $(".nav-layer").height(diameter);
	        $(".nav-layer").css({"margin-top": -radius, "margin-left": -radius});
	    }
	    $(".nav-toggle").click(function() {
	        $(".nav-toggle, .nav-layer, .menu").toggleClass("open");
	    });
	    $(window).resize(resizeNav);
	    resizeNav();
	});
	// navbar ends




}(jQuery));

// Count Down JS

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('December 20, 2019 03:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      	document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)