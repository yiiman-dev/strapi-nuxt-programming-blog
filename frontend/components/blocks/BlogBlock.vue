<template>

  <div>
    <!--blog start-->
    <section v-if="session.boxType==='Type1'" :class="sectionClasses(session,'pos-r bg-contain bg-pos-lb')" :data-bg-img="sectionBgImg(session)" :data-bg-color="session.boxStyle.hexBackground">
      <RoundAnimation v-if="session.boxStyle.hasRoundAnimation"/>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8 col-md-12">
            <div class="section-title">
              <h2 class="title" v-if="session.title" v-html="session.title"/>
              <div class="title-bdr">
                <div class="left-bdr"></div>
                <div class="right-bdr"></div>
              </div>
              <p v-if="session.subtitle" v-html="session.subtitle"/>
            </div>
          </div>
        </div>
        <div class="row" v-if="articles">
          <div  v-for="(item,index) in articles" v-bind:key="index" class="col-lg-4 col-md-12 md-mt-5">
            <div class="post">
              <div class="post-image">
                <img class="img-fluid w-100 article-img" :src="item.image?getStrapiMedia(item.image.url,$config):''"  :alt="item.title?item.title:''">
              </div>
              <div class="post-desc">
                <div class="post-meta">
                  <ul class="list-inline">
                    <li><i class="la la-calendar mr-1"></i> {{ item.published_at }}</li>
                    <li v-if="item.author && item.author.name"><i class="la la-user mr-1"></i> {{ item.author.name }}</li>
                  </ul>
                </div>
                <div class="post-title">
                  <h4 v-if="item.title"><p-link v-if="item.slug" :to="'/blog/'+item.slug" v-html="item.title"/></h4>
                </div>
                <div class="post-categories mt-4">
                  <ul class="list-inline">
                    <li v-for="(cat,catIndex) in item.categories"><p-link :to="'/blog/categories/'+cat.slug" v-if="cat.name && cat.slug" v-html="cat.name"/></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="session.boxType==='Type2'" :class="sectionClasses(session,'pos-r bg-contain bg-pos-lb')" :data-bg-img="sectionBgImg(session)" :data-bg-color="session.boxStyle.hexBackground">
      <RoundAnimation v-if="session.boxStyle.hasRoundAnimation"/>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8 col-md-12">
            <div class="section-title">
              <h2 v-if="session.title" class="title" v-html="session.title"/>
              <div class="title-bdr">
                <div class="left-bdr"></div>
                <div class="right-bdr"></div>
              </div>
              <p v-if="session.subtitle" v-html="session.subtitle"/>
            </div>
          </div>
        </div>
        <div class="row" v-if="articles">
          <div  v-for="(item,index) in articles" v-bind:key="index" class="col-lg-4 col-md-12 md-mt-5">
            <div class="post style-2">
              <div class="post-image">
                <img class="img-fluid w-100 article-img" :src="getStrapiMedia(item.image.url,$config)"  :alt="item.title?item.title:''">
              </div>
              <div class="post-desc">
                <div class="post-categories mt-4">
                  <ul class="list-inline">
                    <li v-for="(cat,catIndex) in item.categories"><p-link v-if="cat.slug && cat.name" :to="'/blog/categories/'+cat.slug" v-html="cat.name"/></li>
                  </ul>
                </div>
                <div class="post-title">
                  <h4 v-if="item.slug && item.title"><p-link :to="'/blog/'+item.slug" v-html="item.title"/></h4>
                </div>
                <div class="post-meta">
                  <ul class="list-inline">
                    <li><i class="la la-calendar mr-1"></i> {{ item.published_at }}</li>
                    <li v-if="item.author && item.author.name"><i class="la la-user mr-1"></i> {{ item.author.name }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="session.boxType==='Type3'" :class="sectionClasses(session,'pos-r bg-contain bg-pos-lb')" :data-bg-img="sectionBgImg(session)" :data-bg-color="session.boxStyle.hexBackground">
      <RoundAnimation v-if="session.boxStyle.hasRoundAnimation"/>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8 col-md-12">
            <div class="section-title">
              <h2 v-if="session.title" class="title" v-html="session.title"/>
              <div class="title-bdr">
                <div class="left-bdr"></div>
                <div class="right-bdr"></div>
              </div>
              <p v-if="session.subtitle" v-html="session.subtitle"/>
            </div>
          </div>
        </div>
        <div class="row" v-if="articles">
          <div  v-for="(item,index) in articles" v-bind:key="index" class="col-lg-4 col-md-12 md-mt-5">
            <div class="post style-3">
              <div class="post-image">
                <img class="img-fluid w-100 article-img" :src="getStrapiMedia(item.image.url ,$config)"  :alt="item.title?item.title:''">
              </div>
              <div class="post-desc">
                <div class="post-meta">
                  <ul class="list-inline">
                    <li><i class="la la-calendar mr-1"></i> {{ item.published_at }}</li>
                    <li v-if="item.author && item.author.name"><i class="la la-user mr-1"></i>{{ item.author.name }}</li>
                  </ul>
                </div>
                <div class="post-title">
                  <h4 v-if="item.title && item.slug"><p-link :to="'/blog/'+item.slug" v-html="item.title" /></h4>
                </div>
                <div class="post-categories mt-4">
                  <ul class="list-inline">
                    <li v-for="(cat,catIndex) in item.categories"><p-link v-if="cat.slug && cat.name" :to="'/blog/categories/'+cat.slug" v-html="cat.name"/></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="session.boxType==='Type4'" :class="sectionClasses(session,'pos-r bg-contain bg-pos-lb')" :data-bg-img="sectionBgImg(session)" :data-bg-color="session.boxStyle.hexBackground">
      <RoundAnimation v-if="session.boxStyle.hasRoundAnimation"/>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8 col-md-12">
            <div class="section-title">
              <h2 v-if="session.title" class="title" v-html="session.title"/>
              <div class="title-bdr">
                <div class="left-bdr"></div>
                <div class="right-bdr"></div>
              </div>
              <p v-if="session.subtitle" v-html="session.subtitle"></p>
            </div>
          </div>
        </div>
        <div class="row" v-if="articles">
          <div  v-for="(item,index) in articles" v-bind:key="index" class="col-lg-4 col-md-12 md-mt-5">
            <div class="post style-4">
              <div class="post-image">
                <img class="img-fluid w-100 article-img" :src="getStrapiMedia(item.image.url,$config)"  :alt="item.title?item.title:''">
              </div>
              <div class="post-desc">
                <div class="post-categories mt-4">
                  <ul class="list-inline">
                    <li v-if="cat.slug && cat.name" v-for="(cat,catIndex) in item.categories"><p-link :to="'/blog/categories/'+cat.slug" v-html="cat.name"/></li>
                  </ul>
                </div>
                <div class="post-title">
                  <h4 v-if="item.slug && item.title"><p-link :to="'/blog/'+item.slug" v-html="item.title"/></h4>
                </div>
                <div class="post-meta">
                  <ul class="list-inline">
                    <li><i class="la la-calendar mr-1"></i> {{ item.published_at }}</li>
                    <li v-if="item.author && item.author.name"><i class="la la-user mr-1"></i> {{ item.author.name }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--blog end-->
  </div>


</template>

<script>
import {getStrapiMedia} from "../../utils/medias";
import {replaceAt,sectionClasses,sectionBgImg} from "../../helpers/functions";
import RoundAnimation from "../shared/RoundAnimation";
import PLink from "../Base/p-link";


export default {
  name: "BlogBlock",
  components: {PLink, RoundAnimation},
  props: ['session'],
  data(){
    return{
      articles:[]
    }
  },
  methods: {getStrapiMedia,replaceAt,sectionClasses,sectionBgImg},
  async fetch() {
      this.articles= await this.$strapi.find("articles",{_limit:3,_locale:this.$i18n.locale});
  },
}
</script>

<style>
.article-img{
  width: 100%;
  height: 210px !important;
  max-width: none !important;
}
</style>
