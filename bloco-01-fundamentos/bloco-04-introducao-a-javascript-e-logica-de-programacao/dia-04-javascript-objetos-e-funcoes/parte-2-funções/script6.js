// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 

//Algoritmo;
// 1 - Declara-se uma função somatorio, que recebe como parâmetro n, que será o número de entrada, e abre-se o primeiro bloco de código;
// 2 - Declara-se uma variável (soma) que irá armazenar o valor da soma;
// 4 - Declara-se uma variável (armazenaNumero) que irá armazenar cada valor pecorrido e somado;
// 3 - Declara-se um for que irá percorrer de 1 até o número de entrada, sendo acrescentado de 1 a cada loop, e abre-se o segundo bloco de código;
// 4 - Declara-se uma condicional que irá comparar se o número percorrido é menor ou igual ao número de entrada, se isso acontecer, abrir-se-á o terceito bloco de código onde o valor de indice será somado valor da variável (soma);
// 5 - Ainda dentro do terceiro bloco de código o valor do índice será adicionado ao array (armazenaNumero);
// * - Após a criação do código pedi ajuda ao colega Guilherme Azevedo para debugarmos juntos a parte do return, já sabia que usária o (.join) mas as formas que tentei não estavam dando certo, juntos desenvolvemos a ideia de concatenar no return o uso do (.join) com o sinal de mais e o valor da variável soma.
// 6 - Declara-se o return ainda dentro do primeiro bloco de código.

function somatorio(n) {
    let soma = 0;
    let armazenaNumero = [];
    for (let index = 1; index <= n; index += 1) {
        if (index <= n) {
            soma += index;
            armazenaNumero.push(index);
        }
    }
    return armazenaNumero.join('+') + ' = ' + soma;
};

console.log(somatorio(9));
