// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado.

//Algoritmo:
// 1 - Usar array de números do exercício anterior;
// 2 - Criar variável que vai armazenar o valor da soma;
// 3 - Criar for (estrutura de repetição) que vai:
        //Percorrer todo o array;
        //A cada posição percorrida o valor da posição será adicionado à variável declarada anteriormente.
        //Usar console.log para imprimir o valor total somado no loop na tela.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
}

console.log(total);