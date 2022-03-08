const videoBgc = document.querySelector('video').playbackRate = 3.0;
const contentContainer = document.querySelector('.content-container');
const onOffButton = document.querySelector('.content-onoff-btn');
const result = document.querySelector('.header');
const toTopArrow = document.querySelector('.arrow-top');
const toggleClass = (elem, elemClass) => {
  document.querySelector(`${elem}`).classList.toggle(`${elemClass}`);
}
const openCloseContent = (content) => {
  onOffButton.textContent = content;
  toggleClass('.content-onoff-arrow__up', 'show');
  toggleClass('.content-onoff-arrow__down', 'show');
}
const arrowVisibility = () => {
  if (result.getBoundingClientRect().top < -100) {
    toTopArrow.style.display = 'block';
  } 
  if (result.getBoundingClientRect().top >= -100) {
    toTopArrow.style.display = 'none';
  }
}
const arrowTop = () => {
  arrowVisibility();
  window.addEventListener('scroll', () => {
    arrowVisibility();
  })
}
const clickHandler = () => {
  document.addEventListener('click', (e) => {
    const target = e.target;
    const targetToTop = target.closest('[href="#top"');
    if (target.matches('.content-onoff-btn') || target.matches('.content-onoff-arrow__down') || target.matches('.content-onoff-arrow__up')) {
      toggleClass('.content-container', 'active');
      let textContent = target.textContent;
      console.log(textContent);
      if (contentContainer.classList.length === 2) {
        openCloseContent('Скрыть');
      } else if (contentContainer.classList.length < 2) {
        openCloseContent('Развернуть');
      }
    }
    if (targetToTop !== null) {
      e.preventDefault();
      const id = document.querySelector('[href="#top"').getAttribute('href').substring(1),
        scrollTo = document.getElementById(id),
        elemPosition = scrollTo.getBoundingClientRect().top;
      window.scrollBy({
        top: elemPosition,
        behavior: 'smooth'
      });
    }
  })
}

clickHandler();
arrowTop();