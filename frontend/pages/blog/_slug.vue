<template>
  <div>
    <nuxt keep-alive />
    <div v-if="article.length>0" class="mcgill-post">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 mb-30 animate-box" data-animate-effect="fadeInLeft"> <span class="heading-meta">{{ article[0].category.name }}</span>
            <h2 class="mcgill-heading">{{ article[0].title }}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 animate-box blog-content-box" data-animate-effect="fadeInLeft">
            <div v-html="md_render(this,article[0].content)"></div>
          </div>
          <div class="col-md-5 animate-box" data-animate-effect="fadeInLeft">
            <img :src="article[0].image?getStrapiMedia(article[0].image.url):''" class="img-fluid mb-30 elevation-6 radius-5" :alt="article[0].title">
          </div>
        </div>
      </div>
    </div>
    <!-- Comments -->
    <div v-if="false" class="mcgill-comments back-gray">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="clear" id="comment-list">
              <div class="comments-area" id="comments">
                <h2 class="comments-title">Comments</h2>
                <ol class="comment-list">
                  <li class="comment">
                    <div class="comment-body">
                      <div class="comment-author vcard"> <img class="avatar photo" src="images/team/1.jpg" alt="">
                        <h3 class="name">Jenna Brown</h3> </div>
                      <div class="comment-meta"> Dec 28, 2020</div>
                      <p>Quisque nec iaculis nibh. Suspendisse tempus orci nec enim maximus quis maximus quam suscipit. Fusce dignissim turpis eu neque vehicula condimentum. Morbi pretium orci sed elementum lacinia sapien leo facilisis quam quis elementum risus nulla consequat tellus. Sedturpis mi imperdiet eu lorem pellentesque sollicitudin malesuada arcu.</p>
                      <div class="reply"> <a href="#" class="comment-reply-link"><i class="fas fa-undo"></i> Replay</a> </div>
                    </div>
                    <!-- sub comment block -->
                    <ol class="children">
                      <li class="comment odd parent">
                        <div class="comment-body">
                          <div class="comment-author vcard"> <img class="avatar photo" src="images/team/2.jpg" alt="">
                            <h3 class="name">Lindsey White</h3> </div>
                          <div class="comment-meta"> Dec 27, 2020</div>
                          <p>Quisque nec iaculis nibh. Suspendisse tempus orci nec enim maximus quis maximus quam suscipit. Fusce dignissim turpis eu neque vehicula condimentum. Morbi pretium orci sed elementum lacinia sapien leo facilisis quam quis elementum risus nulla consequat tellus. Sedturpis mi imperdiet eu lorem pellentesque sollicitudin malesuada arcu.</p>
                          <div class="reply"> <a href="#" class="comment-reply-link"><i class="fas fa-undo"></i> Replay</a> </div>
                        </div>
                      </li>
                    </ol>
                  </li>
                  <li class="comment">
                    <!-- comment block -->
                    <div class="comment-body">
                      <div class="comment-author vcard"> <img class="avatar photo" src="images/team/3.jpg" alt="">
                        <h3 class="name">John Smith</h3> </div>
                      <div class="comment-meta"> Dec 27, 2020</div>
                      <p>Quisque nec iaculis nibh. Suspendisse tempus orci nec enim maximus quis maximus quam suscipit. Fusce dignissim turpis eu neque vehicula condimentum. Morbi pretium orci sed elementum lacinia sapien leo facilisis quam quis elementum risus nulla consequat tellus. Sedturpis mi imperdiet eu lorem pellentesque sollicitudin malesuada arcu.</p>
                      <div class="reply"> <a href="#" class="comment-reply-link"><i class="fas fa-undo"></i> Replay</a> </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <!-- Leave a comments -->
            <h3 class="mcgill-post-heading">Leave a Comments</h3>
            <form method="post" class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Name" required=""> </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Email"> </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <input type="submit" class="btn btn-contact" value="Submit Comment"> </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {getStrapiMedia} from "../../utils/medias";
import main from '../../assets/js/main.js'
import {md_render} from "../../helpers/functions";

export default {
  name: "blogSlug",
  async asyncData({$strapi,params}){

    return {
      article:await $strapi.find('articles',{slug:params.slug})
    }
  },
  methods:{
    getStrapiMedia,
    md_render
  },
  mounted() {
    main()
  }
}
</script>

<style scoped>

</style>
