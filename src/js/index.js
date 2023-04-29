const toggle = document.getElementById('toggle');
const html = document.querySelector('html');






toggle.addEventListener('click', function (){
    toggle.classList.toggle('active');
    html.classList.toggle('dark-theme');
    html.classList.toggle('light-theme');
})








