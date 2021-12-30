// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if 

/*Este código foi desenvolvido por Lucas Lima com auxílio do colega Guilherme Azevedo. Comparado com o código do gabarito e adicionado de alterações a partir dele. */

const a = 10;
const b = 8;
const c = 1988;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    console.log("true");
} else {
    console.log("false");
}