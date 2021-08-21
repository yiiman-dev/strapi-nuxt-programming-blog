<template>
  <div id="mcgill-page">
    <a href="#" class="js-mcgill-nav-toggle mcgill-nav-toggle">
      <i></i>
    </a>
    <!-- Sidebar Section -->
    <LayoutSideBar
      :list="menus"

      :title="title"
      :subtitle="subtitle"

      :global="global"
    />
    <!-- Main Section -->
    <div id="mcgill-main">
      <!-- Slider -->
      <Nuxt/>
      <!-- Footer -->
      <div id="mcgill-footer2">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="mcgill-logo">
                <NuxtLogo :global="global"/>
                <h2 class="text-center">{{ global.siteName }}<span>{{ global.siteSubName }}</span></h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-left">
              <div class="mcgill-footer">
                <p>&copy; {{ global.copywrite_text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Js -->

  </div>


</template>

<script>

import {getMetaTags} from "../utils/seo";
import {getStrapiMedia} from "../utils/medias";
import LayoutSideBar from "../components/LayoutSideBar";
import NuxtLogo from "../components/NuxtLogo";

export default {
  components: {NuxtLogo, LayoutSideBar},

  head() {
    const {seo} = this.homepage;
    const {defaultSeo, favicon, siteName} = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      ...seo,
    };

    return {

      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
  async fetch() {
    this.homepage = await this.$strapi.find("homepage");
    this.global = await this.$strapi.find("global");
    this.menus = await this.$strapi.find("menus");
  },
  methods: {
    getStrapiMedia,
  },
  data: function () {
    return {
      menus:[],
      homepage: {},
      global: {},
      categories: [],
      title: 'YiiMan',
      subtitle: 'YiiMan',
      list: [
        {to: '/', title: 'about', icon: 'star', is_active: false}
      ],

      cell_phone: '+989353466620',
      copywrite: global.copywrite_text
    };
  },
};
</script>
<style></style>
