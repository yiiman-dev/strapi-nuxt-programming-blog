export default ()=>{

  /* ------------------------------------------------
  Project:   Sassaht - SaaS, Startup & WebApp Prebuilt Template
  Author:    ThemeHt
------------------------------------------------ */
  /* ------------------------
      Table of Contents

    1. Predefined Variables
    2. Preloader
    3. FullScreen
    4. Counter
    5. Owl carousel
    6. Testimonial Carousel
    7. Magnific Popup
    8. Scroll to top
    9. Banner Section
    10. Fixed Header
    11. Scrolling Animation
    12. Text Color, Background Color And Image
    13. Accordian
    14. Contact Form
    15. ProgressBar
    16. Countdown
    17. Wow Animation
    18. HT Window load and functions


  ------------------------ */

  "use strict";

  /*------------------------------------
    HT Predefined Variables
  --------------------------------------*/
  var $window = jQuery(window),
    $document = jQuery(document),
    $body = jQuery('body'),
    $fullScreen = jQuery('.fullscreen-banner') || jQuery('.section-fullscreen'),
    $halfScreen = jQuery('.halfscreen-banner'),
    searchActive = false;

//Check if function exists
  jQuery.fn.exists = function () {
    return this.length > 0;
  };


  /*------------------------------------
    HT PreLoader
  --------------------------------------*/
  function preloader() {
    jQuery('#ht-preloader').fadeOut();
  };


  /*------------------------------------
    HT Menu
  --------------------------------------*/
  function menu() {
    // Variables
    var $dropdown = jQuery('.dropdown-animate'),
      $dropdownSubmenu = jQuery('.dropdown-submenu [data-toggle="dropdown"]');

    function initSubmenu($this) {
      if (!$this.next().hasClass('show')) {
        $this.parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $submenu = $this.next(".dropdown-menu");
      $submenu.toggleClass('show');
      $submenu.parent().toggleClass('show');
      $this.parents('.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        jQuery('.dropdown-submenu .show').removeClass("show");
      });
    }
    // Events
    if ($dropdown.length) {
      $dropdown.on({
        'hide.bs.dropdown': function () {
          hideDropdown($dropdown);
        }
      })
    }
    if ($dropdownSubmenu.length) {
      $dropdownSubmenu.on('click', function (e) {
        initSubmenu(jQuery(this))
        return false;
      });
    }
  };


  /*------------------------------------
    HT Counter
  --------------------------------------*/
  function sidemenu() {

    jQuery('#dismiss').on('click', function () {
      jQuery('#sidebar').removeClass('active');
    });

    jQuery('#sidebarCollapse').on('click', function () {
      jQuery('#sidebar').addClass('active');
      jQuery('.collapse.in').toggleClass('in');
      jQuery('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
  };


  /*------------------------------------
    HT FullScreen
  --------------------------------------*/
  function fullScreen() {
    if ($fullScreen.exists()) {
      $fullScreen.each(function () {
        var $elem = jQuery(this),
          elemHeight = $window.height();
        if($window.width() < 768 ) $elem.css('height', elemHeight/ 1);
        else $elem.css('height', elemHeight);
      });
    }
    if ($halfScreen.exists()) {
      $halfScreen.each(function () {
        var $elem = jQuery(this),
          elemHeight = $window.height();
        $elem.css('height', elemHeight / 2);
      });
    }
  };


  /*------------------------------------
    HT Counter
  --------------------------------------*/
  function counter() {
    jQuery('.count-number').countTo({
      refreshInterval: 2
    });
  };


  /*------------------------------------
    HT Owl Carousel
  --------------------------------------*/
  function owlcarousel() {
    jQuery('.owl-carousel').each( function() {
      var $carousel = jQuery(this);
      $carousel.owlCarousel({
        items : $carousel.data("items"),
        slideBy : $carousel.data("slideby"),
        center : $carousel.data("center"),
        loop : true,
        rtl : true,
        margin : $carousel.data("margin"),
        dots : $carousel.data("dots"),
        nav : $carousel.data("nav"),
        autoplay : $carousel.data("autoplay"),
        autoplayTimeout : $carousel.data("autoplay-timeout"),
        navText : [ '<span class="fas fa-long-arrow-alt-right"><span>', '<span class="fas fa-long-arrow-alt-left"></span>' ],
        responsive: {
          0:{items: $carousel.data('xs-items') ? $carousel.data('xs-items') : 1},
          576:{items: $carousel.data('sm-items')},
          768:{items: $carousel.data('md-items')},
          1024:{items: $carousel.data('lg-items')},
          1200:{items: $carousel.data("items")}
        },
      });
    });
  };


  /*------------------------------------
    HT Testimonial Carousel
  --------------------------------------*/
  function testimonialcarousel() {
    jQuery('.testimonial-carousel').on('slide.bs.carousel', function (evt) {
      jQuery('.testimonial-carousel .controls li.active').removeClass('active');
      jQuery('.testimonial-carousel .controls li:eq('+jQuery(evt.relatedTarget).index()+')').addClass('active');
    })
  };

  /*------------------------------------
    HT Magnific Popup
  --------------------------------------*/
  function magnificpopup() {
    jQuery('.popup-gallery').magnificPopup({
      delegate: 'a.popup-img',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
    });
    if (jQuery(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
      jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });
    }

  };


  /*------------------------------------
    HT Isotope
  --------------------------------------*/
  function isotope() {
    // init Isotope
    var $grid = jQuery('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
    });

    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = jQuery(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = jQuery(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };

    // bind filter button click
    jQuery('.portfolio-filter').on( 'click', 'button', function() {
      var filterValue = jQuery( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });


    // change is-checked class on buttons
    jQuery('.portfolio-filter').each( function( i, buttonGroup ) {
      var $buttonGroup = jQuery( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        jQuery( this ).addClass('is-checked');
      });
    });
  };

  /*------------------------------------
    HT Scroll to top
  --------------------------------------*/
  function scrolltop() {
    var pxShow = 300,
      goTopButton = jQuery(".scroll-top")
    // Show or hide the button
    if (jQuery(window).scrollTop() >= pxShow) goTopButton.addClass('scroll-visible');
    jQuery(window).on('scroll', function () {
      if (jQuery(window).scrollTop() >= pxShow) {
        if (!goTopButton.hasClass('scroll-visible')) goTopButton.addClass('scroll-visible')
      } else {
        goTopButton.removeClass('scroll-visible')
      }
    });
    jQuery('.smoothscroll').on('click', function (e) {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  };


  /*------------------------------------
   HT Banner Section
 --------------------------------------*/
  function headerheight() {
    jQuery('.fullscreen-banner .align-center').each(function(){
      var headerHeight=jQuery('.header').height();
      // headerHeight+=15; // maybe add an offset too?
      jQuery(this).css('padding-top',headerHeight+'px');
    });
  };


  /*------------------------------------
    HT Fixed Header
  --------------------------------------*/
  function fxheader() {
    jQuery(window).on('scroll', function () {
      if (jQuery(window).scrollTop() >= 100) {
        jQuery('#header-wrap').addClass('fixed-header');
      } else {
        jQuery('#header-wrap').removeClass('fixed-header');
      }
    });
  };


  /*------------------------------------------
    HT Text Color, Background Color And Image
  ---------------------------------------------*/
  function databgcolor() {
    jQuery('[data-bg-color]').each(function(index, el) {
      jQuery(el).css('background-color', jQuery(el).data('bg-color'));
    });
    jQuery('[data-text-color]').each(function(index, el) {
      jQuery(el).css('color', jQuery(el).data('text-color'));
    });
    jQuery('[data-bg-img]').each(function() {
      jQuery(this).css('background-image', 'url(' + jQuery(this).data("bg-img") + ')');
    });
  };


  /*------------------------------------
    HT Accordian
  --------------------------------------*/
  function accordian() {
    jQuery(".card").on("show.bs.collapse hide.bs.collapse", function(e) {
      if (e.type=='show'){
        jQuery(this).addClass('active');
      }else{
        jQuery(this).removeClass('active');
      }
    });
    jQuery('.accordion .card-header a').prepend('<span></span>');
  };


  /*------------------------------------
    HT Contact Form
  --------------------------------------*/
  function contactform() {
    jQuery('#contact-form').validator();

    // when the form is submitted
    jQuery('#contact-form').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        var url = "php/contact.php";

        // POST values in the background the the script URL
        jQuery.ajax({
          type: "POST",
          url: url,
          data: jQuery(this).serialize(),
          success: function (data)
          {
            // data = JSON object that contact.php returns

            // we recieve the type of the message: success x danger and apply it to the
            var messageAlert = 'alert-' + data.type;
            var messageText = data.message;

            // let's compose Bootstrap alert box HTML
            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

            // If we have messageAlert and messageText
            if (messageAlert && messageText) {
              // inject the alert to .messages div in our form
              jQuery('#contact-form').find('.messages').html(alertBox).show().delay(2000).fadeOut('slow');
              // empty the form
              jQuery('#contact-form')[0].reset();
            }
          }
        });
        return false;
      }
    })
  };


  /*------------------------------------
    HT ProgressBar
  --------------------------------------*/
  function progressbar () {
    var progressBar = jQuery('.progress');
    if(progressBar.length) {
      progressBar.each(function () {
        var Self = jQuery(this);
        Self.appear(function () {
          var progressValue = Self.data('value');

          Self.find('.progress-bar').animate({
            width:progressValue+'%'
          }, 1000);
        });
      })
    }
  };


  /*------------------------------------
    HT Search
  --------------------------------------*/
  function search() {
    if(jQuery('.search-form').length)
    {
      var searchForm = jQuery('.search-form');
      var searchInput = jQuery('.search-input');
      var searchButton = jQuery('.search-button');

      searchButton.on('click', function(event)
      {
        event.stopPropagation();

        if(!searchActive)
        {
          searchForm.addClass('active');
          searchActive = true;
          searchInput.focus();

          jQuery(document).one('click', function closeForm(e)
          {
            if(jQuery(e.target).hasClass('search-input'))
            {
              jQuery(document).one('click', closeForm);
            }
            else
            {
              searchForm.removeClass('active');
              searchActive = false;
            }
          });
        }
        else
        {
          searchForm.removeClass('active');
          searchActive = false;
        }
      });
    }
  };


  /*------------------------------------
    HT Countdown
  --------------------------------------*/
  function countdown() {
    jQuery('.countdown').each(function () {
      var $this = jQuery(this),
        finalDate = jQuery(this).data('countdown');
      jQuerythis.countdown(finalDate, function (event) {
        jQuery(this).html(event.strftime('<li><span>%-D</span><p>روز</p></li>' + '<li><span>%-H</span><p>ساعت</p></li>' + '<li><span>%-M</span><p>دقیقه</p></li>' + '<li><span>%S</span><p>ثانیه</p></li>'));
      });
    });
  };

  /*------------------------------------
    HT NiceSelect
  --------------------------------------*/
  function niceSelect() {
    jQuery('select').niceSelect();
  }


  /*------------------------------------
    HT particles
  --------------------------------------*/

  function particles() {
    jQuery("#particles-js").each(function () {
      particlesJS( {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "random"
          },
          "shape": {
            "type": "polygon",

            "polygon": {
              "nb_sides": 6
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": !0,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 10,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 80,
              "size_min": 0.1,
              "sync": false
            }
          },
        },
        "retina_detect": true
      })
    })
  }


  /*------------------------------------
    HT Wow Animation
  --------------------------------------*/
  function wowanimation() {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true
    });
    wow.init();
  }


  /*------------------------------------
    HT Window load and functions
  --------------------------------------*/
  jQuery(document).ready(function() {
    fullScreen(),
      menu(),
      sidemenu(),
      owlcarousel(),
      testimonialcarousel(),
      counter(),
      magnificpopup()
    scrolltop(),
      headerheight()
    fxheader(),
      databgcolor(),
      accordian(),
      contactform(),
      progressbar(),
      search(),
      countdown(),
      niceSelect(),
      particles();
  });


  $window.resize(function() {
  });


  jQuery(window).on('load', function() {
    preloader(),
      isotope(),
      wowanimation();
  });

  jQuery(document).ready(function() {
    // Define callback
    var myCallbackVivus = function () {};

    // Get HTMLCollection of SVG to animate
    var myElementsVivus = document.getElementsByClassName("icon-vivus");

    // Go across them to create a Vivus instance
    // with each of them
    for (var i = myElementsVivus.length - 1; i >= 0; i--) {
      new Vivus(myElementsVivus[i], {duration: 50, type: 'async' }, myCallbackVivus);
    }
  });


  jQuery('#waterdrop').raindrops({color:'#03d665', canvasHeight:150, density: 0.1, frequency: 20});
  jQuery('#waterdrop.color-2').raindrops({color:'#5632d9', canvasHeight:150, density: 0.1, frequency: 20});
  jQuery('#waterdrop.color-3').raindrops({color:'#0734e9', canvasHeight:150, density: 0.1, frequency: 20});
  jQuery('#waterdrop.color-4').raindrops({color:'#ee5826', canvasHeight:150, density: 0.1, frequency: 20});
  jQuery('#waterdrop.color-5').raindrops({color:'#01e3de', canvasHeight:150, density: 0.1, frequency: 20});
  jQuery('#waterdrop.color-6').raindrops({color:'#6633a5', canvasHeight:150, density: 0.1, frequency: 20});
  jQuery('#waterdrop.color-7').raindrops({color:'#7603f3', canvasHeight:150, density: 0.1, frequency: 20});
  jQuery('#waterdrop.color-8').raindrops({color:'#0df0a8', canvasHeight:150, density: 0.1, frequency: 20});
  jQuery('#waterdrop.color-9').raindrops({color:'#6f2982', canvasHeight:150, density: 0.1, frequency: 20});
  jQuery('#waterdrop.color-10').raindrops({color:'#9651e9', canvasHeight:150, density: 0.1, frequency: 20});



}
