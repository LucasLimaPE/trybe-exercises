// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

//Algoritmo:
// 1 - Usar o array do exercício anterior;
// 2 - Declarar variável que vai conter o valor da soma dos números dentro do array;
// 3 - Criar estrutura de repetição que:
        //Percorrerá todas as posições do array somando o valor de cada uma à variável declarada anteriormente;
// 4 - Declarar uma variável que contenha o valor da média aritmática que é igual ao valor da variável total dividido pelo tamanho do array;
// 5 - Usar console.log() para imprimir o valor na tela da variável do passo anterior.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
}

mediaAritmetica = total / numbers.length;

console.log("Média= " + mediaAritmetica);