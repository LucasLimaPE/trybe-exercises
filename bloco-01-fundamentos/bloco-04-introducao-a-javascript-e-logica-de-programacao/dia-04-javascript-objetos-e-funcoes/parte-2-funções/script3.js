// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

//Algoritmo: 
// 1 - Utiliza-se o mesmo código do exercício anterior, apenas mudando o nome da variável maiorIndice para menorIndice.
// 2 - Muda-se o sinal de comparação dentro do if de (<) para (>), fazendo com que agora seja procurado o menor valor, se for encontrado, menorIndice assumirá o valor da sua posição.

function buscaMaiorNome(array) {
    let menorIndice = 0;
    for (let i in array) {
        if (array[menorIndice] > array[i]) {
            menorIndice = i;
        }
    }
return menorIndice;
};

let arrayDeTeste = [6, 4, 0, 7, 10]; 

console.log(buscaMaiorNome(arrayDeTeste));