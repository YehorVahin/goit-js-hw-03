const swiper = new Swiper('.swiper',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	simulateTouch: false,
  	loop: true,
	speed: 400,
	spaceBetween: 100,
	autoplay: {
		delay: 5000,
	  },
});