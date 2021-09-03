<template>
  <div>

    <div class="page-wrapper">

      <!-- preloader start -->

      <div id="ht-preloader">
        <div class="clear-loader">
          <div class="loader">
            <div class="loader-div"><span>{{ global.siteName }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- preloader end -->
      <LayoutTopHeader :global="global" :menus="menus"/>
      <Nuxt/>
      <LayoutFooter :global="global" />
    </div>


    <!--color-customizer start-->

    <div v-if="global.has_customize_panel" class="color-customizer closed">
      <div class="color-button">
        <a class="opener" href="#">
          <i class="fas fa-spinner fa-spin"></i>
        </a>
      </div>
      <div class="clearfix color-chooser text-center">
        <h4 class="text-theme font-w-8 mb-4">ساساشت با <span class="text-black font-w-5">رنگ های فوق العاده زیبا</span>
        </h4>
        <ul class="colorChange clearfix">
          <li class="theme-default" title="theme-default" data-style="color-1"></li>
          <li class="theme-2" title="theme-2" data-style="color-2"></li>
          <li class="theme-3" title="theme-3" data-style="color-3"></li>
          <li class="theme-4" title="theme-4" data-style="color-4"></li>
          <li class="theme-5" title="theme-5" data-style="color-5"></li>
          <li class="theme-6" title="theme-6" data-style="color-6"></li>
          <li class="theme-7" title="theme-7" data-style="color-7"></li>
          <li class="theme-8 selected" title="theme-8" data-style="color-8"></li>
          <li class="theme-9" title="theme-9" data-style="color-9"></li>
          <li class="theme-10" title="theme-10" data-style="color-10"></li>
        </ul>
      </div>
    </div>

    <!--color-customizer end-->


    <!--back-to-top start-->

    <div class="scroll-top"><a class="smoothscroll" href="#top"><i class="la la-hand-pointer-o"></i></a></div>

    <!--back-to-top end-->

  </div>


</template>

<script>
import {getMetaTags} from "../utils/seo";
import {getStrapiMedia} from "../utils/medias";
import LayoutSideBar from "../components/LayoutSideBar";
import NuxtLogo from "../components/NuxtLogo";
import LayoutFooter from "../components/LayoutFooter";
import LayoutTopHeader from "../components/LayoutTopHeader";
import HeroSection from "../components/HeroSection";

export default {
  components: { HeroSection, LayoutTopHeader, LayoutFooter, NuxtLogo, LayoutSideBar},

  head() {

    const {defaultSeo, favicon, siteName} = this.global;
    // Merge default and article-specific SEO data


    return {
      bodyAttrs: {
        class: this.$i18n.localeProperties.layout
      },
      titleTemplate: `%s | ${siteName}`,
      title: defaultSeo.metaTitle,
      meta: getMetaTags(defaultSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
  async fetch() {
    let is_asset =
      this.$route.path.startsWith('/assets') ||
      this.$route.path.startsWith('/uploads');
    if (!is_asset) {
      this.global = await this.$strapi.find("global",{_locale:this.$i18n.locale});
      this.menus = await this.$strapi.find("menus",{_locale:this.$i18n.locale});
    }
  },
  // computed:{
  //   ...mapState('auth',['local'])
  // },
  fetchOnServer: true,
  methods: {
    getStrapiMedia,
  },
  data: function () {
    return {
      menus: [],

      global: {},
      categories: [],
      title: 'YiiMan',
      subtitle: 'YiiMan',
      list: [
        {to: '/', title: 'about', icon: 'star', is_active: false}
      ],
      locals:[],
      cell_phone: '+989353466620',
      copywrite: global.copywrite_text
    };
  }
};
</script>




