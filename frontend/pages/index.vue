<template>
  <div >
    <!-- Slider -->
    <SliderBlock v-if="pages.length>0 && pages[0].Slider.length" :sliders="pages[0].Slider"/>
    <div v-if="pages.length>0" >
      <div v-for="sec in pages[0].Sections">
        <ServicesBlock v-if="sec.__component==='sections.services'" :session="sec" />
        <TestimotionalBlock v-if="sec.__component==='sections.testimotional'" :session="sec"/>
        <LogosBlock v-if="sec.__component==='sections.logos'" :session="sec"/>
        <ProjectsBlock v-if="sec.__component==='sections.projects'" :session="sec"/>
        <BlogBlock v-if="sec.__component==='sections.news'" :session="sec" :articles="articles"/>
      </div>
    </div>


    <aside  v-if="pages.length===0" id="mcgill-hero" class="js-fullheight">
      <div class="flexslider js-fullheight">
        <h1 style="margin-top: 40%" class="text-center">Default Home Page Not Configed yet</h1>
      </div>
    </aside>


  </div>

</template>

<script>

import { getMetaTags } from "../utils/seo";
import { getStrapiMedia } from "../utils/medias";
import SliderBlock from "../components/blocks/SliderBlock";
import ServicesBlock from "../components/blocks/ServicesBlock";
import TestimotionalBlock from "../components/blocks/TestimotionalBlock";
import LogosBlock from "../components/blocks/LogosBlock";
import ProjectsBlock from "../components/blocks/ProjectsBlock";
import BlogBlock from "../components/blocks/BlogBlock";
import main from '../assets/js/main.js'

export default {
  components: {
    BlogBlock,
    ProjectsBlock,
    LogosBlock,
    TestimotionalBlock,
    ServicesBlock,
    SliderBlock,

  },
  async asyncData({ $strapi }) {
    return {
      pages: await $strapi.find("pages",{is_homepage:true}),
      articles: await $strapi.find("articles",{_limit:3}),
    };
  },
  methods:{getStrapiMedia},
  mounted() {
   main()
  }
};
</script>
