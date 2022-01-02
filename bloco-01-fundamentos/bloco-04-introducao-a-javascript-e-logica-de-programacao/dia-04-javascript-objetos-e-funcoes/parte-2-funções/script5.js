// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

//Algoritmo:
// 1 - Declara-se a função (buscaMaisRepetido), que recebe como parâmetro um array, e será responsável por retornas o número mais repetido dentro de um array, abrindo o primeiro bloco de código;
// 2 - Declara-se uma variável (maisRepetido), responsável por guardar o valor do número mais repetidom tendo valor inicial 0;
// 3 - Declara-se uma variável (comparaRepetição), que será terá seu valor inicial 0, que será comparada com o número de repetições de cada número;
// 4 - Declara-se um (for/in) que irá percorrer cada posição do array, abrindo o segundo bloco de código;
// 5 - Declara-se uma variável (contaRepetição), reponsável armazenar o valor de repetições do número percorrido no primeiro for;
// 6 - Declara-se um segundo for/in que também irá percorrer o array e abre-se o terceito bloco de código;
// 7 - Declara-se uma estutura condicional que tem como condição de abertura do quarto bloco de código se o número percorrido no primeiro (array[index1]) for igual ao número percorrido no segundo for (array[index2]), caso isso aconteça, a variável (contaRepetição) será adicionada de 1;
// 8 - Após a primeira condição ser verificada, é declarada uma outra condição que, se (contaRepeticao) for maior que comparaRepetição, se abrirá um bloco de um quinto bloco de código onde a variável (comparaRepeticao) irá assumir o valor da variável (contaRepeticao), e a variável (maisRepetido) irá assumir o valor da posição percorrida no primeiro for (array[index1]);
// 9 - Ainda dentro do primeiro bloco de código declara-se que a função irá retornar o valor da variável (mais Repetido).

/* O colega Guilherme Azevedo me ajudou a debugar parte deste código */

function buscaMaisRepetido (array) {    
    let maisRepetido = 0;
    let comparaRepeticao = 0;
    for (let index1 in array) {
        contaRepeticao = 0;
        for (let index2 in array) {
            if (array[index1] === array[index2]) {
                contaRepeticao += 1
            } else if (contaRepeticao > comparaRepeticao) {
                       comparaRepeticao = contaRepeticao;
                       maisRepetido = array[index1];
            }
        }

    }
    return maisRepetido;
};

let arrayDeTeste = [2, 3, 2, 5, 8, 2, 3];

console.log(buscaMaisRepetido(arrayDeTeste));