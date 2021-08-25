exports.ids = [4];
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

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=252deea2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mcgill-blog"},[_c('nuxt',{attrs:{"keep-alive":""}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid\" data-v-252deea2>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-252deea2><div data-animate-effect=\"fadeInLeft\" class=\"col-md-12 mb-40 animate-box\" data-v-252deea2><span class=\"heading-meta\" data-v-252deea2>"+_vm._ssrEscape(_vm._s(_vm.global.title))+"</span> <h2 class=\"mcgill-heading\" data-v-252deea2>"+_vm._ssrEscape(_vm._s(_vm.global.subtitle))+"</h2></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-252deea2>","</div>",[_vm._ssrNode("<div data-animate-effect=\"fadeInLeft\" class=\"col-md-8 animate-box\" data-v-252deea2>","</div>",[_vm._l((_vm.articles),function(item){return _vm._ssrNode("<div class=\"blog-entry\" data-v-252deea2>","</div>",[_c('nuxt-link',{staticClass:"blog-img",attrs:{"to":'/blog/'+item.slug}},[(item.image)?_c('img',{staticClass:"img-fluid",attrs:{"src":item.image?_vm.getStrapiMedia(item.image.url):'',"alt":item.title}}):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"desc\" data-v-252deea2>","</div>",[_vm._ssrNode("<span data-v-252deea2><a href=\"#\" data-v-252deea2>"+_vm._ssrEscape(_vm._s(item.category.name))+"</a>"+_vm._ssrEscape(" — "+_vm._s(item.published_at))+"</span> "),_vm._ssrNode("<h3 data-v-252deea2>","</h3>",[_c('nuxt-link',{staticClass:"blog-img",attrs:{"to":'/blog/'+item.slug}},[_vm._v("\n                "+_vm._s(item.title)+"\n              ")])],1),_vm._ssrNode(" <p data-v-252deea2>"+_vm._ssrEscape(_vm._s(item.description))+"</p>")],2)],2)}),_vm._ssrNode(" <div class=\"row\" data-v-252deea2><div class=\"col-md-12\" data-v-252deea2><ul class=\"mcgill-pagination-wrap text-center\" data-v-252deea2><li data-v-252deea2><a href=\"blog.html#\" data-v-252deea2><i class=\"fa fa-angle-left\" data-v-252deea2></i></a></li> <li data-v-252deea2><a href=\"blog.html#\" data-v-252deea2>1</a></li> <li data-v-252deea2><a href=\"blog.html#\" class=\"active\" data-v-252deea2>2</a></li> <li data-v-252deea2><a href=\"blog.html#\" data-v-252deea2>3</a></li> <li data-v-252deea2><a href=\"blog.html#\" data-v-252deea2><i class=\"fa fa-angle-right\" data-v-252deea2></i></a></li></ul></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-animate-effect=\"fadeInLeft\" class=\"col-md-4 animate-box\" data-v-252deea2>","</div>",[_vm._ssrNode("<div class=\"mcgill-sidebar-part\" data-v-252deea2>","</div>",[_vm._ssrNode("<div class=\"mcgill-sidebar-block mcgill-sidebar-block-search\" data-v-252deea2><form method=\"get\" class=\"mcgill-sidebar-search-form\" data-v-252deea2><input type=\"text\" id=\"search\""+(_vm._ssrAttr("placeholder",_vm.global.search_input_placeholder))+(_vm._ssrAttr("value",(_vm.q)))+" class=\"form-control search-field\" data-v-252deea2> <button type=\"submit\" class=\"fa fa-search mcgill-sidebar-search-submit\" data-v-252deea2></button></form></div> "),_vm._ssrNode("<div class=\"mcgill-sidebar-block mcgill-sidebar-block-categories\" data-v-252deea2>","</div>",[_vm._ssrNode("<div class=\"mcgill-sidebar-block-title\" data-v-252deea2>"+_vm._ssrEscape(" "+_vm._s(_vm.global.categories_title))+"</div> "),_vm._ssrNode("<div class=\"mcgill-sidebar-block-content\" data-v-252deea2>","</div>",[_vm._ssrNode("<ul class=\"ul1\" data-v-252deea2>","</ul>",_vm._l((_vm.categories),function(cat){return _vm._ssrNode("<li data-v-252deea2>","</li>",[_c('nuxt-link',{attrs:{"to":'/blog/category/'+cat.slug}},[_vm._v("\n                    "+_vm._s(cat.name)+"\n                  ")])],1)}),0)])],2),_vm._ssrNode(" "+((false)?(undefined):"<!---->")+" "+((false)?(undefined):"<!---->"))],2)])],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=252deea2&scoped=true&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(5);

// EXTERNAL MODULE: ./utils/seo.js
var seo = __webpack_require__(11);

// EXTERNAL MODULE: ./assets/js/main.js
var main = __webpack_require__(69);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  name: "index",

  head() {
    return {
      title: this.global.seo.metaTitle,
      meta: Object(seo["a" /* getMetaTags */])(this.global.seo)
    };
  },

  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  },

  data() {
    return {
      q: ''
    };
  },

  async asyncData({
    $strapi
  }) {
    return {
      articles: await $strapi.find('articles', {
        _limit: 20
      }),
      global: await $strapi.find('blogpage'),
      categories: await $strapi.find('categories')
    };
  },

  mounted() {
    Object(main["a" /* default */])();
  }

});
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/blog/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "252deea2",
  "70db0269"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map