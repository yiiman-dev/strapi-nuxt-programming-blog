<template>
  <div>

    <!--page title start-->

    <section class="page-title o-hidden pos-r md-text-center" data-bg-color="#d2f9fe">
      <div class="page-title-pattern topBottom" data-bg-img="/images/bg/01.png"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-12">
            <h1 class="title">{{ global.title }}</h1>
            <p></p>
          </div>
          <div class="col-lg-5 col-md-12 text-lg-right md-mt-3">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><p-link to="/">{{ $t('home') }}</p-link>
                </li>
                <li class="breadcrumb-item">{{ $t('blog') }}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <!--page title end-->





    <!--body content start-->

    <div class="page-content">

      <section v-if="articles.length>0">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 order-lg-12">
              <div v-for="(item,index) in articles" :class="index===0?'post':'post mt-8'">
                <div class="post-image">
                  <img class="img-fluid h-100 w-100" :src="item.image?getStrapiMedia(item.image.url,$config):''" :alt="item.title">
                </div>
                <div class="post-desc">
                  <div class="post-meta">
                    <ul class="list-inline">
                      <li><i class="la la-calendar mr-1"></i> {{ item.published_at }}</li>
                      <li><i class="la la-user mr-1"></i> {{ item.author.name }}</li>
                    </ul>
                  </div>
                  <div class="post-title">
                    <h4><p-link :to="'/blog/'+item.slug">{{ item.title }}</p-link></h4>
                  </div>
                  <div class="post-categories mt-4">
                    <ul class="list-inline">
                      <li v-for="cat in item.categories">{{ cat.name }}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <nav aria-label="Page navigation" class="mt-8">
                <ul class="pagination">
                  <li class="page-item"><a class="page-link" href="#"><i class="fas fa-long-arrow-alt-left"></i></a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-4 col-md-12 sidebar order-lg-1 md-mt-5">
              <div v-if="false" class="widget">
                <div class="widget-search">
                  <form class="form-inline form">
                    <div class="widget-searchbox">
                      <button type="submit" class="search-btn"> <i class="fas fa-search"></i>
                      </button>
                      <input type="text" placeholder="Search Here..." class="form-control">
                    </div>
                  </form>
                </div>
              </div>
              <div class="widget">
                <h5 class="widget-title">{{ $t('categories') }} </h5>
                <ul class="widget-categories list-unstyled">
                  <li v-for="cat in categories"> <p-link :to="'/blog/categories/'+cat.slug">{{ cat.name }}</p-link>
                  </li>
                </ul>
              </div>
              <div class="widget">
                <h5 class="widget-title">{{ $t('Recent Posts') }} </h5>
                <div class="recent-post">
                  <ul class="list-unstyled">
                    <li class="mb-3" v-for="item in recent">
                      <div class="recent-post-thumb">
                        <img class="img-fluid" :src="getStrapiMedia(item.image.url,$config)" :alt="item.title">
                      </div>
                      <div class="recent-post-desc"> <p-link :to="'/blog/'+item.slug">{{ item.title }}</p-link>
                        <div class="post-date">{{item.published_at}}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

    <!--body content end-->

<Layout/>
  </div>

</template>

<script>
import {getStrapiMedia} from "../../utils/medias";
import {getMetaTags} from "../../utils/seo";
import PLink from "../../components/Base/p-link";
import Layout from "../../components/Base/Layout";
import main from "/assets/global/js/runTheme"
import "assets/global/sass/bootstrap/_pagination.scss"
import "assets/global/sass/bootstrap/_breadcrumb.scss"
export default {
  name: "index",
  components: {Layout, PLink},
  head() {
    return {


      title: this.global.seo.metaTitle,
      meta: getMetaTags(this.global.seo),

    };
  },
  methods: {getStrapiMedia},
  data(){
    return {q :''}
  },

  async asyncData({$strapi,i18n}) {
    return {
      articles: await $strapi.find('articles', {_limit: 20,_locale:i18n.locale}),
      global: await $strapi.find('blogpage',{_locale:i18n.locale}),
      categories: await $strapi.find('categories',{_locale:i18n.locale}),
      recent:await $strapi.find('articles',{_locale:i18n.locale,_sort:"published_at:DESC",_limit:5}),
    }
  },
  mounted() {
    main(this)
  }
}
</script>

<style scoped>

</style>
