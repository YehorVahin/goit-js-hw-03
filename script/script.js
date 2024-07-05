'use strict';
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

const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
	const buttonElems = document.querySelectorAll(btnOpen);
	const modalElem = document.querySelector(modal);
	console.log(modalElem == null);
	modalElem.style.cssText = `
	  display: flex;
	  visibility: hidden;
	  opacity: 0;
	  transition: opacity ${time}ms ease-in-out;
	`;
  
	const closeModal = event => {
	  const target = event.target;
  
	  if (
		target === modalElem ||
		(btnClose && target.closest(btnClose)) ||
		event.code === 'Escape'
		) {
		
		modalElem.style.opacity = 0;
  
		setTimeout(() => {
		  modalElem.style.visibility = 'hidden';
		}, time);
  
		window.removeEventListener('keydown', closeModal);
	  }
	}
  
	const openModal = () => {
	  modalElem.style.visibility = 'visible';
	  modalElem.style.opacity = 1;
	  window.addEventListener('keydown', closeModal)
	};
  
	buttonElems.forEach(btn => {
	  btn.addEventListener('click', openModal);
	});
  
	modalElem.addEventListener('click', closeModal);
  };
	modalController({
		modal: '.modalw2',
		btnOpen: '.btnw2',
		btnClose: '.modal__close',
	});
	modalController({
		modal: '.modal',
		btnOpen: '.btn',
		btnClose: '.modal__close',
	});
	modalController({
		modal: '.modal_br',
		btnOpen: '.btn_br',
		btnClose: '.modal__close',
	});
	
	