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

const takeText = document.getElementsByTagName("p");

function changeText () {
    takeText[1].innerHTML = "Alcançando meus objetivos e trabalhando em uma empresa bolada!";
}

changeText();

const takeSquare = document.getElementsByClassName("main-content");

function changeColorYellowSquare () {
    takeSquare[0].style.backgroundColor = "rgb(76,164,109)";
}

changeColorYellowSquare();

const takeRedSquare = document.getElementsByClassName("center-content");

function changeColorRedSquare() {  
    takeRedSquare[0].style.backgroundColor = "white";
}

changeColorRedSquare();

const takeTitle = document.getElementsByClassName('title');

function fixText () {
    takeTitle[0].innerText = "Exercício 5.1 - JavaScript";
}

fixText();







