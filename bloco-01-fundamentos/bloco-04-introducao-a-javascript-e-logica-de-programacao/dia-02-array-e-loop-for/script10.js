// Bônus 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

//Algoritmo:
// 1 - Usar array usado anteriormente.
// 2 - Cria uma estrutura de repetição que irá perccorer o array da posição 1, somando 1 a cada loop;
// 3 - Dentro dessa primeira estrutura de repetição terá uma outra estrutura de repetição que irá percorrer da posição 0 até que secondIndex seja menor que o número a posição percorrida no primeiro for, somando 1 a cada loop;
// 4 - Dentro desse segundo for se abrirá um bloco de código que terá uma estrutura condicional que:
        //Irá comparar se o valor percorrido no primeiro for (numbers[i]) (9) é menor que o valor contido no segundo for (numbers[secondIndex]) (5),se não for o bloco de código não abrirá e irá para o próximo loop,  se for, uma variável irá guardar o seu valor (position = numbers[i]), depois numbers[i] assumirá o valor de numbers[secondIndex], ficando com dois números iguais, após isso number[sedondIndex] assumirá o valor de position que foi o menor valor armazenado anteriormente.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);