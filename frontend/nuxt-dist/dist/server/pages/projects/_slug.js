exports.ids = [6];
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

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md_render; });
let replaceAt = function (string, find, replacement) {
  let findIndex = string.indexOf(find);
  return string.substr(0, findIndex) + replacement + string.substr(findIndex + find.length + 1);
};

let addAfter = function (string, find, replacement) {
  let findIndex = string.indexOf(find);

  if (findIndex === -1) {
    return string;
  }

  return string.substr(0, findIndex + find.length) + replacement + string.substr(findIndex + find.length + 1);
};

var getObjectByValue = function (array, key, value) {
  return array.filter(function (object) {
    return object[key] === value;
  });
};

function md_render(app, content) {
  let out = app.$md.render(content);
  let ret;
  out = String(out);
  ret = '<div class="markdowned">' + addAfter(out, "src=", `"${"http://localhost:1337"}`) + '</div>';
  return ret;
}

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0e13ac2d", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_339a6f9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_339a6f9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_339a6f9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_339a6f9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_339a6f9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".mcgill-sidebar-part[data-v-339a6f9c]{background:transparent;box-shadow:0 25px 98px 0 rgba(0,0,0,.1)}.hour-box[data-v-339a6f9c],.year-box[data-v-339a6f9c]{background:#1b1d20;min-height:100px;margin-bottom:30px;width:100%;padding:29px 10px}.techs img[data-v-339a6f9c]{border-radius:100%;width:40px;float:left;height:40px;margin-left:10px}.row.f-box[data-v-339a6f9c]{margin:auto}.ul1>li a[data-v-339a6f9c]{font-size:16px;color:#999;text-decoration:none;display:block;background:#0e1118;border-radius:6px;width:auto;float:left;margin-bottom:10px;margin-top:10px;padding:3px;text-align:center}.ul1>li[data-v-339a6f9c]{padding:0;border-bottom:none;height:auto}.ul1[data-v-339a6f9c]{padding:0;margin:0;list-style:none;display:inline;width:100%;min-height:20px}.d-box h3[data-v-339a6f9c]{color:rgba(142,122,11,.67843);font-weight:900;text-shadow:0 2px 4px #070a11}.author-company .img-circle[data-v-339a6f9c]{border-radius:100%;width:69px;height:69px;margin-top:-65px}.author-company h3[data-v-339a6f9c]{margin-top:-60px}.mcgill-sidebar-block[data-v-339a6f9c]{margin-bottom:60px;position:relative;margin-top:-31px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/_slug.vue?vue&type=template&id=339a6f9c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mcgill-cases"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-339a6f9c>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-339a6f9c>","</div>",[_vm._ssrNode("<div data-animate-effect=\"fadeInLeft\" class=\"col-md-8 animate-box\" data-v-339a6f9c><div class=\"mb-30\" data-v-339a6f9c><img"+(_vm._ssrAttr("src",_vm.getStrapiMedia(_vm.project[0].defaultPicture.url)))+" alt class=\"img-fluid mb-30 radius-5 elevation-6\" data-v-339a6f9c> <h3 data-v-339a6f9c>"+_vm._ssrEscape(_vm._s(_vm.project[0].name))+"</h3> <div data-v-339a6f9c>"+(_vm._s(_vm.md_render(this,_vm.project[0].description)))+"</div></div> "+((_vm.project[0].media.length>0)?("<div class=\"row mb-30\" data-v-339a6f9c>"+(_vm._ssrList((_vm.project[0].media),function(item){return ("<div class=\"col-md-4 gallery-item\" data-v-339a6f9c><a"+(_vm._ssrAttr("href",_vm.getStrapiMedia(item.url)))+" class=\"img-zoom\" data-v-339a6f9c><div class=\"gallery-box\" data-v-339a6f9c><div class=\"gallery-img\" data-v-339a6f9c><img"+(_vm._ssrAttr("src",_vm.getStrapiMedia(item.url)))+(_vm._ssrAttr("alt",_vm.project.name))+" class=\"img-fluid mx-auto d-block rounded\" data-v-339a6f9c></div> <div class=\"gallery-detail text-center\" data-v-339a6f9c></div></div></a></div>")}))+"</div>"):"<!---->")+"</div> "),_vm._ssrNode("<div data-animate-effect=\"fadeInLeft\" class=\"col-md-4 animate-box \" data-v-339a6f9c>","</div>",[_vm._ssrNode("<div class=\"mcgill-sidebar-part\" data-v-339a6f9c>","</div>",[_vm._ssrNode("<div class=\"mcgill-sidebar-block mcgill-sidebar-block-categories\" data-v-339a6f9c>","</div>",[_vm._ssrNode("<div class=\"row d-box\" data-v-339a6f9c><div class=\"col-md-6 \" data-v-339a6f9c><div class=\"hour-box elevation-8\" data-v-339a6f9c><h3 class=\"text-center\" data-v-339a6f9c>"+_vm._ssrEscape("~"+_vm._s(_vm.project[0].working_hours)+" "+_vm._s(_vm.global.hours_post_string))+"</h3></div></div> <div class=\"col-md-6 \" data-v-339a6f9c><div class=\"hour-box elevation-8\" data-v-339a6f9c><h3 class=\"text-center\" data-v-339a6f9c>"+_vm._ssrEscape(_vm._s(_vm.project[0].year))+"</h3></div></div></div> "+((_vm.project[0].current_project_status)?("<div class=\"row d-box\" data-v-339a6f9c><div class=\"col-md-12\" data-v-339a6f9c><div class=\"hour-box elevation-8\" data-v-339a6f9c><h3 class=\"text-center \" data-v-339a6f9c>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.global.current_status_title)+":")+"<span data-v-339a6f9c>"+_vm._ssrEscape(_vm._s(_vm.project[0].current_project_status.name))+"</span></h3> <p class=\"text-center\" data-v-339a6f9c>"+_vm._ssrEscape(_vm._s(_vm.project[0].current_project_status.description))+"</p></div></div></div>"):"<!---->")+" "+((_vm.project[0].project_language)?("<div class=\"row d-box\" data-v-339a6f9c><div class=\"col-md-12\" data-v-339a6f9c><div class=\"hour-box elevation-8\" data-v-339a6f9c><h3 class=\"text-center \" data-v-339a6f9c>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.global.project_language_title)+"\n                  ")+"</h3> <p class=\"text-center\" data-v-339a6f9c>"+_vm._ssrEscape(_vm._s(_vm.project[0].project_language.name))+"</p> <p class=\"text-center\" data-v-339a6f9c>"+_vm._ssrEscape(_vm._s(_vm.project[0].project_language.description))+"</p></div></div></div>"):"<!---->")+" "),(_vm.project[0].technologies.length>0)?_vm._ssrNode("<div class=\"row d-box \" data-v-339a6f9c>","</div>",[_vm._ssrNode("<div class=\"col-md-12\" data-v-339a6f9c>","</div>",[_vm._ssrNode("<div class=\" hour-box elevation-8\" data-v-339a6f9c>","</div>",[_vm._ssrNode("<h3 class=\"text-center \" data-v-339a6f9c>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.global.technology_section_title)+"\n                  ")+"</h3> "),_vm._ssrNode("<div class=\"techs\" data-v-339a6f9c>","</div>",_vm._l((_vm.project[0].technologies),function(tech){return _c('nuxt-link',{attrs:{"to":'/technologies/'+tech.slug}},[_c('img',{attrs:{"src":_vm.getStrapiMedia(tech.logo.url),"alt":tech.name}})])}),1)],2)])]):_vm._e(),_vm._ssrNode(" "+((_vm.project[0].company)?("<div class=\"row d-box\" data-v-339a6f9c><div class=\"col-md-12\" data-v-339a6f9c><div class=\"author-company hour-box elevation-8\" data-v-339a6f9c><img"+(_vm._ssrAttr("src",_vm.getStrapiMedia(_vm.project[0].company.logo.url)))+(_vm._ssrAttr("alt",_vm.project[0].company.company_name))+" class=\"img-circle elevation-5\" data-v-339a6f9c> <h3 class=\"text-center\" data-v-339a6f9c>"+_vm._ssrEscape(_vm._s(_vm.global.company_author_title))+"</h3> <h4 class=\"author_name text-center\" data-v-339a6f9c>"+_vm._ssrEscape(_vm._s(_vm.project[0].company.company_name))+"</h4></div></div></div>"):"<!---->")+" "),(_vm.project[0].url)?_vm._ssrNode("<div class=\"row d-box\" data-v-339a6f9c>","</div>",[_c('nuxt-link',{staticClass:"button btn-success",attrs:{"to":_vm.project[0].url}},[_vm._v(_vm._s(_vm.global.preview_button_title))])],1):_vm._e()],2)])])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/projects/_slug.vue?vue&type=template&id=339a6f9c&scoped=true&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(5);

// EXTERNAL MODULE: ./assets/js/main.js
var main = __webpack_require__(69);

// EXTERNAL MODULE: ./helpers/functions.js
var functions = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/_slug.vue?vue&type=script&lang=js&
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



/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "ProjectSlug",
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */],
    md_render: functions["a" /* md_render */]
  },

  async asyncData({
    $strapi,
    params
  }) {
    return {
      project: await $strapi.find('projects', {
        slug: params.slug
      }),
      global: await $strapi.find('projectpage'),
      categories: await $strapi.find('project-categories')
    };
  },

  mounted() {
    Object(main["a" /* default */])();
  }

});
// CONCATENATED MODULE: ./pages/projects/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var projects_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/projects/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  projects_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "339a6f9c",
  "40d925f9"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map