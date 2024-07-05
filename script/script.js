const swiper = new Swiper('.swiper',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
	simulateTouch: false,
  	loop: true,
	speed: 400,
	spaceBetween: 100,
	autoplay: {
		delay: 5000,
		observe: true,
		observeParents: true,
		observeChildren: true,
	  },
});

const modalController = ({modal, btnOpen, btnClose}) => {	
	const buttonElems = document.querySelectorAll(btnOpen);
	const modalElems = document.querySelector(modal);

	modalElems.style.cssText = `
		display: flex;
		visibility: hidden;
		opasity: 0;
		transition: opacity 300ms ease-in-out;
		min-width: 0;
	`;

	const closeModal = event => {
		const target = event.target;

		if(target === modalElems || target.closest(btnClose)){
			modalElems.style.opacity = 0;

			setTimeout(() =>{
				modalElems.style.visibility = 'hidden';
			}, 300)
		}
	}

	const openModal = () => {
		modalElems.style.visibility = 'visible';
		modalElems.style.opacity = 1;
	};

	buttonElems.forEach(btn => {
		btn.addEventListener('click', openModal)
	});

	modalElems.addEventListener('click', closeModal)};
	modalController({
		modal: '.modal',
		btnOpen: '.btn',
		btnClose: '.modal__close',
	});
	modalController({
		modal: '.modal1',
		btnOpen: '.btn2',
		btnClose: '.modal__close',
	});
	modalController({
		modal: '.modal2',
		btnOpen: '.btn3',
		btnClose: '.modal__close',
	});
	modalController({
		modal: '.modal3',
		btnOpen: '.btn4',
		btnClose: '.modal__close',
	});
	modalController({
		modal: '.modal',
		btnOpen: '.btn2',
		btnClose: '.modal__close',
	});
	modalController({
		modal: '.modalbr1',
		btnOpen: '.btnbr1',
		btnClose: '.modal__close',
	});
	modalController({
		modal: '.modalbr2',
		btnOpen: '.btnbr2',
		btnClose: '.modal__close',
	});