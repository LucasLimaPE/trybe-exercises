// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

//Algoritmo:
// 1 - Declarar uma variável que irá conter o valor a ser fatorado;
// 2 - Declarar uma variável que irá conter o valor da fatoração do valor dado como entrada na variável declarada no passo 1, com um valor inicial de 1;
// 3 - Declarar uma estrutura de repetição que irá percorrer a partir do número dado como entrada no passo 1 até que esse número seja maior que zero;
// 4 - Abrir-se-á o bloc de código e, dentro dele, irá acontecer a multiplicação de fatorial por index, fazendo com que fatorial assuma o valor multiplicad;
// 5 - Declara um console.log para imprimir o valor de fatorial.

/* Este código foi feito a partir do gabarito, devido ao meu ter ficado muito grande na tentativa de fazer funcionar com qualquer número, consultei-o e vi que existia uma solução muito mais prática, declarando uma variável para conter o número a ser fatorado e mudando o for para percorrer a partir do número declarado na variável até que esse número seja maior que zero.*/

let numeroFatorado = 3;

let fatorial = 1;

for (let index = numeroFatorado; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);