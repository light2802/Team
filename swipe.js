  var mySwiper = new Swiper('.swiper-container',{
  	effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        loop: true,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
    loop:true,
    autoplay: {
    	delay: 2500,
    	disableOnInteraction: true,
    },
  });
  
    $(".swiper-container").mouseenter(function() {
    mySwiper.autoplay.stop();
    console.log('slider stopped');
  });

  $(".swiper-container").mouseleave(function() {
    mySwiper.autoplay.start();
    console.log('slider started again');
  });