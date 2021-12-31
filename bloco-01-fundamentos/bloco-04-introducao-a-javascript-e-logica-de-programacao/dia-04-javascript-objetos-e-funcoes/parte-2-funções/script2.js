// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

//Algoritmo:
// 1 - Declara-se uma função que recebe como parẫmetro um array, e é aberto o primeiro bloco de código;
// 2 - Declara-se uma variável que irá conter o valor 0.
// 3 - Declara-se um for/in para percorrer todas as posições do array, e abre-se o segundo bloco de código;
// 4 - Declara-se uma estrutura condicional que compara se o valor da primeira posição do array (array[maiorIndice]) é menor que o valor da posição percorrida dentro do for/in, buscando assim o maior valor, se isso acontecer, abrir-se-á o terceiro bloco de código, onde a variável maiorIndice assumirá o valor da posição atual percorrida, onde houve a ocorrência de um número maior. fecha-se o segundo e o terceito;
// *** Atenta-se que aqui a variável irá assumir o índice do valor e não o valor do índice. 
// 5 - Ainda dentro do primeiro bloco de código, com a intenção de que aconteça a comparação primeiro entre todos os valores do array antes de acontecer o retorno, declara-se que o return desta função será o valor da variável maiorIndice, ou seja, a posição do maior valor. 

/*
Pesquisas feitas nos sites:
https://imasters.com.br/front-end/diferenca-entre-for-of-e-for-in

https://www.w3schools.com/jsref/jsref_forof.asp

Gabarito da questão no Course da Trybe.
*/

function indiceDoMaiorValor(array) {
    let maiorIndice = 0;
    for (let i in array) {
        if (array[maiorIndice] < array[i]) {
            maiorIndice = i;
        }
    }
return maiorIndice;
}

let arrayDeTeste = [2, 3, 200, 7, 10, 1];

console.log(indiceDoMaiorValor(arrayDeTeste));
