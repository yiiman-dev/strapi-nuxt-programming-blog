<template>
  <div>


    <!--page title start-->

    <section v-if="article.length>0" class="page-title o-hidden pos-r md-text-center" data-bg-color="#d2f9fe">
      <div class="page-title-pattern topBottom" data-bg-img="/images/bg/01.png"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-12">
            <h1 v-if="article[0].title" class="title">{{article[0].title}}</h1>
            <p></p>
          </div>
          <div class="col-lg-5 col-md-12 text-lg-right md-mt-3">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><p-link to="/">{{ $t('home') }}</p-link>
                </li>
                <li class="breadcrumb-item">{{ $t('blog') }}
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ $t('article') }}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!--page title end-->

    <div class="page-content">

      <!--blog single start-->
      <nuxt keep-alive />
      <section v-if="article.length>0">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="left-side">
                <div class="post">
                  <div class="post-image">
                    <img class="img-fluid" :src="article[0].image?media(article[0].image.url,$config):''" :alt="article[0].title?article[0].title:''">
                  </div>
                  <div class="post-desc">
                    <div class="post-meta">
                      <ul class="list-inline">
                        <li><i class="la la-calendar mr-1"></i> {{ article[0].published_at }}</li>
                        <li v-if="article[0].author && article[0].author.name"><i class="la la-user mr-1"></i> {{ article[0].author.name }}</li>
                        <li v-if="article[0].categories && article[0].categories[0] && article[0].categories[0].name"><i class="la la-user mr-1"></i> {{ article[0].categories[0].name }}</li>
                      </ul>
                    </div>
                    <div class="post-title">
                      <h2 v-if="article[0].title">{{ article[0].title }}</h2>
                    </div>
                    <Markdown2Html v-if="article[0].content" :content="article[0].content"/>
                    <div v-if="false" class="blog-share d-sm-flex justify-content-between mt-5">
                      <div class="social-icons">
                        <h4 class="mb-2">{{ $t('Share in') }}  </h4>
                        <ul>
                          <li>

                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fab fa-telegram"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fab fa-whatsapp"></i></a>
                          </li>

                        </ul>
                      </div>
                      <div class="post-tags text-sm-right xs-mt-3">
                        <h4 class="mb-2">برچسب ها: </h4>
                        <ul class="list-inline">
                          <li><a href="#">اپ ها</a>
                          </li>
                          <li><a href="#">لندینگ</a>
                          </li>
                          <li><a href="#">کد نویسی</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="media-holder mt-5" v-if="false">
                  <div class="section-title">
                    <h2 class="title">نظرات <span>همه</span></h2>
                  </div>
                  <div class="media">
                    <img class="img-center mr-3" alt="image" src="images/thumbnail/01.jpg">
                    <div class="media-body">
                      <h6>جعفر خان</h6>
                      <div class="comment-date">شهریور 1398</div>
                      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..</p>
                      <div class="comment-reply"> <a href="#">پاسخ</a>
                      </div>
                    </div>
                  </div>
                  <div class="media inner">
                    <img class="img-center mr-3" alt="image" src="images/thumbnail/02.jpg">
                    <div class="media-body">
                      <h6>جعفر خان</h6>
                      <div class="comment-date">شهریور 1398</div>
                      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..</p>
                      <div class="comment-reply"> <a href="#">پاسخ</a>
                      </div>
                    </div>
                  </div>
                  <div class="media">
                    <img class="img-center mr-3" alt="image" src="images/thumbnail/03.jpg">
                    <div class="media-body">
                      <h6>جعفر خان</h6>
                      <div class="comment-date">شهریور 1398</div>
                      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..</p>
                      <div class="comment-reply"> <a href="#">پاسخ</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="false" class="post-comments mt-5 box-shadow px-5 py-5">
                  <div class="section-title mb-4">
                    <h2 class="title">پیامی  <span>ارسال کنید</span></h2>
                  </div>
                  <form id="contact-form" class="row" method="post" action="http://www.themeht.com/sassaht/rtl/contact.php">
                    <div class="messages"></div>
                    <div class="form-group col-md-6">
                      <input id="form_name" type="text" name="name" class="form-control" placeholder="نام" required="required" data-error="نام ضروری">
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group col-md-6">
                      <input id="form_email" type="email" name="email" class="form-control" placeholder="ایمیل" required="required" data-error="ایمیل ضروری.">
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group col-md-12 mb-0">
                      <textarea id="form_message" name="message" class="form-control h-100" placeholder="نظر شما" rows="4" required="required" data-error="لطفا نظری مفهوم دار بگذارید."></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="col-md-12">
                      <button class="btn btn-theme mt-5"><span>ارسال نظر</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 sidebar md-mt-5">
              <div v-if="false" class="widget">
                <div class="widget-search">
                  <form class="form-inline form">
                    <div class="widget-searchbox">
                      <button type="submit" class="search-btn"> <i class="fas fa-search"></i>
                      </button>
                      <input type="text" placeholder="جستجو کنید..." class="form-control">
                    </div>
                  </form>
                </div>
              </div>
              <div class="widget">
                <div class="widget-about mt-5">
                  <img class="img-fluid box-shadow rounded-circle mb-3 img-100" :src="media(article[0].author.picture.url,$config)" :alt="(article[0].author && article[0].author.name)?article[0].author.name:''">
                  <h4 v-if="article[0].author && article[0].author.name">{{ article[0].author.name }}</h4>
                  <Markdown2Html v-if="article[0].author && article[0].author.biography" :content="article[0].author.biography"/>
                </div>
              </div>
              <div class="widget">
                <h5 class="widget-title">{{ $t('categories') }} </h5>
                <ul class="widget-categories list-unstyled">
                  <li v-for="(category,index) in article[0].categories">
                    <p-link v-if="category.slug && category.name" :to="'/blog/categories/'+category.slug">{{ category.name }} </p-link>
                  </li>

                </ul>
              </div>
              <div class="widget">
                <h5 class="widget-title">{{ $t('Recent Posts') }} </h5>
                <div class="recent-post">
                  <ul class="list-unstyled">
                    <li class="mb-3" v-for="item in recent">
                      <div class="recent-post-thumb">
                        <img class="img-fluid" :src="media(item.image.url,$config)" :alt="item.title?item.title:''">
                      </div>
                      <div class="recent-post-desc"> <p-link v-if="item.title && item.slug" :to="'/blog/'+item.slug" v-html="item.title"/>
                        <div class="post-date">{{item.published_at}}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-if="false" class="widget">
                <h5 class="widget-title">برچسب</h5>
                <ul class="widget-tags list-inline">
                  <li> <a href="#">طراح</a>
                  </li>
                  <li> <a href="#">سئو</a>
                  </li>
                  <li> <a href="#">بازار یابی</a>
                  </li>
                  <li> <a href="#">شرکت</a>
                  </li>
                  <li> <a href="#">آنالیز</a>
                  </li>
                  <li> <a href="#">ایمیل</a>
                  </li>
                  <li> <a href="#">دیجیتال</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--blog single end-->

    </div>
    <Layout/>
  </div>

