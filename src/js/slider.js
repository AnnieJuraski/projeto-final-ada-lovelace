const sliders = document.querySelectorAll('.slider');
const sliderCount = sliders.length;

const button = document.querySelectorAll('.botao-info');

const previous = document.getElementById('previous');
const next = document.getElementById('next');


let activeIndex = 0;

setActiveSlider(0);
next.addEventListener('click',() => {nextSlider()});
previous.addEventListener('click',() => {prevSlider()});


function setActiveSlider(index) {
  sliders[activeIndex].classList.remove('active');
  sliders[index].classList.add('active');
  activeIndex = index;
  deactivateButtons();
  
  sliders[index + 1].classList.add('next');
}


function nextSlider () {
  const nextIndex = (activeIndex + 1);
  const prevIndex = (activeIndex - 1); 

  sliders[activeIndex].classList.add('prev');
  sliders[activeIndex].classList.remove('active');  
  sliders[nextIndex].classList.remove('next');
  sliders[nextIndex].classList.add('active');  
  
  button[activeIndex].classList.remove('ativo');
  button[nextIndex].classList.add('ativo');   
    
  setActiveSlider(nextIndex);

}


function prevSlider () {
  const nextIndex = (activeIndex + 1);
  const prevIndex = (activeIndex - 1);
 
  sliders[activeIndex].classList.add('next');
  sliders[activeIndex].classList.remove('active');
  sliders[prevIndex].classList.remove('prev');     
  sliders[prevIndex].classList.add('active');

  button[activeIndex].classList.remove('ativo');
  button[prevIndex].classList.add('ativo');
    
    
  setActiveSlider(prevIndex)
}


//O clique calcula a diferença entre o indice do botão calculado e o indice ativo da informação, e retorna um valor referente ao resultado
button.forEach((botao, indice) => {
  botao.addEventListener('click', ()=>{
     difference = (activeIndex - indice);

    switch(difference){
      case 1:
        repeatFunc(prevSlider, 1);
        break;

      case 2:
        repeatFunc(prevSlider, 2);
        break;

      case 3:
        repeatFunc(prevSlider, 3);
        break;

      case 4:
        repeatFunc(prevSlider, 4);
        break;

      case -1:
        repeatFunc(nextSlider, 1);
        break;
      
      case -2:
        repeatFunc(nextSlider, 2);
        break;

      case -3:
        repeatFunc(nextSlider, 3);
        break;

      case -4:
        repeatFunc(nextSlider, 4);
        break;

      default:
        break;      
    }
  })
})



function getActiveIndex() {
  for (let i = 0; i < sliders.length; i++) {
    if (sliders[i].classList.contains('active')) {
      return i;
    }
  } 
}



function deactivateButtons() {
 

  if (getActiveIndex() == 0){
    previous.classList.add('hidden')
  }

  else{
    previous.classList.remove('hidden')

  }

  if(getActiveIndex() == sliderCount - 1){
    next.classList.add('hidden')
  }

  else{
    next.classList.remove('hidden')
  }
}



function repeatFunc (funcName, times){
  let i = 0

 for (i=0; i<times; i++){
  funcName();
 }
}






