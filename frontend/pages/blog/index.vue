<template>
  <div class="mcgill-blog">
    <nuxt keep-alive />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 mb-40 animate-box" data-animate-effect="fadeInLeft">
          <span class="heading-meta">{{ global.title }}</span>
          <h2 class="mcgill-heading">{{ global.subtitle }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 animate-box" data-animate-effect="fadeInLeft">
          <div v-for="item in articles" class="blog-entry">
            <nuxt-link :to="'/blog/'+item.slug"  class="blog-img">
              <img v-if="item.image" :src="item.image?getStrapiMedia(item.image.url):''" class="img-fluid" :alt="item.title">
            </nuxt-link>

            <div class="desc"><span><a href="#">{{ item.category.name }}</a> — {{ item.published_at }}</span>
              <h3>
                <nuxt-link :to="'/blog/'+item.slug"  class="blog-img">
                  {{item.title}}
                </nuxt-link>
              </h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <!-- Pagination -->
              <ul class="mcgill-pagination-wrap text-center">
                <li><a href="blog.html#"><i class="fa fa-angle-left"></i></a></li>
                <li><a href="blog.html#">1</a></li>
                <li><a href="blog.html#" class="active">2</a></li>
                <li><a href="blog.html#">3</a></li>
                <li><a href="blog.html#"><i class="fa fa-angle-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Sidebar -->
        <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
          <div class="mcgill-sidebar-part">
            <div class="mcgill-sidebar-block mcgill-sidebar-block-search">
              <form class="mcgill-sidebar-search-form" method="get">
                <input v-model="q" type="text" class="form-control search-field" id="search" :placeholder="global.search_input_placeholder">
                <button type="submit" class="fa fa-search mcgill-sidebar-search-submit"></button>
              </form>
            </div>
            <div class="mcgill-sidebar-block mcgill-sidebar-block-categories">
              <div class="mcgill-sidebar-block-title"> {{ global.categories_title }}</div>
              <div class="mcgill-sidebar-block-content">
                <ul class="ul1">
                  <li v-for="cat in categories">
                    <nuxt-link :to="'/blog/category/'+cat.slug">
                      {{ cat.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="false" class="mcgill-sidebar-block mcgill-sidebar-block-latest-posts">
              <div class="mcgill-sidebar-block-title"> Latest Posts</div>
              <div class="mcgill-sidebar-block-content">
                <div class="latest">
                  <a href="post.html" class="clearfix">
                    <div class="txt1">Vivense nec iaculis pendise tempus enim maximus the drainc</div>
                    <div class="txt2">Dec 30, 2020</div>
                  </a>
                </div>
                <div class="latest">
                  <a href="post.html" class="clearfix">
                    <div class="txt1">Quisque nec aculis endise the moss incele tempus enim maximus</div>
                    <div class="txt2">Dec 27, 2020</div>
                  </a>
                </div>
                <div class="latest">
                  <a href="post.html" class="clearfix">
                    <div class="txt1">Quisque nec iaculis vivense drono pendise tempus the suscipit</div>
                    <div class="txt2">Dec 24, 2020</div>
                  </a>
                </div>
              </div>
            </div>
            <div v-if="false"  class="mcgill-sidebar-block mcgill-sidebar-block-tags">
              <div class="mcgill-sidebar-block-title"> Tags</div>
              <div class="mcgill-sidebar-block-content">
                <ul class="tags clearfix">
                  <li><a href="blog.html#">Criminal Law</a></li>
                  <li><a href="blog.html#">Law</a></li>
                  <li><a href="blog.html#">Financial Law</a></li>
                  <li><a href="blog.html#">Legal</a></li>
                  <li><a href="blog.html#">Case Studies</a></li>
                  <li><a href="blog.html#">Real State</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getStrapiMedia} from "../../utils/medias";
import {getMetaTags} from "../../utils/seo";
import main from '../../assets/js/main.js'

export default {
  name: "index",
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
  async asyncData({$strapi}) {

    return {
      articles: await $strapi.find('articles', {_limit: 20}),
      global: await $strapi.find('blogpage'),
      categories: await $strapi.find('categories'),
    }
  },
  mounted() {
    main()
  }
}
</script>

<style scoped>

</style>
