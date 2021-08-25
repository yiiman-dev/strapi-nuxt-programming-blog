exports.ids = [1];
exports.modules = {

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  'use strict';

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  }; // Full Height

  var fullHeight = function () {
    if (!isMobile.any()) {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
      });
    }
  }; // Animations


  var contentWayPoint = function () {
    var i = 0;
    $('.animate-box').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('animated')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function () {
          $('body .animate-box.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');

              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight animated');
              } else {
                el.addClass('fadeInUp animated');
              }

              el.removeClass('item-animate');
            }, k * 200, 'easeInOutExpo');
          });
        }, 100);
      }
    }, {
      offset: '85%'
    });
  }; // Burger Menu


  var burgerMenu = function () {
    $('.js-mcgill-nav-toggle').on('click', function (event) {
      event.preventDefault();
      var $this = $(this);

      if ($('body').hasClass('offcanvas')) {
        $this.removeClass('active');
        $('body').removeClass('offcanvas');
      } else {
        $this.addClass('active');
        $('body').addClass('offcanvas');
      }
    });
  }; // outside of offcanvass


  var mobileMenuOutsideOn = function () {
    $(document).on(function (e) {
      var container = $("#mcgill-aside, .js-mcgill-nav-toggle");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('.js-mcgill-nav-toggle').removeClass('active');
        }
      }
    });
    $(window).scroll(function () {
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-mcgill-nav-toggle').removeClass('active');
      }
    });
  }; // Sub Menu


  $('#mcgill-main-menu li.mcgill-sub>a').on('click', function () {
    $(this).removeAttr('href');
    var element = $(this).parent('li');

    if (element.hasClass('open')) {
      element.removeClass('open');
      element.find('li').removeClass('open');
      element.find('ul').slideUp();
    } else {
      element.addClass('open');
      element.children('ul').slideDown();
      element.siblings('li').children('ul').slideUp();
      element.siblings('li').removeClass('open');
      element.siblings('li').find('li').removeClass('open');
      element.siblings('li').find('ul').slideUp();
    }
  });
  $('#mcgill-main-menu>ul>li.mcgill-sub>a').append('<span class="holder"></span>'); // Slider

  var sliderMain = function () {
    $('#mcgill-hero .flexslider').flexslider({
      animation: "fade",
      slideshowSpeed: 7000,
      directionNav: true,
      start: function () {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      },
      before: function () {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      }
    });
  }; // Sticky


  var stickyFunction = function () {
    var h = $('.image-content').outerHeight();

    if ($(window).width() <= 992) {
      $("#sticky_item").trigger("sticky_kit:detach");
    } else {
      $('.sticky-parent').removeClass('stick-detach');
      $("#sticky_item").trigger("sticky_kit:detach");
      $("#sticky_item").trigger("sticky_kit:unstick");
    }

    $(window).resize(function () {
      var h = $('.image-content').outerHeight();
      $('.sticky-parent').css('height', h);

      if ($(window).width() <= 992) {
        $("#sticky_item").trigger("sticky_kit:detach");
      } else {
        $('.sticky-parent').removeClass('stick-detach');
        $("#sticky_item").trigger("sticky_kit:detach");
        $("#sticky_item").trigger("sticky_kit:unstick");
        $("#sticky_item").stick_in_parent();
      }
    });
    $('.sticky-parent').css('height', h);
    $("#sticky_item").stick_in_parent();
  }; // Document on load.


  $(function () {
    fullHeight();
    contentWayPoint();
    burgerMenu();
    mobileMenuOutsideOn();
    sliderMain();
    stickyFunction();
  }); // Sections background image from data background

  var pageSection = $(".bg-img, section");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
  }); // Testimonials owlCarousel

  $('.testimonials .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: false,
    dots: false,
    nav: true,
    navText: ["<span class='lnr fa fa-angle-left'></span>", "<span class='lnr fa fa-angle-right'></span>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  }); // Clients owlCarousel

  $('.clients .owl-carousel').owlCarousel({
    loop: true,
    margin: 60,
    mouseDrag: true,
    autoplay: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        margin: 10,
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  }); // Team owlCarousel

  $('.team .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        autoplay: true
      },
      600: {
        items: 2,
        autoplay: true
      },
      1000: {
        items: 3,
        autoplay: false
      }
    }
  }); // Accordion

  $(".accordion").on("click", ".title", function () {
    $(this).next().slideDown();
    $(".accordion-info").not($(this).next()).slideUp();
  });
  $(".accordion").on("click", ".item", function () {
    $(this).addClass("active").siblings().removeClass("active");
  }); // img zoom

  $(".img-zoom").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    mainClass: "mfp-fade",
    gallery: {
      enabled: !0,
      navigateByImgClick: !0,
      preload: [0, 1]
    }
  }); // event binding

  var buttons = document.querySelectorAll(".btn .btn-contact .ul1 .tags .accordion");

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("on", function () {
      if (!button.classList.contains("active")) button.classList.add("active");else button.classList.remove("active");
    });
  }
});
;

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/SliderBlock.vue?vue&type=template&id=53c2c5d4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"js-fullheight",attrs:{"id":"mcgill-hero"}},[_vm._ssrNode("<div class=\"flexslider js-fullheight\" data-v-53c2c5d4><ul class=\"slides\" data-v-53c2c5d4>"+(_vm._ssrList((_vm.sliders),function(slide){return ("<li"+(_vm._ssrStyle(null,'background-image: url('+_vm.getStrapiMedia(slide.Image.url)+');', null))+" data-v-53c2c5d4><div class=\"overlay\" data-v-53c2c5d4></div> <div class=\"container-fluid\" data-v-53c2c5d4><div class=\"row\" data-v-53c2c5d4><div class=\"col-md-12 js-fullheight slider-text\" data-v-53c2c5d4><div class=\"slider-text-inner\" data-v-53c2c5d4><div class=\"desc\" data-v-53c2c5d4>"+((slide.Title.length>0)?("<h1 data-v-53c2c5d4>"+_vm._ssrEscape(_vm._s(slide.Title))+"</h1>"):"<!---->")+" "+((slide.Subtitle.length>0)?("<p data-v-53c2c5d4>"+_vm._ssrEscape(_vm._s(slide.Subtitle))+"</p>"):"<!---->")+" "+((slide.Url.length>0)?("<div class=\"btn btn-contact\" data-v-53c2c5d4><a"+(_vm._ssrAttr("href",slide.Url))+" data-v-53c2c5d4>"+_vm._ssrEscape(_vm._s(slide.UrlTitle))+"</a></div>"):"<!---->")+"</div></div></div></div></div></li>")}))+"</ul></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/SliderBlock.vue?vue&type=template&id=53c2c5d4&scoped=true&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/SliderBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SliderBlockvue_type_script_lang_js_ = ({
  name: "SliderBlock",
  props: ['sliders'],
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  }
});
// CONCATENATED MODULE: ./components/blocks/SliderBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var blocks_SliderBlockvue_type_script_lang_js_ = (SliderBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blocks/SliderBlock.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blocks_SliderBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "53c2c5d4",
  "89ead35a"
  
)

