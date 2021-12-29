//5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

/*Este código foi desenvolvido por Lucas Lima com auxílio do colega Guilherme Azevedo. Comparado com o código do gabarito e adicionado de alterações a partir dele. */

const ang1 = 60;
const ang2 = 60;
const ang3 = 60;

if (ang1 + ang2 + ang3 === 180) {
    console.log("true");
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0){
    console.log("erro");
} else {
    console.log("false");
}