(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{413:function(t,e,n){"use strict";n(11),n(166),n(39),n(85);e.a=function(){var t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}};$("#mcgill-main-menu li.mcgill-sub>a").on("click",(function(){$(this).removeAttr("href");var element=$(this).parent("li");element.hasClass("open")?(element.removeClass("open"),element.find("li").removeClass("open"),element.find("ul").slideUp()):(element.addClass("open"),element.children("ul").slideDown(),element.siblings("li").children("ul").slideUp(),element.siblings("li").removeClass("open"),element.siblings("li").find("li").removeClass("open"),element.siblings("li").find("ul").slideUp())})),$("#mcgill-main-menu>ul>li.mcgill-sub>a").append('<span class="holder"></span>');$((function(){var e;t.any()||($(".js-fullheight").css("height",$(window).height()),$(window).resize((function(){$(".js-fullheight").css("height",$(window).height())}))),$(".animate-box").waypoint((function(t){"down"!==t||$(this.element).hasClass("animated")||($(this.element).addClass("item-animate"),setTimeout((function(){$("body .animate-box.item-animate").each((function(t){var e=$(this);setTimeout((function(){var t=e.data("animate-effect");"fadeIn"===t?e.addClass("fadeIn animated"):"fadeInLeft"===t?e.addClass("fadeInLeft animated"):"fadeInRight"===t?e.addClass("fadeInRight animated"):e.addClass("fadeInUp animated"),e.removeClass("item-animate")}),200*t,"easeInOutExpo")}))}),100))}),{offset:"85%"}),$(".js-mcgill-nav-toggle").on("click",(function(t){t.preventDefault();var e=$(this);$("body").hasClass("offcanvas")?(e.removeClass("active"),$("body").removeClass("offcanvas")):(e.addClass("active"),$("body").addClass("offcanvas"))})),$(document).on((function(t){var e=$("#mcgill-aside, .js-mcgill-nav-toggle");e.is(t.target)||0!==e.has(t.target).length||$("body").hasClass("offcanvas")&&($("body").removeClass("offcanvas"),$(".js-mcgill-nav-toggle").removeClass("active"))})),$(window).scroll((function(){$("body").hasClass("offcanvas")&&($("body").removeClass("offcanvas"),$(".js-mcgill-nav-toggle").removeClass("active"))})),$("#mcgill-hero .flexslider").flexslider({animation:"fade",slideshowSpeed:7e3,directionNav:!0,start:function(){setTimeout((function(){$(".slider-text").removeClass("animated fadeInUp"),$(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")}),500)},before:function(){setTimeout((function(){$(".slider-text").removeClass("animated fadeInUp"),$(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")}),500)}}),e=$(".image-content").outerHeight(),$(window).width()<=992?$("#sticky_item").trigger("sticky_kit:detach"):($(".sticky-parent").removeClass("stick-detach"),$("#sticky_item").trigger("sticky_kit:detach"),$("#sticky_item").trigger("sticky_kit:unstick")),$(window).resize((function(){var t=$(".image-content").outerHeight();$(".sticky-parent").css("height",t),$(window).width()<=992?$("#sticky_item").trigger("sticky_kit:detach"):($(".sticky-parent").removeClass("stick-detach"),$("#sticky_item").trigger("sticky_kit:detach"),$("#sticky_item").trigger("sticky_kit:unstick"),$("#sticky_item").stick_in_parent())})),$(".sticky-parent").css("height",e),$("#sticky_item").stick_in_parent()})),$(".bg-img, section").each((function(t){$(this).attr("data-background")&&$(this).css("background-image","url("+$(this).data("background")+")")})),$(".testimonials .owl-carousel").owlCarousel({loop:!0,margin:30,mouseDrag:!0,autoplay:!1,dots:!1,nav:!0,navText:["<span class='lnr fa fa-angle-left'></span>","<span class='lnr fa fa-angle-right'></span>"],responsiveClass:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:2}}}),$(".clients .owl-carousel").owlCarousel({loop:!0,margin:60,mouseDrag:!0,autoplay:!0,dots:!1,responsiveClass:!0,responsive:{0:{margin:10,items:2},600:{items:3},1e3:{items:5}}}),$(".team .owl-carousel").owlCarousel({loop:!0,margin:0,autoplay:!1,dots:!0,responsiveClass:!0,responsive:{0:{items:1,autoplay:!0},600:{items:2,autoplay:!0},1e3:{items:3,autoplay:!1}}}),$(".accordion").on("click",".title",(function(){$(this).next().slideDown(),$(".accordion-info").not($(this).next()).slideUp()})),$(".accordion").on("click",".item",(function(){$(this).addClass("active").siblings().removeClass("active")})),$(".img-zoom").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-fade",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}});for(var e=document.querySelectorAll(".btn .btn-contact .ul1 .tags .accordion"),i=0;i<e.length;i++){var button=e[i];button.addEventListener("on",(function(){button.classList.contains("active")?button.classList.remove("active"):button.classList.add("active")}))}}},414:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(1);function o(t,content){var e,n,o,r,c=t.$md.render(content);return c=String(c),'<div class="markdowned">'+(e=c,n="src=",o='"'.concat("http://localhost:1337"),(-1===(r=e.indexOf(n))?e:e.substr(0,r+n.length)+o+e.substr(r+n.length+1))+"</div>")}},421:function(t,e,n){var content=n(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("0e13ac2d",content,!0,{sourceMap:!1})},422:function(t,e,n){"use strict";n(421)},423:function(t,e,n){var o=n(48)(!1);o.push([t.i,".mcgill-sidebar-part[data-v-339a6f9c]{background:transparent;box-shadow:0 25px 98px 0 rgba(0,0,0,.1)}.hour-box[data-v-339a6f9c],.year-box[data-v-339a6f9c]{background:#1b1d20;min-height:100px;margin-bottom:30px;width:100%;padding:29px 10px}.techs img[data-v-339a6f9c]{border-radius:100%;width:40px;float:left;height:40px;margin-left:10px}.row.f-box[data-v-339a6f9c]{margin:auto}.ul1>li a[data-v-339a6f9c]{font-size:16px;color:#999;text-decoration:none;display:block;background:#0e1118;border-radius:6px;width:auto;float:left;margin-bottom:10px;margin-top:10px;padding:3px;text-align:center}.ul1>li[data-v-339a6f9c]{padding:0;border-bottom:none;height:auto}.ul1[data-v-339a6f9c]{padding:0;margin:0;list-style:none;display:inline;width:100%;min-height:20px}.d-box h3[data-v-339a6f9c]{color:rgba(142,122,11,.67843);font-weight:900;text-shadow:0 2px 4px #070a11}.author-company .img-circle[data-v-339a6f9c]{border-radius:100%;width:69px;height:69px;margin-top:-65px}.author-company h3[data-v-339a6f9c]{margin-top:-60px}.mcgill-sidebar-block[data-v-339a6f9c]{margin-bottom:60px;position:relative;margin-top:-31px}",""]),t.exports=o},429:function(t,e,n){"use strict";n.r(e);var o=n(15),r=(n(57),n(85),n(70)),main=n(413),c=n(414),l={name:"ProjectSlug",methods:{getStrapiMedia:r.a,md_render:c.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$strapi,o=t.params,e.next=3,n.find("projects",{slug:o.slug});case 3:return e.t0=e.sent,e.next=6,n.find("projectpage");case 6:return e.t1=e.sent,e.next=9,n.find("project-categories");case 9:return e.t2=e.sent,e.abrupt("return",{project:e.t0,global:e.t1,categories:e.t2});case 11:case"end":return e.stop()}}),e)})))()},mounted:function(){Object(main.a)()}},d=(n(422),n(54)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mcgill-cases"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 animate-box",attrs:{"data-animate-effect":"fadeInLeft"}},[n("div",{staticClass:"mb-30"},[n("img",{staticClass:"img-fluid mb-30 radius-5 elevation-6",attrs:{src:t.getStrapiMedia(t.project[0].defaultPicture.url),alt:""}}),t._v(" "),n("h3",[t._v(t._s(t.project[0].name))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.md_render(this,t.project[0].description))}})]),t._v(" "),t.project[0].media.length>0?n("div",{staticClass:"row mb-30"},t._l(t.project[0].media,(function(e){return n("div",{staticClass:"col-md-4 gallery-item"},[n("a",{staticClass:"img-zoom",attrs:{href:t.getStrapiMedia(e.url)}},[n("div",{staticClass:"gallery-box"},[n("div",{staticClass:"gallery-img"},[n("img",{staticClass:"img-fluid mx-auto d-block rounded",attrs:{src:t.getStrapiMedia(e.url),alt:t.project.name}})]),t._v(" "),n("div",{staticClass:"gallery-detail text-center"})])])])})),0):t._e()]),t._v(" "),n("div",{staticClass:"col-md-4 animate-box ",attrs:{"data-animate-effect":"fadeInLeft"}},[n("div",{staticClass:"mcgill-sidebar-part"},[n("div",{staticClass:"mcgill-sidebar-block mcgill-sidebar-block-categories"},[n("div",{staticClass:"row d-box"},[n("div",{staticClass:"col-md-6 "},[n("div",{staticClass:"hour-box elevation-8"},[n("h3",{staticClass:"text-center"},[t._v("~"+t._s(t.project[0].working_hours)+" "+t._s(t.global.hours_post_string))])])]),t._v(" "),n("div",{staticClass:"col-md-6 "},[n("div",{staticClass:"hour-box elevation-8"},[n("h3",{staticClass:"text-center"},[t._v(t._s(t.project[0].year))])])])]),t._v(" "),t.project[0].current_project_status?n("div",{staticClass:"row d-box"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"hour-box elevation-8"},[n("h3",{staticClass:"text-center "},[t._v("\n                    "+t._s(t.global.current_status_title)+":"),n("span",[t._v(t._s(t.project[0].current_project_status.name))])]),t._v(" "),n("p",{staticClass:"text-center"},[t._v(t._s(t.project[0].current_project_status.description))])])])]):t._e(),t._v(" "),t.project[0].project_language?n("div",{staticClass:"row d-box"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"hour-box elevation-8"},[n("h3",{staticClass:"text-center "},[t._v("\n                    "+t._s(t.global.project_language_title)+"\n                  ")]),t._v(" "),n("p",{staticClass:"text-center"},[t._v(t._s(t.project[0].project_language.name))]),t._v(" "),n("p",{staticClass:"text-center"},[t._v(t._s(t.project[0].project_language.description))])])])]):t._e(),t._v(" "),t.project[0].technologies.length>0?n("div",{staticClass:"row d-box "},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:" hour-box elevation-8"},[n("h3",{staticClass:"text-center "},[t._v("\n                    "+t._s(t.global.technology_section_title)+"\n                  ")]),t._v(" "),n("div",{staticClass:"techs"},t._l(t.project[0].technologies,(function(e){return n("nuxt-link",{attrs:{to:"/technologies/"+e.slug}},[n("img",{attrs:{src:t.getStrapiMedia(e.logo.url),alt:e.name}})])})),1)])])]):t._e(),t._v(" "),t.project[0].company?n("div",{staticClass:"row d-box"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"author-company hour-box elevation-8"},[n("img",{staticClass:"img-circle elevation-5",attrs:{src:t.getStrapiMedia(t.project[0].company.logo.url),alt:t.project[0].company.company_name}}),t._v(" "),n("h3",{staticClass:"text-center"},[t._v(t._s(t.global.company_author_title))]),t._v(" "),n("h4",{staticClass:"author_name text-center"},[t._v(t._s(t.project[0].company.company_name))])])])]):t._e(),t._v(" "),t.project[0].url?n("div",{staticClass:"row d-box"},[n("nuxt-link",{staticClass:"button btn-success",attrs:{to:t.project[0].url}},[t._v(t._s(t.global.preview_button_title))])],1):t._e()])])])])])])}),[],!1,null,"339a6f9c",null);e.default=component.exports}}]);