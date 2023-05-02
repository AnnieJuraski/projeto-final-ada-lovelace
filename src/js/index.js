const toggle = document.getElementById('toggle');
const html = document.querySelector('html');
let theme = localStorage.getItem('theme');

if (theme != null){
    html.classList.toggle('light-theme');
    toggle.classList.toggle('active'); 
}






toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');    
    changeTheme();
})

function changeTheme(){
    if (theme != null){
        localStorage.removeItem('theme');
    }else{
        localStorage.setItem('theme', 'light-theme');
    }
    html.classList.toggle('light-theme');
        
    }










