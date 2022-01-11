  /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
  */

 const paragraphs = document.querySelectorAll("p");

 const yellowSquare = document.getElementsByClassName("main-content");

 const redSquare = document.getElementsByClassName("center-content");

 const takeH1 = document.getElementsByClassName("title");

 const takeP = document.getElementsByTagName("p");


 function changeParagaph() {
       paragraphs[1].innerHTML = " Com um vasto conhecimento em tecnologia, trabalhando numa empresa maneira e realizando meus sonhos.";
 }

changeParagaph();

function changeSquareColor () {
       yellowSquare[0].style.background = "rgb(76,164,109";
}

changeSquareColor();

function changeRedSquare () {
       redSquare[0].style.background = "white";
}

changeRedSquare();

function changeText () {
       takeH1[0].innerText = "Exercício 5.1 - JavaScript";
}

changeText ();

function pToUpperCase () {
       takeP[0].innerHTML = takeP[0].innerHTML.toUpperCase();
}

pToUpperCase();