//Ordene o array numbers em ordem decrescente e imprima seus valores;

//Algoritmo:
// 1 - Utiliza o código feito no exercício anterior;
// 2 - Muda a comparação feita dentro da estrutura condicional, onde irá ter como condição para que ocorra o bloco de código numbers[index] sendo maior que numbers[secondIndex].

/*Este código foi desenvolvido por Lucas Lima com auxílio do colega Guilherme Azevedo. Comparado com o código do gabarito e adicionado de alterações a partir dele. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);