<template>
<div>
  <div v-if="page.Sections" v-for="sec in page.Sections">
    <HeroSection v-if="sec.__component==='sections.hero'" :section="sec" />
    <ServicesBox v-if="sec.__component==='sections.services-box'" :session="sec" />
    <TestimotionalBlock v-if="sec.__component==='sections.testimotional'" :session="sec"/>
    <LogosBlock v-if="sec.__component==='sections.logos'" :session="sec"/>
    <BlogBlock v-if="sec.__component==='sections.news'" :session="sec" />
    <ProjectsBlock v-if="sec.__component==='sections.projects'" :session="sec"/>
    <JSTag v-if="sec.__component==='shared.js-tag'" :session="sec"/>
    <CSSTag v-if="sec.__component==='sections.css-tag'" :session="sec"/>
  </div>
</div>
</template>

<script>
import ServicesBox from "./ServicesBox";
import TestimotionalBlock from "./TestimotionalBlock";
import LogosBlock from "./LogosBlock";
import BlogBlock from "./BlogBlock";
import ProjectsBlock from "./ProjectsBlock";
import HeroSection from "../HeroSection";
import JSTag from "./JSTag";
import CSSTag from "./CSSTag";
export default {
  name: "AllBlocksComponent",
  props:[
    'page'
  ],
  components: {CSSTag, JSTag, HeroSection, ProjectsBlock, BlogBlock, LogosBlock, TestimotionalBlock, ServicesBox},

}
</script>

<style scoped>

</style>
