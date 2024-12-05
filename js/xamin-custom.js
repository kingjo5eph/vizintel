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
    768: {
      slidesPerView: 2,

    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }
});

$(document).ready(function () {
  $("header .navbar .navbar-nav li a").on("click", function (event) {
    event.preventDefault();

    $("header .navbar .navbar-nav li a").removeClass("active"); // remove active class from all menu items
    $(this).addClass("active"); // add active class to clicked menu item

    var target = $(this.getAttribute("href"));

    if (target.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 100, // subtract 100px from target's offset value
          },
          1000
        );
    }
  });
});



$(document).ready(function () {
  // Add a click event listener to all <a> elements inside the "top-menu" <ul>
  $("#top-menu a").click(function () {
    // Remove the "show" class from the "navbarSupportedContent" element
    $("#navbarSupportedContent").removeClass("show");
  });
});

// Variables
var players = [];
var cards = document.querySelectorAll('.card-wrapper');



// Initialize YouTube players after API is ready
function onYouTubePlayerAPIReady() {
  cards.forEach(function(card, index) {
    var play = card.querySelector('.card-play');
    var video = card.querySelector('.card-video');
    var iframe = video.querySelector('.video');
    var videoId = iframe.getAttribute('data-video-id');

    // Create YouTube player for each card
    players[index] = new YT.Player(iframe, {
      videoId: videoId,
      events: {
        'onReady': function(event) {
          // Handle play click for each card
          play.addEventListener('click', function() {
            card.classList.add('video-is-open');
            setTimeout(function() {
              video.style.display = 'block';
              players[index].playVideo();
            }, 500);
          });
        }
      }
    });
  });
}


// Inject YouTube API script only once
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'i' || event.key === 'I' || event.key === 'j' || event.key === 'J' || event.key === 'u' || event.key === 'U') {
          event.preventDefault();
      }
  });



  // Banner Carousel with Mouse control
  var menu = ['Home', 'About Us', 'Our Services', 'Our Approach', 'Our Benefits']
  var swiper = new Swiper(".banner-carousel", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"><span class="pagination-text">' + (menu[index]) + '</span></span>';
  },
  breakpoints: {
    640: {
      mousewheel: {
        forceToAxis: false,

        releaseOnEdges: false,
    },

    },

  }
  
  },
  });


  // Animated logo
const images = [
  "images/logo/01_00002.png",
  "images/logo/01_00003.png",
  "images/logo/01_00004.png",
  "images/logo/01_00005.png",
  "images/logo/01_00006.png",
  "images/logo/01_00007.png",
  "images/logo/01_00008.png",
  "images/logo/01_00009.png",
  "images/logo/01_00010.png",
  "images/logo/01_00011.png",
  "images/logo/01_00012.png",
  "images/logo/01_00013.png",
  "images/logo/01_00014.png",
  "images/logo/01_00015.png",
  "images/logo/01_00016.png",
  "images/logo/01_00017.png",
  "images/logo/01_00018.png",
  "images/logo/01_00019.png",
  "images/logo/01_00020.png",
  "images/logo/01_00021.png",
  "images/logo/01_00022.png",
  "images/logo/01_00023.png",
  "images/logo/01_00024.png",
  "images/logo/01_00025.png",
  "images/logo/01_00026.png",
  "images/logo/01_00027.png",
  "images/logo/01_00028.png",
  "images/logo/01_00029.png",
  "images/logo/01_00030.png",
  "images/logo/01_00031.png",
  "images/logo/01_00032.png",
  "images/logo/01_00033.png",
  "images/logo/01_00034.png",
  "images/logo/01_00035.png",
  "images/logo/01_00036.png",
  "images/logo/01_00037.png",
  "images/logo/01_00038.png",
  "images/logo/01_00039.png",
  "images/logo/01_00040.png",
  "images/logo/01_00041.png",
  "images/logo/01_00042.png",
  "images/logo/01_00043.png",
  "images/logo/01_00044.png",
  "images/logo/01_00045.png",
  "images/logo/01_00046.png",
  "images/logo/01_00047.png",
  "images/logo/01_00048.png",
  "images/logo/01_00049.png",
  "images/logo/01_00050.png",
];

let index = 0;
const animationElement = document.getElementById("animation");
const interval = 100; 

setInterval(() => {
  animationElement.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}, interval);



// Select all card-wrapper-video elements
const videoCard = document.querySelectorAll('.card-wrapper-video');

videoCard.forEach(card => {
  // Apply mousemove event to each card
  card.addEventListener('mousemove', function(e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X position within the card
    const y = e.clientY - rect.top;  // Mouse Y position within the card

    // Calculate background position percentage based on mouse position
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Update background position to create the magnifying effect
    card.style.backgroundSize = '200%'; // Zoom on hover
    card.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  });

  // Reset the background properties when mouse leaves the card
  card.addEventListener('mouseleave', function() {
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
  });
});