/* harmony default export */ var SliderBlock = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/ServicesBlock.vue?vue&type=template&id=13313ef5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mcgill-cases back-gray"},[_vm._ssrNode("<div class=\"container-fluid\"><div class=\"row\"><div data-animate-effect=\"fadeInLeft\" class=\"col-md-12 mb-40 animate-box\"><span class=\"heading-meta\">"+_vm._ssrEscape(_vm._s(_vm.session.title))+"</span> <h2 class=\"mcgill-heading\">"+_vm._ssrEscape(_vm._s(_vm.session.subtitle))+"</h2></div></div> <div class=\"row\">"+(_vm._ssrList((_vm.session.services),function(service){return ("<div data-animate-effect=\"fadeInLeft\" class=\"col-md-4 animate-box\"><div class=\"mcgill-services-container elevation-2 radius-5\"><div class=\"mcgill-services-img-area\"><span"+(_vm._ssrClass(null,'fi fi '+service.icon))+"></span></div> <div class=\"mcgill-services-text-area\"><h4 class=\"mcgill-services-heading\">"+_vm._ssrEscape(_vm._s(service.title))+"</h4> <p>"+_vm._ssrEscape(_vm._s(service.description))+"</p></div></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/ServicesBlock.vue?vue&type=template&id=13313ef5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/ServicesBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServicesBlockvue_type_script_lang_js_ = ({
  name: "ServicesBlock",
  props: ['session']
});
// CONCATENATED MODULE: ./components/blocks/ServicesBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var blocks_ServicesBlockvue_type_script_lang_js_ = (ServicesBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blocks/ServicesBlock.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blocks_ServicesBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "162bf3b6"
  
)

/* harmony default export */ var ServicesBlock = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/TestimotionalBlock.vue?vue&type=template&id=3935c121&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mcgill-testimonial testimonials bg-img bg-fixed",attrs:{"data-background":_vm.getStrapiMedia(_vm.session.background?_vm.session.background.url:'')}},[_vm._ssrNode("<div class=\"container-fluid\" data-v-3935c121><div class=\"row\" data-v-3935c121><div class=\"section-head col-md-4\" data-v-3935c121><h4 data-v-3935c121>"+_vm._ssrEscape(_vm._s(_vm.session.title))+"</h4> <p data-v-3935c121>"+_vm._ssrEscape(_vm._s(_vm.session.content))+"</p></div> <div class=\"owl-carousel owl-theme col-md-8\" data-v-3935c121>"+(_vm._ssrList((_vm.session.testimotionals),function(item){return ("<div class=\"item-box\" data-v-3935c121><span class=\"quote\" data-v-3935c121><img"+(_vm._ssrAttr("src",_vm.getStrapiMedia('images/quot.png')))+" alt data-v-3935c121></span> <p data-v-3935c121>"+_vm._ssrEscape(_vm._s(item.description))+"</p> <div class=\"info\" data-v-3935c121><div class=\"author-img\" data-v-3935c121><img"+(_vm._ssrAttr("src",item.Author?_vm.getStrapiMedia(item.Author.url):'#'))+(_vm._ssrAttr("alt",item.name))+" data-v-3935c121></div> <div class=\"cont\" data-v-3935c121><h6 data-v-3935c121>"+_vm._ssrEscape(_vm._s(item.name))+"</h6> <span data-v-3935c121>"+_vm._ssrEscape(_vm._s(item.semat))+"</span></div></div></div>")}))+"</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/TestimotionalBlock.vue?vue&type=template&id=3935c121&scoped=true&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/TestimotionalBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TestimotionalBlockvue_type_script_lang_js_ = ({
  name: "TestimotionalBlock",
  props: ['session'],
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  }
});
// CONCATENATED MODULE: ./components/blocks/TestimotionalBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var blocks_TestimotionalBlockvue_type_script_lang_js_ = (TestimotionalBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blocks/TestimotionalBlock.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blocks_TestimotionalBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3935c121",
  "52c3099e"
  
)

