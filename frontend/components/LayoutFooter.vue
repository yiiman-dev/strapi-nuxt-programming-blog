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
                <img id="footer-logo-white-img" :src="getStrapiMedia(global.logo.url)" class="img-center" alt="">
              </div>
              <p class="mb-0">ساساشت - قالب خلاق چند منظوره اپ، استارت آپ، شرکتی و ... قالب چند منظوره
                ریسپانسی بوت استرپ 4. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                از طراحان گرافیک است..</p>

            </div>
            <div class="col-lg-4 col-md-6 sm-mt-5">
              <h4 class="mb-4 text-white">لینک های کمکی</h4>
              <div class="footer-list justify-content-between d-flex">
                <ul class="list-unstyled w-100">
                  <li><a href="about-us.html">درباره ما</a>
                  </li>
                  <li><a href="services.html">خدمات</a>
                  </li>
                  <li><a href="team.html">تیم</a>
                  </li>
                  <li><a href="team-single.html">اعضای تیم</a>
                  </li>
                  <li><a href="contact.html">تماس با ما</a>
                  </li>
                </ul>
                <ul class="list-unstyled w-100">
                  <li><a href="blog-right-sidebar.html">بلاگ</a>
                  </li>
                  <li><a href="faq.html">گفت و گو</a>
                  </li>
                  <li><a href="error-404.html">خطای 404</a>
                  </li>
                  <li><a href="privacy-policy.html">حریم شخصی</a>
                  </li>
                  <li><a href="terms-and-conditions.html">قوانین</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 md-mt-5">
              <div class="footer-cntct">
                <h4 class="mb-4 text-white">در تماس باشید</h4>
                <ul class="media-icon list-unstyled">
                  <li>
                    <p class="mb-0"><i class="la la-map-o"></i> <b> ایران، ارومیه، شاهین دژ</b>
                    </p>
                  </li>
                  <li><i class="la la-envelope-o"></i> <a href="mailto:themeht23@gmail.com"><b>themeht23@gmail.com</b></a>
                  </li>
                  <li><i class="la la-phone"></i> <a href="tel:+912345678900"><b>+91-234-567-8900</b></a>
                  </li>
                </ul>
                <div class="social-icons mt-3">
                  <ul class="list-inline">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li><a href="#"><i class="fab fa-dribbble"></i></a>
                    </li>
                    <li><a href="#"><i class="fab fa-skype"></i></a>
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
              <div class="col-md-12"><span>کپی رایت 1398 ساساشت ، بومی سازی توسط <u><a href="#">جعفر عباسی</a></u> | تمام حقوق محفوظ است</span>
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


export default {
  name: "LayoutFooter",
  props:['global'],
  methods:{getStrapiMedia}
}
</script>

<style scoped>

</style>
