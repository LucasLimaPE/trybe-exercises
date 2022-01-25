/*
1 - Dada uma matriz, transforme em um array.
*/

/*
Após várias tentativas de resolver este exercício resolvi olhar o gabarido e conheci esse método (.concat())
Posteriormente fui na mentoria do Roberval e ele me explicou um pouco mais sobre o metodo (concat()) e sobre o funcionbamento do (.reduce()).
Como exercício para absorção do que foi feito, como de costume, irei explicar com minhas palavras este código, fiz uma pequena alteração no código para que ele consiga executar a mesma função para arrays diferentes.

Algoritmo explicativo:

1 - Usar-se-à o array (arrays) como parâmetro para executar o que se pede no exercício.
2 - Declara-se a função (flatter()) sendo uma arrow functions que recebe como parâmetro um array;
3 - Declara-se como retorno o parâmetro (array) recebendo a HOF (Higher Order Function) (.reduce()) que receberá como parâmetro acc(acumulador) e curr (valor corrente);
4 - O retorno do reduce será o uso do metódo (.concat()) no acc (acumulador), o método (.concat()) é responsável por retornar um novo array com todos os arrays ou valores passados como parâmetro.
5 - Como foi passado como parâmetro o valor corrente e dentro dos parâmetros do (.reduce()) foi declarado um segundo parâmetro ([]) que faz com que o acumulador seja um array vazio os valores em curr (valor corrente) serão adicionados dentro do array vazio retornado para o reduce os valores dentro do array fazendo com que o reduce retorne um esse array criado com os métodos.

Pesquisas feitas em:

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

*/
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (array) => array.reduce((acc, curr) => acc.concat(curr), []);

console.log(flatten(arrays));