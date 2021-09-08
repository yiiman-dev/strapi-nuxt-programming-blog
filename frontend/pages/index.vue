<template>
  <div>

    <div class="page-content" v-if="pages.length>0">

      <!--feature start-->
      <AllBlocksComponent :page="pages[0]"/>


      <!--feature end-->
    </div>

    <aside  v-if="pages.length===0 && false" id="mcgill-hero" class="js-fullheight">
      <div class="flexslider js-fullheight">
        <h1 style="margin-top: 40%" class="text-center">Default Home Page Not Configed yet</h1>
      </div>
    </aside>

   <Layout/>
  </div>

</template>

<script>

import { getMetaTags } from "../utils/seo";
import { getStrapiMedia } from "../utils/medias";
import AllBlocksComponent from "../components/blocks/AllBlocksComponent";
import Layout from "../components/Base/Layout";
import main from "/assets/global/js/runTheme"
export default {
  components: {
    Layout,
    AllBlocksComponent,
  },
  async asyncData({ $strapi ,i18n}) {
    return {
      pages: await $strapi.find("pages",{is_homepage:true,_locale:i18n.locale}),
    };
  },

  methods:{getStrapiMedia},
  mounted() {
    main(this)
  }
};
</script>
