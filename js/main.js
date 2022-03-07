const videoBgc = document.querySelector('video').playbackRate = 3.0;
const contentContainer = document.querySelector('.content-container');
const onOffButton = document.querySelector('.content-onoff-btn');
const toggleClass = (elem, elemClass) => {
  document.querySelector(`${elem}`).classList.toggle(`${elemClass}`);
}
const openCloseContent = (content) => {
  onOffButton.textContent = content;
  toggleClass('.content-onoff-arrow__up', 'show');
  toggleClass('.content-onoff-arrow__down', 'show');
}

document.addEventListener('click', (e) => {
  const target = e.target;
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
})