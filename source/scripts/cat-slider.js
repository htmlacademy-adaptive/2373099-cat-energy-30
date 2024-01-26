function initCatSlider() {
  const container = document.querySelector('.example__figure');
  document.querySelector('.example__input')?.addEventListener('input', (e) => {
    container.style.setProperty('--persent', `${e.target.value}%`);
    document.querySelector('output').innerHTML = `${e.target.value}%`;
  });
}

initCatSlider();
