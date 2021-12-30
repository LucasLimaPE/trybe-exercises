//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

//Algoritmo:
// 1 - Declarar array que irá conter os valores a serem criados;
// 2 - Criar estrutura de repetição que irá de de 1 a 25 somando 1 a cada loop;
// 3 - Declarar dentro do bloco de código que a cada loop será adicionado (.push) ao array o número referênte a posição percorrida ([i]);
// 4 - Usar console.log() para imprimir o valores do array na tela. 

/*Este código foi desenvolvido por Lucas Lima com auxílio do colega Guilherme Azevedo. Comparado com o código do gabarito e adicionado de alterações a partir dele. */

let numbers = [];

for (let i = 1; i <= 25; i += 1) {
  numbers.push(i);
}

console.log(numbers);