/* harmony default export */ var TestimotionalBlock = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/LogosBlock.vue?vue&type=template&id=93bb1800&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mcgill-clients clients"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-93bb1800><div class=\"row\" data-v-93bb1800><div class=\"col-md-12 owl-carousel owl-theme\" data-v-93bb1800>"+(_vm._ssrList((_vm.session.companies),function(sec){return ("<div class=\"client-logo  radius-5\" data-v-93bb1800><a href=\"#\" data-v-93bb1800><img"+(_vm._ssrAttr("src",sec.logo?_vm.getStrapiMedia(sec.logo.url):''))+" alt class=\"radius-5 elevation-7\" data-v-93bb1800></a></div>")}))+"</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/LogosBlock.vue?vue&type=template&id=93bb1800&scoped=true&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/LogosBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LogosBlockvue_type_script_lang_js_ = ({
  name: "LogosBlock",
  props: ['session'],
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  }
});
// CONCATENATED MODULE: ./components/blocks/LogosBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var blocks_LogosBlockvue_type_script_lang_js_ = (LogosBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blocks/LogosBlock.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blocks_LogosBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "93bb1800",
  "65e78424"
  
)

/* harmony default export */ var LogosBlock = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/ProjectsBlock.vue?vue&type=template&id=6b91f0b8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mcgill-cases"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-6b91f0b8>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-6b91f0b8><div data-animate-effect=\"fadeInLeft\" class=\"col-md-12 mb-40 animate-box\" data-v-6b91f0b8><span class=\"heading-meta\" data-v-6b91f0b8>"+_vm._ssrEscape(_vm._s(_vm.session.title))+"</span> <h2 class=\"mcgill-heading\" data-v-6b91f0b8>"+_vm._ssrEscape(_vm._s(_vm.session.subtitle))+"</h2></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-6b91f0b8>","</div>",_vm._l((_vm.session.projects),function(item){return _vm._ssrNode("<div class=\"col-md-4\" data-v-6b91f0b8>","</div>",[_vm._ssrNode("<div class=\"item elevation-4 radius-5\" data-v-6b91f0b8>","</div>",[_vm._ssrNode("<div class=\"position-re o-hidden\" data-v-6b91f0b8><img"+(_vm._ssrAttr("src",item.defaultPicture?_vm.getStrapiMedia(item.defaultPicture.url):''))+(_vm._ssrAttr("alt",item.name))+" class=\"radius-5 elevation-6\" data-v-6b91f0b8></div> "),_vm._ssrNode("<div class=\"con elevation-6 radius-5\" data-v-6b91f0b8>","</div>",[_c('nuxt-link',{attrs:{"to":'/project/'+item.slug}},[_c('h5',[_vm._v(_vm._s(item.name))])])],1)],2)])}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/ProjectsBlock.vue?vue&type=template&id=6b91f0b8&scoped=true&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/ProjectsBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProjectsBlockvue_type_script_lang_js_ = ({
  name: "ProjectsBlock",
  props: ['session'],
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  }
});
// CONCATENATED MODULE: ./components/blocks/ProjectsBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var blocks_ProjectsBlockvue_type_script_lang_js_ = (ProjectsBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blocks/ProjectsBlock.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blocks_ProjectsBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b91f0b8",
  "180d69cc"
  
)

