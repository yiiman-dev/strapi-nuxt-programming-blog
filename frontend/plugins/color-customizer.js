/*! * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 */
if(process.browser) {
  !function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
  }(function (a) {
    function c(a) {
      return h.raw ? a : encodeURIComponent(a)
    }

    function d(a) {
      return h.raw ? a : decodeURIComponent(a)
    }

    function e(a) {
      return c(h.json ? JSON.stringify(a) : String(a))
    }

    function f(a) {
      0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
      try {
        return a = decodeURIComponent(a.replace(b, " ")), h.json ? JSON.parse(a) : a
      } catch (c) {
      }
    }

    function g(b, c) {
      var d = h.raw ? b : f(b);
      return a.isFunction(c) ? c(d) : d
    }

    var b = /\+/g, h = a.cookie = function (b, f, i) {
      if (arguments.length > 1 && !a.isFunction(f)) {
        if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
          var j = i.expires, k = i.expires = new Date;
          k.setTime(+k + 864e5 * j)
        }
        return document.cookie = [c(b), "=", e(f), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
      }
      for (var l = b ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
        var p = m[n].split("="), q = d(p.shift()), r = p.join("=");
        if (b && b === q) {
          l = g(r, f);
          break
        }
        b || void 0 === (r = g(r)) || (l[q] = r)
      }
      return l
    };
    h.defaults = {}, a.removeCookie = function (b, c) {
      return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {expires: -1})), !a.cookie(b))
    }
  });

  /* ------------------------------------------------
    Project:   Sassaht - SaaS, Startup & WebApp Prebuilt Template
    Author:    ThemeHt

  NOTE: This file Change the styling of color, backgrond color of the actual Template. so you can change as your requirement.
  ------------------------------------------------ */


// jQuery(document).ready(function($) {

  /*------------------------------------
    HT Right sidebar
  --------------------------------------*/
  style_switcher = jQuery('.color-customizer'),
    panelWidth = style_switcher.outerWidth(true);
  jQuery('.color-customizer .opener').off();
  jQuery('.color-customizer .opener').on("click", function () {
    var $this = jQuery(this);
    if (jQuery(".color-customizer.closed").length > 0) {
      style_switcher.animate({"right": "0px"});
      jQuery(".color-customizer.closed").removeClass("closed");
      jQuery(".color-customizer").addClass("opened");
    } else {
      jQuery(".color-customizer.opened").removeClass("opened");
      jQuery(".color-customizer").addClass("closed");
      style_switcher.animate({"right": '-' + panelWidth});
    }
    return false;
  });


  /*------------------------------------
    HT Style change
  --------------------------------------*/
  var link = jQuery('link[data-style="styles"]'),
    link_no_cookie = jQuery('link[data-style="styles-no-cookie"]');


  /*------------------------------------
    HT Color Changer
  --------------------------------------*/
  jQuery('.color-customizer .colorChange li').off();
  jQuery('.color-customizer .colorChange li').on('click', function () {
    console.log(link);
    if (link.length > 0) {
      var $this = jQuery(this),
        tp_stylesheet = $this.data('style');
      jQuery(".color-customizer .colorChange .selected").removeClass("selected");
      $this.addClass("selected");

      link.attr('href', '/global/css/theme-color/' + tp_stylesheet + '.css');
      if (jQuery(".swicher-title-page-dark").length > 0) {
        document.getElementById("logo-img").src = "/images/logo-customizer/logo_dark_swicher-title_" + tp_stylesheet + ".png";
      } else {
        if (jQuery("#logo-img").length > 0) {
          document.getElementById("logo-img").src = "/images/logo-customizer/logo-" + tp_stylesheet + ".png";
        }
        ;
        if (jQuery("#logo-white-img").length > 0) {
          document.getElementById("logo-white-img").src = "/images/logo-customizer-white/logo-" + tp_stylesheet + ".png";
        }
        ;

        if (jQuery("#footer-logo-img").length > 0) {
          document.getElementById("footer-logo-img").src = "/images/logo-customizer/logo-" + tp_stylesheet + ".png";
        }
        ;
      }
      ;
      $.cookie('tp_stylesheet', tp_stylesheet, 30);
      updatechart(jQuery(jQuery(this)).index('.color-customizer .colorChange li'));
    }
  });


  /*------------------------------------
    HT Reset all customize styles
  --------------------------------------*/
  jQuery('.color-customizer .reset a.reset-btn').off()
  jQuery('.color-customizer .reset a.reset-btn').on('click', function () {

    //Logo change
    $.cookie('tp_stylesheet', 'theme-default', 30);
    var tp_stylesheet = 'theme-default';
    jQuery('.color-customizer .colorChange li.selected').removeClass("selected");
    jQuery('.color-customizer .colorChange li[data-style="' + tp_stylesheet + '"]').addClass("selected");
    link.attr('href', '/global/css/theme-color/' + tp_stylesheet + '.css');
    if (jQuery("#logo-img").length > 0) {
      document.getElementById("logo-img").src = "/images/logo-customizer/logo-" + tp_stylesheet + ".png";
    }
    ;

    jQuery(window).trigger('resize');
    jQuery('.desktopTopFixed').removeClass('desktopTopFixed');
  });
// });
}
