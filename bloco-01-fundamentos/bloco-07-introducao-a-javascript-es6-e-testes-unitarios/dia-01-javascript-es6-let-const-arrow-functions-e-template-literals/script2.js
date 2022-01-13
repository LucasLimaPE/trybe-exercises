/*
1 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
2 - Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
3 - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

Nota:

Para resolução deste exercício utilizei um código feito em um exercício anterior que é responsável por ordenar os números dentro de um array em forma crescente, a intenção de utilizar este código foi fazer com que esta função funcionasse para qualquer array dado como parâmetro, para poder concatenar como foi pedido no exercício, armazenei a chamada da função dentro de uma variável e chamei a concatenação usando o template literals como foi pedido.

Recebi ajuda do colega Guilherme Azevedo para desbugar parte deste código, ele me ajudou a desbugar a parte do return e eu o ajudei a fazer a concatenação.
*/

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const ordemCrescente = (array) => {
// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
//   }
//   return array;
// }

// const executaFuncao = (ordemCrescente(oddsAndEvens));

// console.log(`Os números ${executaFuncao} se encontram ordenados de forma crescente!`);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordemCrescenteSort = (array) => {
    const arraySort = array.split(', ').sort();
    return arraySort;
}
 console.log(ordemCrescenteSort(oddsAndEvens));
