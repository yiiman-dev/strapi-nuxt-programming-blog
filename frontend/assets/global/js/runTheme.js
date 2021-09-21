
export default (app)=>{

  let jsList=[
    {src: "/js/common-theme.js"},
    {src: "/js/jquery.nice-select.js"},
    {src: "/js/owl-carousel/owl.carousel.min.js"},
    {src: "/js/magnific-popup/jquery.magnific-popup.min.js"},
    {src: "/js/counter/counter.js"},
    {src: "/js/isotope/dist/isotope.pkgd.min.js"},
    {src: "/js/particles.min.js"},
    {src: "/js/vivus/pathformer.js"},
    {src: "/js/vivus/vivus.js"},
    {src: "/js/raindrops/jquery-ui.js"},
    {src: "/js/raindrops/raindrops.js"},
    {src: "/js/countdown/jquery.countdown.min.js"},
    {src: "/js/contact-form/contact-form.js"},
    // {src: "/js/contact-form/jquery.validate.min.js"},
    // {src: "/js/map.js"},
    {src: "/js/wow.min.js"},
    {src: "/js/color-customize/color-customizer.js"},
  ]
  // for (let i = 0; i < jsList.length; i++) {
  //   require('/assets/global'+jsList[i].src);
  // }

  require('/assets/'+app.$i18n.localeProperties.layout+'/js/theme-script.js').default();
}
