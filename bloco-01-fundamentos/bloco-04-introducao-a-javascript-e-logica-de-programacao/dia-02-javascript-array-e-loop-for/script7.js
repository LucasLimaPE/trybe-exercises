//Utilizando for , descubra qual o menor valor contido no array e imprima-o.

//Algoritmo:
// 1 - Usar mesmo código anterior;
// 2 - Trocar o nome da variável maiorNumero por menorNumero em todas as auas ocorrências;
// 3 - Trocar sinal na comparação entre o número percorrido no for (numbers[i]) e o valor da variável menorNúmero para menor que '<';

/*Este código foi desenvolvido por Lucas Lima com auxílio do colega Guilherme Azevedo. Comparado com o código do gabarito e adicionado de alterações a partir dele. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < menorNumero) {
    menorNumero = numbers[i];
  }
}

console.log(menorNumero);