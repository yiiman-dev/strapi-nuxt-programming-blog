<template>
  <div>
    <!--testimonial start-->


    <section v-if="session.boxType==='Type1' && session.title.length===0">
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-12">

            <div id="testimonial-1" class="testimonial-carousel testimonial-1 carousel slide" data-ride="carousel" :data-interval="session.slideSpeed">
              <!-- Wrapper for slides -->
              <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                  <div class="carousel-inner">
                    <div :class="index===0?'carousel-item active':'carousel-item'" v-for="(tes, index) in  session.testimotionals">
                      <div class="testimonial style-1">
                        <div class="testimonial-img">
                          <img class="img-center" :src="getStrapiMedia(tes.Author.formats.thumbnail.url,$config)" v-bind:alt="tes.name?tes.name:''">
                        </div>
                        <div class="testimonial-content">
                          <div class="testimonial-quote"><i class="fas fa-quote-left"></i>
                          </div>
                          <p v-if="tes.description" v-html="tes.description"/>
                          <div class="testimonial-caption">
                            <h5 v-if="tes.name && tes.name.length>0" v-html="tes.name"/>
                            <label v-if="tes.jobSide && tes.jobSide.length>0" v-html="tes.jobSide"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- End Item -->
                  </div>
                  <!-- End Carousel Inner -->
                </div>
              </div>
              <div class="controls">
                <ul class="nav">
                  <li data-target="#testimonial-1" :data-slide-to="index" :class="index===0?'active':''" v-for="(tes, index) in  session.testimotionals">
                    <a href="#">
                      <img class="img-fluid" :src="getStrapiMedia(tes.Author.formats.thumbnail.url,$config)" v-bind:alt="tes.name?tes.name:''">
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- End Carousel -->
          </div>
        </div>
      </div>
    </section>

    <section class="pos-r" v-if="session.boxType==='Type1' && session.title.length>0">
      <div class="round-anim"></div>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12 order-lg-12">
            <div class="section-title mb-0">
              <h2 class="title" v-html="session.title"></h2>
              <div class="title-bdr">
                <div class="left-bdr"></div>
                <div class="right-bdr"></div>
              </div>
              <p class="text-black" v-html="session.content"></p>
            </div>
          </div>
          <div class="col-lg-7 col-md-12 order-lg-1 md-mt-5">

            <div id="testimonial-1" class="testimonial-carousel testimonial-1 carousel slide" data-ride="carousel" :data-interval="session.slideSpeed">
              <!-- Wrapper for slides -->
              <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                  <div class="carousel-inner">
                    <div :class="index===0?'carousel-item active':'carousel-item'" v-for="(tes, index) in  session.testimotionals">
                      <div class="testimonial style-1">
                        <div class="testimonial-img">
                          <img class="img-center" :src="getStrapiMedia(tes.Author.formats.thumbnail.url,$config)" v-bind:alt="tes.name?tes.name:''">
                        </div>
                        <div class="testimonial-content">
                          <div class="testimonial-quote"><i class="fas fa-quote-left"></i>
                          </div>
                          <p v-if="tes.description" v-html="tes.description"/>
                          <div class="testimonial-caption">
                            <h5 v-if="tes.name && tes.name.length>0" v-html="tes.name"/>
                            <label v-if="tes.jobSide && tes.jobSide.length>0" v-html="tes.jobSide"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- End Item -->
                  </div>
                  <!-- End Carousel Inner -->
                </div>
              </div>
              <div class="controls">
                <ul class="nav">
                  <li data-target="#testimonial-1" :data-slide-to="index" :class="index===0?'active':''" v-for="(tes, index) in  session.testimotionals">
                    <a href="#">
                      <img class="img-fluid" :src="getStrapiMedia(tes.Author.formats.thumbnail.url,$config)" v-bind:alt="tes.name?tes.name:''">
                    </a>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>

    <section  v-if="session.boxType==='Type2' && session.title.length===0">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">

            <div class="owl-carousel" data-dots="false" data-nav="true" data-items="1" data-autoplay="true"  :data-interval="session.slideSpeed/10" :data-smartSpeed="session.slideSpeed/10">
              <div class="item"  v-for="(tes, index) in  session.testimotionals">
                <div class="testimonial style-2">
                  <div class="testimonial-img">
                    <img class="img-center" :src="getStrapiMedia(tes.Author.formats.thumbnail.url,$config)" v-bind:alt="tes.name?tes.name:''">
                  </div>
                  <div class="testimonial-content">
                    <div class="testimonial-quote"><i class="fas fa-quote-left"></i>
                    </div>
                    <p v-if="tes.description" v-html="tes.description"/>
                    <div class="testimonial-caption">
                      <h5 v-if="tes.name && tes.name.length>0" v-html="tes.name"/>
                      <label v-if="tes.jobSide && tes.jobSide.length>0" v-html="tes.jobSide"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="pos-r"  v-if="session.boxType==='Type2' && session.title.length>0">
      <div class="round-anim"></div>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12 order-lg-12">
            <div class="section-title mb-0">
              <h2 class="title" v-html="session.title"></h2>
              <div class="title-bdr">
                <div class="left-bdr"></div>
                <div class="right-bdr"></div>
              </div>
              <p class="text-black" v-html="session.content"></p>
            </div>
          </div>
          <div class="col-lg-7 col-md-12 order-lg-1 md-mt-5">

            <div class="owl-carousel" data-dots="false" data-nav="true" data-items="1" data-autoplay="true"  :data-interval="session.slideSpeed/10" :data-smartSpeed="session.slideSpeed/10">
              <div class="item"  v-for="(tes, index) in  session.testimotionals">
                <div class="testimonial style-2">
                  <div class="testimonial-img">
                    <img class="img-center" :src="getStrapiMedia(tes.Author.formats.thumbnail.url,$config)" v-bind:alt="tes.name?tes.name:''">
                  </div>
                  <div class="testimonial-content">
                    <div class="testimonial-quote"><i class="fas fa-quote-left"></i>
                    </div>
                    <p v-if="tes.description" v-html="tes.description"/>
                    <div class="testimonial-caption">
                      <h5 v-if="tes.name && tes.name.length>0" v-html="tes.name"/>
                      <label v-if="tes.jobSide && tes.jobSide.length>0" v-html="tes.jobSide"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>


    <section  v-if="session.boxType==='Type3' && session.title.length===0">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="owl-carousel" data-items="3 " data-md-items="2" data-sm-items="1" data-autoplay="true"  :data-interval="session.slideSpeed/10" :data-smartSpeed="session.slideSpeed/10">
              <div class="item" v-for="(tes, index) in  session.testimotionals">
                <div class="testimonial style-3">
                  <div class="testimonial-caption">
                    <h5 v-if="tes.name && tes.name.length>0" v-html="tes.name"/>
                    <label v-if="tes.jobSide && tes.jobSide.length>0" v-html="tes.jobSide"/>
                  </div>
                  <div class="testimonial-img">
                    <img class="img-center" :src="getStrapiMedia(tes.Author.formats.thumbnail.url,$config)" v-bind:alt="tes.name?tes.name:''">
                  </div>
                  <div class="testimonial-content">
                    <p v-if="tes.description" v-html="tes.description"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section class="pos-r"  v-if="session.boxType==='Type3' && session.title.length>0">
      <div class="round-anim"></div>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12 order-lg-12">
            <div class="section-title mb-0">
              <h2 class="title" v-html="session.title"></h2>
              <div class="title-bdr">
                <div class="left-bdr"></div>
                <div class="right-bdr"></div>
              </div>
              <p class="text-black" v-html="session.content"></p>
            </div>
          </div>
          <div class="col-lg-7 col-md-12 order-lg-1 md-mt-5">

            <div class="owl-carousel" data-items="3 " data-md-items="2" data-sm-items="1" data-autoplay="true"  :data-interval="session.slideSpeed/10" :data-smartSpeed="session.slideSpeed/10">
              <div class="item" v-for="(tes, index) in  session.testimotionals">
                <div class="testimonial style-3">
                  <div class="testimonial-caption">
                    <h5 v-if="tes.name && tes.name.length>0" v-html="tes.name"/>
                    <label v-if="tes.jobSide && tes.jobSide.length>0" v-html="tes.jobSide"/>
                  </div>
                  <div class="testimonial-img">
                    <img class="img-center" :src="getStrapiMedia(tes.Author.formats.thumbnail.url,$config)" v-bind:alt="tes.name?tes.name:''">
                  </div>
                  <div class="testimonial-content">
                    <p v-if="tes.description" v-html="tes.description"/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>


    <!--testimonial end-->
  </div>
</template>

<script>
import {getStrapiMedia} from "../../utils/medias";
import 'assets/global/sass/bootstrap/_carousel.scss'
import 'assets/global/sass/bootstrap/_nav.scss'
export default {
  name: "TestimotionalBlock",
  props:['session'],

  methods:{
    getStrapiMedia,
  },
}
</script>

<style>
.testimonial.style-3 .testimonial-img img {

  height: 100px;
  width: 100px;
}
</style>



