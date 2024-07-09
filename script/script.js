'use strict';
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
		observe: true,
		observeParents: true,
		observeChildren: true,
	  },
});

const popupLinks = document.querySelectorAll('.popup-link');
const popupCloseIcons = document.querySelectorAll('.close-popup');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  popupLinks.forEach((popupLink) => {
    popupLink.addEventListener('click', (e) => {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  });
}

if (popupCloseIcons.length > 0) {
  popupCloseIcons.forEach((closeIcon) => {
    closeIcon.addEventListener('click', (e) => {
      popupClose(closeIcon.closest('.popup'));
      e.preventDefault();
    });
  });
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');

    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }

    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup_content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');

    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.catalog').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    lockPadding.forEach((el) => {
      el.style.paddingRight = lockPaddingValue;
    });
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
  unlock = false;

  setTimeout(() => {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(() => {
    if (lockPadding.length > 0) {
      lockPadding.forEach((el) => {
        el.style.paddingRight = '0px';
      });
    }

    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;

  setTimeout(() => {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function(e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

(function() {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    }
  }
})();

(function() {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();