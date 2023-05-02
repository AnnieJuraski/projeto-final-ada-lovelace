<h1>Projeto final Mais Mulheres Em Tech - Potência Feminina/Womakers Code </h1>
<br>
<br>
<p> Projeto desenvolvido como projeto final do curso de capacitação Mais Mulheres em Tech, oferecido pela Womakers Code. O objetivo foi escolher uma mulher importante na área da tecnologia e fazer um site sobre ela. Eu escolhi a primeira programadora da história, Ada Lovelace<p>
<br>
<br>
<br>
<h2>Layout</h2>
<br>
Pensei nesse projeto e fiz um protótipo de baixa fidelidade no Canvas. Então aos poucos fui melhorando ele até chegar no resultado final
<br>
<br>
<br>
<h2>HTML</h2>
<br>
<br>
No HTML estruturei o site em 3 seções: FGooter, conteúdo/main e header. Adicionei classes para criar um slider de informações com JS puro.
<br>
<br>
<br>
<h2>CSS</h2>
<br>
<br>
Estilizei o site com o tema escuro como padrão, usando variáveis do CSS para realizar a mudança de tema, ao clicar no botão usando JavaScript. Criei um CSS para responsividade do site e outro para resetar as configurações do navegador.
<br>
<br>
<br>
<h2>JavaScript</h2>
<br>
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


