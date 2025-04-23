
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
    jQuery(pill).addClass("active show");
  }

  jQuery(window).on("load", function (e) {

    // jQuery("ul.page-numbers").addClass("justify-content-center");

    // Back To Top
    jQuery("#back-to-top").fadeOut();



    jQuery(".sub-menu").css("display", "none");
    jQuery(".sub-menu").prev().addClass("isubmenu");
    /*jQuery(".sub-menu").before('<i class="fa fa-angle-down toggledrop" aria-hidden="true"></i>');*/

    jQuery("#top-menu .menu-item .toggledrop").off("click");
    if (jQuery(window).width() < 992) {
      jQuery("#top-menu .menu-item .toggledrop").on("click", function (e) {
        e.preventDefault();
        jQuery(this).next(".children, .sub-menu").slideToggle();
      });
    }
  });

  jQuery(window).on("load scroll", function () {

    // top menu sticky
    if (jQuery(this).scrollTop() > 10) {
      jQuery('header').addClass('menu-sticky');
    } else {
      jQuery('header').removeClass('menu-sticky');
    }
  
  });



  /*------------------------
	Tabs
	--------------------------*/
  jQuery(window).on("scroll", function (e) {


    //Back To Top
    if (jQuery(this).scrollTop() > 250) {
      jQuery("#back-to-top").fadeIn(1400);
    } else {
      jQuery("#back-to-top").fadeOut(400);
    }
  });

  /*---------------------------
	Tabs
	---------------------------*/
  jQuery(document).ready(function () {
    // scroll body to 0px on click
    jQuery("#top").on("click", function () {
      jQuery("top").tooltip("hide");
      jQuery("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });




    /*------------------------
		Progress Bar
		--------------------------*/
    jQuery(".iq-progress-bar > span").each(function () {
      var jQuerythis = jQuery(this);
      var width = jQuery(this).data("percent");
      jQuerythis.css({
        transition: "width 2s",
      });
      setTimeout(function () {
        jQuerythis.appear(function () {
          jQuerythis.css("width", width + "%");
        });
      }, 500);
    });

    jQuery(".nav.nav-pills").each(function () {
      var b = jQuery(this).find("a.active").attr("href");
      activaTab(b);
    });

    /*------------------------
		Page Loader
		--------------------------*/
    jQuery("#load").fadeOut();
    jQuery("#loading").delay(0).fadeOut("slow");




  });

})(jQuery);


var inuSlider = new Swiper(".industries-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,

    },

