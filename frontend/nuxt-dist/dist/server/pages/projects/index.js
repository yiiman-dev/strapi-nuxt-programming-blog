exports.ids = [7];
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

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/index.vue?vue&type=template&id=2e9ad3dc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mcgill-blog"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-2e9ad3dc>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-2e9ad3dc><div data-animate-effect=\"fadeInLeft\" class=\"col-md-12 mb-40 animate-box\" data-v-2e9ad3dc><span class=\"heading-meta\" data-v-2e9ad3dc>"+_vm._ssrEscape(_vm._s(_vm.count_text()))+"</span> <h2 class=\"mcgill-heading\" data-v-2e9ad3dc>"+_vm._ssrEscape(_vm._s(_vm.global.page_title))+"</h2></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-2e9ad3dc>","</div>",[_vm._ssrNode("<div data-animate-effect=\"fadeInLeft\" class=\"col-md-8 animate-box\" data-v-2e9ad3dc>","</div>",[_vm._l((_vm.projects),function(project){return _c('ProjectCardWidget',{attrs:{"project":project}})}),_vm._ssrNode(" "+((false)?(undefined):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-animate-effect=\"fadeInLeft\" class=\"col-md-4 animate-box \" data-v-2e9ad3dc>","</div>",[_vm._ssrNode("<div class=\"mcgill-sidebar-part elevation-3 radius-5\" data-v-2e9ad3dc>","</div>",[(_vm.categories.length>0)?_vm._ssrNode("<div class=\"mcgill-sidebar-block mcgill-sidebar-block-categories\" data-v-2e9ad3dc>","</div>",[_vm._ssrNode("<div class=\"mcgill-sidebar-block-title\" data-v-2e9ad3dc>"+_vm._ssrEscape(" "+_vm._s(_vm.global.sidebar_categories_title))+"</div> "),_vm._ssrNode("<div class=\"mcgill-sidebar-block-content\" data-v-2e9ad3dc>","</div>",[_vm._ssrNode("<ul class=\"ul1\" data-v-2e9ad3dc>","</ul>",_vm._l((_vm.categories),function(cat){return _vm._ssrNode("<li data-v-2e9ad3dc>","</li>",[_vm._ssrNode("<a href=\"#\" data-v-2e9ad3dc>","</a>",[_c('b-form-checkbox',{attrs:{"value":cat.id,"unchecked-value":""},model:{value:(_vm.selected_categories),callback:function ($$v) {_vm.selected_categories=$$v},expression:"selected_categories"}},[_vm._v("\n                        "+_vm._s(cat.title)+"\n                      ")])],1)])}),0)])],2):_vm._e(),_vm._ssrNode(" "),(_vm.technologies.length>0)?_vm._ssrNode("<div class=\"mcgill-sidebar-block mcgill-sidebar-block-tags\" data-v-2e9ad3dc>","</div>",[_vm._ssrNode("<div class=\"mcgill-sidebar-block-title\" data-v-2e9ad3dc>"+_vm._ssrEscape(" "+_vm._s(_vm.global.sidebar_technologies_title))+"</div> "),_vm._ssrNode("<div class=\"mcgill-sidebar-block-content\" data-v-2e9ad3dc>","</div>",[_vm._ssrNode("<ul class=\"ul1\" data-v-2e9ad3dc>","</ul>",_vm._l((_vm.technologies),function(tech){return _vm._ssrNode("<li data-v-2e9ad3dc>","</li>",[_vm._ssrNode("<a href=\"#\" data-v-2e9ad3dc>","</a>",[_c('b-form-checkbox',{attrs:{"value":tech.id,"unchecked-value":""},model:{value:(_vm.selected_technologies),callback:function ($$v) {_vm.selected_technologies=$$v},expression:"selected_technologies"}},[_vm._v("\n                        "+_vm._s(tech.name)+"\n                      ")])],1)])}),0)])],2):_vm._e()],2)])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/projects/index.vue?vue&type=template&id=2e9ad3dc&scoped=true&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(5);

// EXTERNAL MODULE: ./assets/js/main.js
var main = __webpack_require__(69);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/widgets/ProjectCardWidget.vue?vue&type=template&id=11b639db&scoped=true&
var ProjectCardWidgetvue_type_template_id_11b639db_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-entry shadow-dark-5"},[_c('nuxt-link',{staticClass:"blog-img",attrs:{"to":'projects/'+_vm.project.slug}},[_c('img',{staticClass:"img-fluid",attrs:{"src":_vm.getStrapiMedia(_vm.project.defaultPicture.url),"alt":_vm.project.name}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"desc\" data-v-11b639db>","</div>",[(_vm.project.project_categories.length>0)?_vm._ssrNode("<span data-v-11b639db>","</span>",[_vm._l((_vm.project.project_categories),function(cat){return _c('nuxt-link',{attrs:{"to":'/projects/categories/'+cat.slug}},[_vm._v("\n                "+_vm._s(cat.title)+" -\n              ")])}),_vm._ssrNode(_vm._ssrEscape("\n              "+_vm._s(_vm.project.published_at)+"\n            "))],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<h3 data-v-11b639db>","</h3>",[_c('nuxt-link',{attrs:{"to":'projects/'+_vm.project.slug}},[_vm._v("\n        "+_vm._s(_vm.project.name)+"\n      ")])],1),_vm._ssrNode(_vm._ssrEscape("\n    "+_vm._s(_vm.project.short_description)+"\n  "))],2)],2)}
var ProjectCardWidgetvue_type_template_id_11b639db_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/widgets/ProjectCardWidget.vue?vue&type=template&id=11b639db&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/widgets/ProjectCardWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProjectCardWidgetvue_type_script_lang_js_ = ({
  name: "ProjectCardWidget",
  props: ['project'],
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  }
});
// CONCATENATED MODULE: ./components/widgets/ProjectCardWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_ProjectCardWidgetvue_type_script_lang_js_ = (ProjectCardWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/widgets/ProjectCardWidget.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  widgets_ProjectCardWidgetvue_type_script_lang_js_,
  ProjectCardWidgetvue_type_template_id_11b639db_scoped_true_render,
  ProjectCardWidgetvue_type_template_id_11b639db_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "11b639db",
  "48dcb6cd"
  
)

/* harmony default export */ var ProjectCardWidget = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var projectsvue_type_script_lang_js_ = ({
  name: "ProjectIndex",
  components: {
    ProjectCardWidget: ProjectCardWidget
  },

  data() {
    return {
      selected_technologies: [],
      selected_categories: []
    };
  },

  watch: {
    selected_technologies(old, n) {
      this.serve();
    },

    selected_categories(old, n) {
      this.serve();
    }

  },
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */],

    async serve() {
      let data = '';

      if (this.selected_technologies.length > 0 | this.selected_categories.length > 0) {
        data += '?';
      }

      if (this.selected_technologies.length > 0) {
        for (let b = 0; b < this.selected_technologies.length; b++) {
          data += "technologies.id_in=" + this.selected_technologies[b] + '&';
        }
      }

      if (this.selected_categories.length > 0) {
        for (let i = 0; i < this.selected_categories.length; i++) {
          data += "project_categories.id_in=" + this.selected_categories[i] + '&';
        }
      }

      this.projects = await this.$strapi.find('projects' + data);
    },

    count_text() {
      return String(this.global.projects_count_title).replace('{count}', this.project_count);
    }

  },

  async asyncData({
    $strapi,
    params
  }) {
    return {
      projects: await $strapi.find('projects'),
      project_count: await $strapi.count('projects'),
      categories: await $strapi.find('project-categories'),
      global: await $strapi.find('project-categories-page'),
      technologies: await $strapi.find('technologies')
    };
  },

  mounted() {
    Object(main["a" /* default */])();
  }

});
// CONCATENATED MODULE: ./pages/projects/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_projectsvue_type_script_lang_js_ = (projectsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/projects/index.vue



function projects_injectStyles (context) {
  
  
}

/* normalize component */

var projects_component = Object(componentNormalizer["a" /* default */])(
  pages_projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  projects_injectStyles,
  "2e9ad3dc",
  "428fc741"
  
)

/* harmony default export */ var projects = __webpack_exports__["default"] = (projects_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map