<h1>Projeto final Mais Mulheres Em Tech - Potência Feminina/Womakers Code </h1>
<br>
<br>
 Projeto desenvolvido como projeto final do curso de capacitação Mais Mulheres em Tech, oferecido pela Womakers Code. O objetivo foi escolher uma mulher importante na área da tecnologia e fazer um site sobre ela. Eu escolhi a primeira programadora da história, Ada Lovelace
<br>
 This project was developed as the Final Project of the course "Mais Mulheres em Tech", offered by Womakers Code. The goal was choose a woman that was important in the tech area and creat a web site about her. I chose the first programmer of history, Ada Lovelace.
<br>
<br>
<h2>Layout</h2>
<br>
Pensei nesse projeto e fiz um protótipo de baixa fidelidade no Canvas. Então aos poucos fui melhorando ele até chegar no resultado final.
<br>
I created a low fidelity prototype on Canvas based on my first thoughts. As I was building the site, I had new ideas and improved  it until I achieved the final result.
<br>
<br>
<br>
<h2>HTML</h2>
<br>
No HTML estruturei o site em 3 seções: header, conteúdo/main e footer. Adicionei classes para criar um slider de informações com JS puro.
<br>
Using HTML I structured the site based on 3 sections: header, content/main and footer. Then I created class in order to create a slider with vanilla JS.
<br>
<br>
<br>
<h2>CSS</h2>
<br>
Estilizei o site com o tema escuro como padrão, usando variáveis do CSS para realizar a mudança de tema, ao clicar no botão usando JavaScript. Também com CSS crei a responsividade do site.
<br>
I styled the site with dark-theme as default, using CSS variables to change theme, by clicking the toggle button. For that I used JS. Also created a CSS for responsiveness.
<br>
<br>
<br>
<h2>JavaScript</h2>
<br>
O mais desafiador. Criei uma lógica para armazenar a escolha de tema no Local Storage e adicionei funcionalidades para que quando clicasse na div id #toggle o tema mude. Também criei dois efeitos de slides, um para a galeria e utro para a biografia.
<br>
<br>
Criei uma lógica para identificar o botão clicado e fazer o próximo slide vir da direita e o anterior da esquerda, usando o .classList.Add e o classList.Remove, utilizando o CSS para criar o efeito.
<br>
<br>
Também criei uma lógica de identificar o botão de índice clicado, calcular a diferença entre o indíce de slide atual para que então ele aplique as funções nextSlider ou prevSlide, utilizando uma outra função para repetir essas funções um número adequado de vezes.
<br>
<br>
Para a galeria optei por uma abordagem diferente, sendo a navegação exclusivamente feita pelos botões, utilizando o JS para adicionar classes que deixariam a imagem visível, através da subtituição no CSS de display:none por display:block.
<br>
<br>
<br>
The most challenging. I created a logic to store the chosen theme in the Local Storage and created a function so that when the user clicks on the #toggle div, the tame changes. Also created two effects for cahnge of content, on for the bibliography and the other for the gallery.
<br>
<br>
Also created a logic to identify the index button clicked, then calculate the difference between the current active index and the clicked button so that is applies the nextSlider or prevSlide function a certain amount of times
<br>
<br>
For the gallery I tried a idfferent approach. The navigation is made only with the index buttons, using JS to add and remove "active class", which makes the image visible.




