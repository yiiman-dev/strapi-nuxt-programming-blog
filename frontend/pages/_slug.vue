<template>

  <div>

    <div class="page-content" v-if="pages.length>0">

      <!--feature start-->
      <AllBlocksComponent :page="pages[0]"/>


      <!--feature end-->
    </div>

    <Layout/>
  </div>

</template>

<script>

import {getMetaTags} from "../utils/seo";
import {getStrapiMedia} from "../utils/medias";
import AllBlocksComponent from "../components/blocks/AllBlocksComponent";
import Layout from "../components/Base/Layout";
import main from "/assets/global/js/runTheme"

export default {
  components: {
    Layout,
    AllBlocksComponent,
  },
  async asyncData({$strapi, params, i18n}) {
    return {
      pages: await $strapi.find("pages", {slug: params.slug, _locale: i18n.locale}),
    };
  },
  methods: {getStrapiMedia},
  mounted() {
    main(this)
  }
};
</script>
