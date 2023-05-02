const buttonsImg = document.querySelectorAll('.botao-info');
const imagens = document.querySelectorAll('.image');


buttonsImg.forEach((button, index) => {
    button.addEventListener('click', () => {

        deactivateButton();

        button.classList.add('ativo');

        deactivateImage();

        imagens[index].classList.add('active');

    })
})

function deactivateImage() {
    const activeImages = document.querySelector('.active');
    activeImages.classList.remove('active');
}


function deactivateButton() {
    const buttonActive = document.querySelector('.ativo');
    buttonActive.classList.remove('ativo');
}