</template>

<script>
import {getStrapiMedia} from "../../utils/medias.js";
import { sectionBgImg,sectionClasses,sectionBgColor} from "../../helpers/functions";
import PLink from "../../components/Base/p-link";
import Markdown2Html from "../../components/Base/Markdown2Html";
import  main from "/assets/global/js/runTheme"
import Layout from "../../components/Base/Layout";
console.log('page loaded');
export default {
  name: "blogSlug",
  components: {Layout, Markdown2Html, PLink},
  data(){
    return{
      pageTitle:''
    }
  },
  serverPrefetch() {
    if (this.article!=null && this.article[0] && this.article[0].title){
      this.pageTitle=this.article[0].title;
    }
  },

  head(){
    return{
      title: this.pageTitle
    }
  },
  async asyncData({$strapi,params,i18n,head}){
    return {
      article:await $strapi.find('articles',{slug:params.slug,_locale:i18n.locale}),
      recent:await $strapi.find('articles',{_locale:i18n.locale,_sort:"published_at:DESC",_limit:3}),
    }
  },
  methods:{
    media(url,$config){
      return getStrapiMedia(url,$config);
    },
    getStrapiMedia,
    sectionBgImg,
    sectionClasses,
    sectionBgColor
  },
  mounted() {
    main(this)
  }

}
</script>