/* harmony default export */ var ProjectsBlock = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/BlogBlock.vue?vue&type=template&id=2acc2e4d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mcgill-blog"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-2acc2e4d>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-2acc2e4d><div data-animate-effect=\"fadeInLeft\" class=\"col-md-12 mb-40 animate-box\" data-v-2acc2e4d><span class=\"heading-meta\" data-v-2acc2e4d>"+_vm._ssrEscape(_vm._s(_vm.session.title))+"</span> <h2 class=\"mcgill-heading\" data-v-2acc2e4d>"+_vm._ssrEscape(_vm._s(_vm.session.subtitle))+"</h2></div></div> "),(_vm.articles)?_vm._ssrNode("<div class=\"row\" data-v-2acc2e4d>","</div>",_vm._l((_vm.articles),function(item){return _vm._ssrNode("<div class=\"col-md-4\" data-v-2acc2e4d>","</div>",[_vm._ssrNode("<div class=\"blog-entry elevation-5 radius-5\" data-v-2acc2e4d>","</div>",[_c('nuxt-link',{staticClass:"blog-img",attrs:{"to":'/blog/'+item.slug}},[_c('img',{staticClass:"img-fluid",attrs:{"src":_vm.getStrapiMedia(item.image.url),"alt":item.title}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"desc\" data-v-2acc2e4d>","</div>",[_vm._ssrNode("<span data-v-2acc2e4d>","</span>",[_c('nuxt-link',{attrs:{"to":'/blog/'+item.slug}},[_vm._v("\n                "+_vm._s(item.title)+"\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<h4 data-v-2acc2e4d>","</h4>",[_c('nuxt-link',{attrs:{"to":'/blog/'+item.slug}},[_vm._v("\n                "+_vm._s(item.description)+"\n              ")])],1),_vm._ssrNode(" <span class=\"text-right\" data-v-2acc2e4d>"+_vm._ssrEscape(_vm._s(item.published_at))+"</span>")],2)],2)])}),0):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/BlogBlock.vue?vue&type=template&id=2acc2e4d&scoped=true&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/BlogBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BlogBlockvue_type_script_lang_js_ = ({
  name: "BlogBlock",
  props: ['session', 'articles'],
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  }
});
// CONCATENATED MODULE: ./components/blocks/BlogBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var blocks_BlogBlockvue_type_script_lang_js_ = (BlogBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blocks/BlogBlock.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blocks_BlogBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2acc2e4d",
  "2fa1ff1c"
  
)

/* harmony default export */ var BlogBlock = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_slug.vue?vue&type=template&id=bb6cea0a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nuxt',{attrs:{"keep-alive":""}}),_vm._ssrNode(" "),(_vm.pages.length && _vm.pages[0].Slider.length)?_c('SliderBlock',{attrs:{"sliders":_vm.pages[0].Slider}}):_vm._e(),_vm._ssrNode(" "),_vm._l((_vm.pages[0].Sections),function(sec){return _vm._ssrNode("<div>","</div>",[(sec.__component==='sections.services')?_c('ServicesBlock',{attrs:{"session":sec}}):_vm._e(),_vm._ssrNode(" "),(sec.__component==='sections.testimotional')?_c('TestimotionalBlock',{attrs:{"session":sec}}):_vm._e(),_vm._ssrNode(" "),(sec.__component==='sections.logos')?_c('LogosBlock',{attrs:{"session":sec}}):_vm._e(),_vm._ssrNode(" "),(sec.__component==='sections.projects')?_c('ProjectsBlock',{attrs:{"session":sec}}):_vm._e(),_vm._ssrNode(" "),(sec.__component==='sections.news')?_c('BlogBlock',{attrs:{"session":sec}}):_vm._e()],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_slug.vue?vue&type=template&id=bb6cea0a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Articles.vue?vue&type=template&id=d3cb13ec&
var Articlesvue_type_template_id_d3cb13ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div uk-grid class=\"uk-child-width-1-2\">","</div>",[_vm._ssrNode("<div>","</div>",_vm._l((_vm.leftArticles),function(article){return _c('ArticleCard',{key:article.id,attrs:{"article":article}})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div uk-grid class=\"uk-child-width-1-2@m uk-grid-match\">","</div>",_vm._l((_vm.rightArticles),function(article){return _c('ArticleCard',{key:article.id,attrs:{"article":article}})}),1)])],2)])}
var Articlesvue_type_template_id_d3cb13ec_staticRenderFns = []


// CONCATENATED MODULE: ./components/Articles.vue?vue&type=template&id=d3cb13ec&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/single/ArticleCard.vue?vue&type=template&id=78a2c33e&
var ArticleCardvue_type_template_id_78a2c33e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{key:_vm.article.id,staticClass:"uk-link-reset",attrs:{"to":{ name: 'articles-slug', params: { slug: _vm.article.slug } }}},[_c('div',{staticClass:"uk-card uk-card-muted"},[_c('div',{staticClass:"uk-card-media-top"},[_c('img',{attrs:{"src":_vm.getStrapiMedia(_vm.article.image.url),"height":"100"}})]),_vm._v(" "),_c('div',{staticClass:"uk-card-body"},[(_vm.article.category)?_c('p',{staticClass:"uk-text-uppercase",attrs:{"id":"category"}},[_vm._v("\n        "+_vm._s(_vm.article.category.name)+"\n      ")]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"uk-text-large",attrs:{"id":"title"}},[_vm._v(_vm._s(_vm.article.title))]),_vm._v(" "),_c('hr',{staticClass:"uk-divider-small"}),_vm._v(" "),_c('div',{staticClass:"uk-grid-small uk-flex-left",attrs:{"data-uk-grid":"true"}},[_c('div',[_c('img',{staticClass:"avatar",staticStyle:{"position":"static","border-radius":"50%","object-fit":"cover"},attrs:{"src":_vm.getStrapiMedia(_vm.article.author.picture.url),"width":"40px","height":"40px","alt":_vm.article.title}})]),_vm._v(" "),_c('div',{staticClass:"uk-width-expand"},[_c('p',{staticClass:"uk-margin-remove-bottom"},[_vm._v(_vm._s(_vm.article.author.name))])])])])])])}
var ArticleCardvue_type_template_id_78a2c33e_staticRenderFns = []


