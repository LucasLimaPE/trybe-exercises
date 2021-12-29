//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

//Algoritmo:
// 1 - Utilizar o mesmo array dos exercícios anteriores;
// 2 - Declarar uma varável que irá conter o valor do maior número;
// 3 - Criar estrutura de repetição que:
        //Percorra todas as posições do array;
        //Dentro da estrutura de repetição existirá uma estrutura condicional que irá comparar se o número da posição atual do for (numbers[i]) é maior que o número declarado na variável do passo 2 (maiorValor), se for, a variável do passo dois assumirá o valor da posição percorrida no for(numbers[i]).
// 4 - Usar console.log() para imprimir na tela o valor da variável maiorValor.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > maiorValor) {
        maiorValor = numbers[i];
    }
}

console.log(maiorValor);