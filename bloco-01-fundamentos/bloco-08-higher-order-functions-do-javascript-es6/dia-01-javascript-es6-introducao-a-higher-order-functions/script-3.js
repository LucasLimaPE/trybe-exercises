/*
3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const geradorDePontos = (gabarito, respostas) => {
    let contador = 0;
    for (let index = 0; index <= respostas.length; index += 1) {
            if (gabarito[index] == respostas[index]) {
                contador += 1;
            }
            if (gabarito[index] != respostas[index]) {
                contador -= 0.5;
            }
            if (respostas[index] == 'N.A') {
                contador += 0;
            }
            }
            return contador;
        }

const geradorDeNotas = (gabarito, respostas, callback) => {
    return `${callback(gabarito, respostas)}`;
};

console.log(geradorDeNotas(RIGHT_ANSWERS, STUDENT_ANSWERS, geradorDePontos));
















       

console.log(geradorDePontos(RIGHT_ANSWERS, STUDENT_ANSWERS));