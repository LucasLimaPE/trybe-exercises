// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

//Algoritmo:
// 1 - Usar o array utilizado nos exercícios anteriores.
// 2 - Declarar um array que irá conter o valor dos resultados das multiplicações.
// 3 - Criar loop para percorrer cada posição do array numbers.
// 4 - Abrir bloco de código declarando uma estrutura condicional que:
      //Irá comparar se o valor de index + 1 é menor que o tamanho do array. (Verificar se chegou ao último).
      //Se a condição anterior for verdadeira abrir-se-á o bloco de código, adicionando ao novo array (newArray), o valor percorrido multiplicado pelo valor da posição do número percorrido + 1 (número posterior a ele);
      //Se não, adicionar-se-á o valor percorrido atual ao array criado (newArray) multiplicado por dois (nesse caso será o último devido a condição para abertura do bloco de código que contém a estrutura condicional).

/*Este código foi desenvolvido por Lucas Lima com auxílio do colega Guilherme Azevedo. Comparado com o código do gabarito e adicionado de alterações a partir dele. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);