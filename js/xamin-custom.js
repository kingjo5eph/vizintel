/*
Template: Xamin -Data Science & Analytics HTML Template
Author: iqonicthemes.in
Version: 1.0
Design and Developed by: iqonicthemes.in
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------
1. Back To Top
2. Wow Animation
3. Top menu sticky
4. Owl Carousel
5. Isotope
6. Accordion
7.Progress Bar
8. Page Loader
9.Magnific Popup
------------------------------------------------
Index Of Script
----------------------------------------------*/

(function (jQuery) {

	"use strict";

	function activaTab(pill) {
		jQuery(pill).addClass('active show');
	}

	jQuery(window).on('load', function (e) {
		jQuery('ul.page-numbers').addClass('justify-content-center');

		// Back To Top
		jQuery('#back-to-top').fadeOut();

		// Wow Animation
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		});
		wow.init();

		jQuery('.sub-menu').css('display', 'none');
		jQuery('.sub-menu').prev().addClass('isubmenu');
		/*jQuery(".sub-menu").before('<i class="fa fa-angle-down toggledrop" aria-hidden="true"></i>');*/


		jQuery("#top-menu .menu-item .toggledrop").off("click");
		if (jQuery(window).width() < 992) {
			jQuery('#top-menu .menu-item .toggledrop').on('click', function (e) {
				e.preventDefault();
				jQuery(this).next('.children, .sub-menu').slideToggle();
			});
		}
	});

	jQuery(window).on('resize', function () {

		jQuery("#top-menu .menu-item .toggledrop").off("click");
		if (jQuery(window).width() < 992) {
			jQuery('#top-menu .menu-item .toggledrop').on('click', function (e) {
				e.preventDefault();
				jQuery(this).next('.children, .sub-menu').slideToggle();
			});
		}

		jQuery('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function () {
			jQuery(this).next('.children, .sub-menu').slideToggle();
		});

		jQuery("#top-menu .menu-item .toggledrop").off("click");
		if (jQuery(window).width() < 992) {
			jQuery('#top-menu .menu-item .toggledrop').on('click', function (e) {
				e.preventDefault();
				jQuery(this).next('.children, .sub-menu').slideToggle();
			});
		}
	});

	/*------------------------
	Tabs
	--------------------------*/
	jQuery(window).on('scroll', function (e) {
		//top menu sticky
		if (jQuery(this).scrollTop() > 10) {
			jQuery('header').addClass('menu-sticky');
		} else {
			jQuery('header').removeClass('menu-sticky');
		}

		// Pill Tab
		var nav = jQuery('#pills-tab');
		if (nav.length) {
			var contentNav = nav.offset().top - window.outerHeight;
			if (jQuery(window).scrollTop() >= (contentNav)) {
				e.preventDefault();
				jQuery('#pills-tab li a').removeClass('active');
				jQuery('#pills-tab li a[aria-selected=true]').addClass('active');
			}
		}

		// Feature Tab
		var nav1 = jQuery('#features');
		if (nav1.length) {
			var contentNav1 = nav1.offset().top - window.outerHeight;
			if (jQuery(window).scrollTop() >= (contentNav1)) {
				e.preventDefault();
				jQuery('#features .row li a').removeClass('active');
				jQuery('#features .row li a[aria-selected=true]').addClass('active');
			}
		}

		//Back To Top
		if (jQuery(this).scrollTop() > 250) {
			jQuery('#back-to-top').fadeIn(1400);
		} else {
			jQuery('#back-to-top').fadeOut(400);
		}
	});

	/*---------------------------
	Tabs
	---------------------------*/
	jQuery(document).ready(function () {

		// scroll body to 0px on click
		jQuery('#top').on('click', function () {
			jQuery('top').tooltip('hide');
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		// Owl Carousel
		jQuery('.owl-carousel').each(function () {
			var jQuerycarousel = jQuery(this);
			jQuerycarousel.owlCarousel({
				items: jQuerycarousel.data("items"),
				loop: jQuerycarousel.data("loop"),
				margin: jQuerycarousel.data("margin"),
				nav: jQuerycarousel.data("nav"),
				dots: jQuerycarousel.data("dots"),
				autoplay: jQuerycarousel.data("autoplay"),
				autoplayTimeout: jQuerycarousel.data("autoplay-timeout"),
				navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
				responsiveClass: true,
				responsive: {
					// breakpoint from 0 up
					0: {
						items: jQuerycarousel.data("items-mobile-sm"),
						nav: false,
						dots: false
					},
					// breakpoint from 480 up
					480: {
						items: jQuerycarousel.data("items-mobile"),
						nav: false,
						dots: true,
						
					},
					// breakpoint from 786 up
					768: {
						items: jQuerycarousel.data("items-tab")
					},
					// breakpoint from 1023 up
					1023: {
						items: jQuerycarousel.data("items-laptop")
					},
					1199: {
						items: jQuerycarousel.data("items")
					}
				}
			});
		});

		  /*------------------------
        2 Isotope
        --------------------------*/
        if($(".isotope").length){
         $('.isotope').isotope({
            itemSelector: '.iq-grid-item',
        });

        // filter items on button click
        $('.isotope-filters').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $('.isotope').isotope({
                resizable: true,
                filter: filterValue
            });
            $('.isotope-filters button').removeClass('active');
            $(this).addClass('active');
        });
    }
        /*------------------------
        3 Masonry
        --------------------------*/
         if($(".iq-masonry-block").length){   
        var $msnry = $('.iq-masonry-block .iq-masonry');
        if ($msnry) {
            var $filter = $('.iq-masonry-block .isotope-filters');
            $msnry.isotope({
                percentPosition: true,
                resizable: true,
                itemSelector: '.iq-masonry-block .iq-masonry-item',
                masonry: {
                    gutterWidth: 0
                }
            });
            // bind filter button click
            $filter.on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $msnry.isotope({
                    filter: filterValue
                });
            });

            $filter.each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function() {
                    $buttonGroup.find('.active').removeClass('active');
                    $(this).addClass('active');
                });
            });
        }
    }
		/*------------------------
		Accordion
		--------------------------*/
		jQuery('.iq-accordion .iq-accordion-block .accordion-details').hide();
		jQuery('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
		jQuery('.iq-accordion .iq-accordion-block').on("click", function () {
			if (jQuery(this).children('div.accordion-details ').is(':hidden')) {
				jQuery('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
				jQuery(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
			}
		});

		jQuery('.iq-faq .iq-block .iq-details').hide();
		jQuery('.iq-faq .iq-block:first').addClass('iq-active').children().slideDown('slow');
		jQuery('.iq-faq .iq-block').on("click", function() {
			if (jQuery(this).children('div').is(':hidden')) {
				jQuery('.iq-faq .iq-block').removeClass('iq-active').children('div').slideUp('slow');
				jQuery(this).toggleClass('iq-active').children('div').slideDown('slow');
			}
		});
		
		/*------------------------
		Progress Bar
		--------------------------*/
		jQuery('.iq-progress-bar > span').each(function () {
			var jQuerythis = jQuery(this);
			var width = jQuery(this).data('percent');
			jQuerythis.css({
				'transition': 'width 2s'
			});
			setTimeout(function () {
				jQuerythis.appear(function () {
					jQuerythis.css('width', width + '%');
				});
			}, 500);
		});

		jQuery('.nav.nav-pills').each(function () {
			var b = jQuery(this).find('a.active').attr('href');
			activaTab(b);
		});

		/*------------------------
		Page Loader
		--------------------------*/
		jQuery("#load").fadeOut();
		jQuery("#loading").delay(0).fadeOut("slow");

		// Video MagnificPopup
		jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		jQuery('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function () {
			jQuery(this).next('.children, .sub-menu').slideToggle();
		});

		jQuery('.timer').countTo();
	});