// CONCATENATED MODULE: ./components/single/ArticleCard.vue?vue&type=template&id=78a2c33e&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/single/ArticleCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ArticleCardvue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  }
});
// CONCATENATED MODULE: ./components/single/ArticleCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var single_ArticleCardvue_type_script_lang_js_ = (ArticleCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/single/ArticleCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  single_ArticleCardvue_type_script_lang_js_,
  ArticleCardvue_type_template_id_78a2c33e_render,
  ArticleCardvue_type_template_id_78a2c33e_staticRenderFns,
  false,
  null,
  null,
  "fc91e5e2"
  
)

/* harmony default export */ var ArticleCard = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Articles.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Articlesvue_type_script_lang_js_ = ({
  components: {
    ArticleCard: ArticleCard
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.length / 5);
    },

    leftArticles() {
      return this.articles.slice(0, this.leftArticlesCount);
    },

    rightArticles() {
      return this.articles.slice(this.leftArticlesCount, this.articles.length);
    }

  }
});
// CONCATENATED MODULE: ./components/Articles.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Articlesvue_type_script_lang_js_ = (Articlesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Articles.vue





/* normalize component */

var Articles_component = Object(componentNormalizer["a" /* default */])(
  components_Articlesvue_type_script_lang_js_,
  Articlesvue_type_template_id_d3cb13ec_render,
  Articlesvue_type_template_id_d3cb13ec_staticRenderFns,
  false,
  null,
  null,
  "0d4d7cad"
  
)

