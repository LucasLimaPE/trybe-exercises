//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

/*Este código foi desenvolvido por Lucas Lima com auxílio do colega Guilherme Azevedo. Comparado com o código do gabarito e adicionado de alterações a partir dele. */

let numbers = [];

for (let i = 1; i <= 25; i += 1) {
  numbers.push(i);
}

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i] / 2);
  };