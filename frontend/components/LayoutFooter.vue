<template>
  <div>
    <!--footer start-->
    <div id="waterdrop"></div>
    <footer class="footer theme-bg">
      <div class="primary-footer">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-6">
              <div class="footer-logo mb-3">
                <img id="footer-logo-white-img" v-if="global.footerLogo" :src="getStrapiMedia(global.footerLogo.url)" class="img-center" :alt="global.siteName">
              </div>
              <Markdown2Html v-if="global.footerDescription" class="mb-0" :content="global.footerDescription"/>
            </div>
            <div class="col-lg-4 col-md-6 sm-mt-5">

              <div class="footer-list justify-content-between d-flex">
                <ul class="list-unstyled w-100">
                  <li v-for="item in global.column1Links"><a :href="item.url">{{ item.title }}</a></li>
                </ul>
                <ul class="list-unstyled w-100">
                  <li v-for="item in global.column2Links"><a :href="item.url">{{ item.title }}</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 md-mt-5">
              <div class="footer-cntct">
                <h4 class="mb-4 text-white">{{ $t('Ways of communication') }} </h4>
                <ul class="media-icon list-unstyled">
                  <li><i class="la la-envelope-o"></i> <a :href="'mailto:'+global.email"><b>{{ global.email }}</b></a>
                  </li>
                  <li><i class="la la-phone"></i> <a :href="'tel:'+global.phone_number"><b>{{global.phone_number}}</b></a>
                  </li>
                </ul>
                <div class="social-icons mt-3">
                  <ul class="list-inline">
                    <li v-for="soc in global.socials"><a :href="soc.url"><i :class="'fab fa-'+soc.icon"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="secondary-footer mt-5 text-center">
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-12" v-html="global.copywrite_text">

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!--footer end-->
  </div>

</template>

<script>
import {getStrapiMedia} from "../utils/medias";
import Markdown2Html from "./Base/Markdown2Html";


export default {
  name: "LayoutFooter",
  components: {Markdown2Html},
  props:['global'],
  methods:{getStrapiMedia}
}
</script>

<style scoped>

</style>