/* harmony default export */ var Articles = (Articles_component.exports);
// EXTERNAL MODULE: ./utils/seo.js
var seo = __webpack_require__(11);

// EXTERNAL MODULE: ./components/blocks/SliderBlock.vue + 4 modules
var SliderBlock = __webpack_require__(71);

// EXTERNAL MODULE: ./components/blocks/ServicesBlock.vue + 4 modules
var ServicesBlock = __webpack_require__(72);

// EXTERNAL MODULE: ./components/blocks/TestimotionalBlock.vue + 4 modules
var TestimotionalBlock = __webpack_require__(73);

// EXTERNAL MODULE: ./components/blocks/LogosBlock.vue + 4 modules
var LogosBlock = __webpack_require__(74);

// EXTERNAL MODULE: ./components/blocks/ProjectsBlock.vue + 4 modules
var ProjectsBlock = __webpack_require__(75);

// EXTERNAL MODULE: ./components/blocks/BlogBlock.vue + 4 modules
var BlogBlock = __webpack_require__(76);

// EXTERNAL MODULE: ./assets/js/main.js
var main = __webpack_require__(69);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    BlogBlock: BlogBlock["a" /* default */],
    ProjectsBlock: ProjectsBlock["a" /* default */],
    LogosBlock: LogosBlock["a" /* default */],
    TestimotionalBlock: TestimotionalBlock["a" /* default */],
    ServicesBlock: ServicesBlock["a" /* default */],
    SliderBlock: SliderBlock["a" /* default */],
    Articles: Articles
  },

  async asyncData({
    $strapi,
    params
  }) {
    return {
      pages: await $strapi.find("pages", {
        slug: params.slug
      })
    };
  },

  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  },

  mounted() {
    Object(main["a" /* default */])();
  }

});
// CONCATENATED MODULE: ./pages/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/_slug.vue





/* normalize component */

var _slug_component = Object(componentNormalizer["a" /* default */])(
  pages_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "86207114"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (_slug_component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map