// blog-slider carousel
  $('.blog-slider__wrp').owlCarousel({
    loop:true,
    margin:20,

    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      },
      1200:{
        items:3
    }
  }

});
// testimonials
$('.testimonials-slider').owlCarousel({
  loop:true,
  margin:20,

  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3,
        margin:30,
    }
}

});

// blogs
$('.blogs-slider').owlCarousel({
  loop:true,
  margin:20,

  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3,
        margin:30,
    }
}

});

})(jQuery);



$(document).ready(function() {
  $('header .navbar ul li a').on('click', function(event) {
    event.preventDefault();

    $('header .navbar ul li a').removeClass('active'); // remove active class from all menu items
    $(this).addClass('active'); // add active class to clicked menu item

    var target = $(this.getAttribute('href'));

    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 100 // subtract 100px from target's offset value
      }, 1000);
    }
  });
});


    // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });


    document.addEventListener('keydown', function (event) {
      if (event.key === 'i' || event.key === 'I' || event.key === 'j' || event.key === 'J' || event.key === 'u' || event.key === 'U') {
          event.preventDefault();
      }
  });
  

// Change h2 element when click tabs
    function initializeTabs(tabSetId, h2Prefix) {
      // Initially, show the first h2 and hide the others
      $("#" + h2Prefix + "1").show();
      $("#" + h2Prefix + "2, #" + h2Prefix + "3").hide();
  
      // Set the opacity for the initially shown h2 to 1
      $("#" + h2Prefix + "1").css('opacity', 1);
  
      // Add a custom click event handler for the nav-links
      $(tabSetId + " .nav-link").click(function () {
        // Get the index of the clicked nav-link
        var index = $(this).parent().index();
  
        // Hide all h2 elements and set their opacity to 0
        $("h2[id^='" + h2Prefix + "']").hide().css('opacity', 0);
  
        // Show the corresponding h2 based on the index and set its opacity to 1
        $("#" + h2Prefix + (index + 1)).show().css('opacity', 1);
      });
    }
  
    $(document).ready(function () {
      initializeTabs("#pills-tab-ourstrategies", "h2_1_");
      initializeTabs("#pills-tab-transformation", "h2_2_");
      initializeTabs("#pills-tab-dataanalysis", "h2_3_");
      initializeTabs("#pills-tab-about", "h2_4_");
      initializeTabs("#pills-tab-whatwedo", "h2_5_");
      initializeTabs("#pills-tab-projectcontrols", "h2_6_");
    });

    
    $(document).ready(function() {
      // Add a click event listener to all <a> elements inside the "top-menu" <ul>
      $("#top-menu a").click(function() {
        // Remove the "show" class from the "navbarSupportedContent" element
        $("#navbarSupportedContent").removeClass("show");
      });
    });
