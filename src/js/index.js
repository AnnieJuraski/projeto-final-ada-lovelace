const toggle = document.getElementById('toggle');  //Botão responsável por mudar o tema
const html = document.querySelector('html'); 
let theme = localStorage.getItem('theme');

let lightMode = localStorage.getItem('light-theme'); 


const enableLightMode = () => {
  // 1. Add the class to the body
  html.classList.add('light-theme');
  // 2. Update lightMode in localStorage
  localStorage.setItem('light-theme', 'enabled');
}

const disableLightMode = () => {
  // 1. Remove the class from the body
  html.classList.remove('light-theme');
  // 2. Update lightMode in localStorage 
  localStorage.setItem('light-theme', null);
}
 
// If the user already visited and enabled lightMode
// start things off with it on
if (lightMode === 'enabled') {
  enableLightMode();
  toggle.classList.toggle('active-toggle'); //adicionado toggle do botão para o botão não ficar com estados invertidos
}

// When someone clicks the button

toggle.addEventListener('click', function () {
    toggle.classList.toggle('active-toggle');
    lightMode = localStorage.getItem('light-theme')   
  
  if (lightMode !== 'enabled') {
    enableLightMode();

   
  } else {  
    disableLightMode(); 
  }
})