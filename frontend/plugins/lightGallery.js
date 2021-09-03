
if(process.browser){
  const lightGallery=require('lightgallery/lightgallery.min');
  const lgZoom=require('lightgallery/plugins/zoom/lg-zoom.min');
  $('[target="lightgallery"]').each((index,el)=>{
    var l=lightGallery($(el)[0], {
      speed: 500,
      plugins: [lgZoom],
      selector: '.item',
    });
    console.log(l);
  })

}
