const container = document.querySelector('.container');
const sliders = document.querySelectorAll('.slider');
const sliderCount = sliders.length;
const button = document.querySelectorAll('botao-info');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
let activeIndex = 0;


next.addEventListener('click',() => {nextSlide});

setActiveSlider(0);


function setActiveSlider(index) {
  sliders[activeIndex].classList.remove('active');
  sliders[index].classList.add('active');
  activeIndex = index;
}


function nextSlide () {
  const nextIndex = (activeIndex + 1);
  const prevIndex = (activeIndex - 1);

    sliders[activeIndex].classList.remove('active');
    sliders[nextIndex].classList.add('active');



}
















function shiftSliders() {
  const nextIndex = (activeIndex + 1) % sliderCount;
  const prevIndex = (activeIndex - 1 + sliderCount) % sliderCount;
  sliders[activeIndex].classList.add('next');
  sliders[nextIndex].classList.add('active');
  sliders[prevIndex].classList.remove('active');
  sliders[prevIndex].classList.add('prev');
  setTimeout(() => {
    sliders[activeIndex].classList.remove('next');
    sliders[prevIndex].classList.remove('prev');
    setActiveSlider(nextIndex);
  }, 500);
}

document.querySelector('#next').addEventListener('click', () => {
  shiftSliders();
});

