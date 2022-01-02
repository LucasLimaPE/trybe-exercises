// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda.

//Algoritmo:
// 1 - Foi usado como base o código feito no exercício anterior;
// 2 - maiorNome tem como valor inicial um array contendo uma string vazia;
// 3 - Declara-se um for/in para percorrer todas as posições do array;
// 4 - Abre-se uma estrutra condicional que compara se o tamanho de maior nome é menor que o tamanho do valor da posição percorrida no for/in;
// 5 - Caso isso aconteça, menorNome assumirá o valor da posição atual percorrida.
// 5 - A função retorna o valor de maiorNome.

function buscaMaiorNome(array) {
    let maiorNome = [''];
    for (let i in array) {
        if (maiorNome.length < array[i].length) {
            maiorNome = array[i];
        }
    }
return maiorNome;
};

let arrayDeTeste = ['José', 'LucasLucasLucasLucas', 'Nádia', 'FernandaAbreu', 'Cairo', 'Joana']; 

console.log(buscaMaiorNome(arrayDeTeste));