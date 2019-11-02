(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		// Owl carousel
		$('.owl-theme').owlCarousel({
			items: 3,
			loop: true,
			autoplay: true,
			margin: 25,
			dots: true,
			responsive: {
				992: {
					items: 3
				},
				768: {
					items: 2
				},
				320: {
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
		});
		// Magnific Popup Ends
		// Filtering
		$(".filter-button").click(function () {
			var value = $(this).attr('data-filter');

			if (value == "all") {
				$('.filter').show('1000');
			} else {
				$(".filter").not('.' + value).hide('3000');
				$('.filter').filter('.' + value).show('3000');

			}
		});
		// Filtering Ends

		// Collapse
		$('.nav-toggle').click(function () {
			var collapse_content_selector = $(this).attr('href');
			var toggle_switch = $(this);
			$(collapse_content_selector).toggle(function () {
				if ($(this).css('display') == 'none') {
					toggle_switch.html('Read More');
				} else {
					toggle_switch.html('Read Less');
				}
			});
		});
		// Collapse ends

		$('#slides').slideshow({
			randomize: false,      // Randomize the play order of the slides.
			slideDuration: 6000,  // Duration of each induvidual slide.
			fadeDuration: 1000,    // Duration of the fading transition. Should be shorter than slideDuration.
			animate: true,        // Turn css animations on or off.
			pauseOnTabBlur: true, // Pause the slideshow when the tab is out of focus. This prevents glitches with setTimeout().
			enableLog: false      // Enable log messages to the console. Useful for debugging.
		})
	});





}(jQuery));

