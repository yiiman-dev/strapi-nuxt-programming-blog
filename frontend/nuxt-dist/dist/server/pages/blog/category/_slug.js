exports.ids = [3];
exports.modules = {

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/category/_slug.vue?vue&type=template&id=23923c96&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mcgill-blog"},[_c('nuxt',{attrs:{"keep-alive":""}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid\" data-v-23923c96>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-23923c96><div data-animate-effect=\"fadeInLeft\" class=\"col-md-12 mb-40 animate-box\" data-v-23923c96><span class=\"heading-meta\" data-v-23923c96>"+_vm._ssrEscape(_vm._s(_vm.global.title))+"</span> <h2 class=\"mcgill-heading\" data-v-23923c96>"+_vm._ssrEscape(_vm._s(_vm.global.subtitle))+"</h2></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-23923c96>","</div>",[_vm._ssrNode("<div data-animate-effect=\"fadeInLeft\" class=\"col-md-8 animate-box\" data-v-23923c96>","</div>",[_vm._l((_vm.articles),function(item){return _vm._ssrNode("<div class=\"blog-entry\" data-v-23923c96>","</div>",[_c('nuxt-link',{staticClass:"blog-img",attrs:{"to":'/blog/'+item.slug}},[(item.image)?_c('img',{staticClass:"img-fluid",attrs:{"src":item.image?_vm.getStrapiMedia(item.image.url):'',"alt":item.title}}):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"desc\" data-v-23923c96>","</div>",[_vm._ssrNode("<span data-v-23923c96><a href=\"#\" data-v-23923c96>"+_vm._ssrEscape(_vm._s(item.category.name))+"</a>"+_vm._ssrEscape(" — "+_vm._s(item.published_at))+"</span> "),_vm._ssrNode("<h3 data-v-23923c96>","</h3>",[_c('nuxt-link',{staticClass:"blog-img",attrs:{"to":'/blog/'+item.slug}},[_vm._v("\n                "+_vm._s(item.title)+"\n              ")])],1),_vm._ssrNode(" <p data-v-23923c96>"+_vm._ssrEscape(_vm._s(item.description))+"</p>")],2)],2)}),_vm._ssrNode(" "+((false)?(undefined):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-animate-effect=\"fadeInLeft\" class=\"col-md-4 animate-box\" data-v-23923c96>","</div>",[_vm._ssrNode("<div class=\"mcgill-sidebar-part\" data-v-23923c96>","</div>",[_vm._ssrNode("<div class=\"mcgill-sidebar-block mcgill-sidebar-block-categories\" data-v-23923c96>","</div>",[_vm._ssrNode("<div class=\"mcgill-sidebar-block-title\" data-v-23923c96>"+_vm._ssrEscape(" "+_vm._s(_vm.global.title))+"</div> "),_vm._ssrNode("<div class=\"mcgill-sidebar-block-content\" data-v-23923c96>","</div>",[_vm._ssrNode("<ul class=\"ul1\" data-v-23923c96>","</ul>",_vm._l((_vm.categories),function(cat){return _vm._ssrNode("<li data-v-23923c96>","</li>",[_c('nuxt-link',{attrs:{"to":'/blog/category/'+cat.slug}},[_vm._v("\n                    "+_vm._s(cat.name)+"\n                  ")])],1)}),0)])],2),_vm._ssrNode(" "+((false)?(undefined):"<!---->")+" "+((false)?(undefined):"<!---->"))],2)])],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/category/_slug.vue?vue&type=template&id=23923c96&scoped=true&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/category/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "CategorySlug",
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  },

  async asyncData({
    $strapi,
    params
  }) {
    return {
      articles: await $strapi.find('articles', {
        'category.slug': params.slug
      }),
      global: await $strapi.find('blogcategorypage'),
      categories: await $strapi.find('categories')
    };
  }

});
// CONCATENATED MODULE: ./pages/blog/category/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var category_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/blog/category/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  category_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23923c96",
  "eaefe79c"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map