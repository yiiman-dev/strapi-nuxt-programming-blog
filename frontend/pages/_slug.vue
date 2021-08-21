<template>
  <div>
    <nuxt keep-alive />
    <!-- Slider -->
    <SliderBlock v-if="pages.length && pages[0].Slider.length" :sliders="pages[0].Slider"/>
    <div v-for="sec in pages[0].Sections">
      <ServicesBlock v-if="sec.__component==='sections.services'" :session="sec" />
      <TestimotionalBlock v-if="sec.__component==='sections.testimotional'" :session="sec"/>
      <LogosBlock v-if="sec.__component==='sections.logos'" :session="sec"/>
      <ProjectsBlock v-if="sec.__component==='sections.projects'" :session="sec"/>
      <BlogBlock v-if="sec.__component==='sections.news'" :session="sec"/>
    </div>
  </div>
</template>

<script>
import Articles from "../components/Articles";
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
    Articles,
  },
  async asyncData({ $strapi,params }) {
    return {
      pages: await $strapi.find("pages",{slug:params.slug}),
    };
  },
  methods:{getStrapiMedia},
  mounted() {
    main()
  }
};
</script>
