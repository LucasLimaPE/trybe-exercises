//3- Considere o array de strings abaixo:
//let array = ['java', 'javascript', 'python', 'html', 'css'];
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

//Algoritmo:
// 1 - Usar o array dado no enunciado;
// 2 - Determinar duas variáveis uma para a manor e outra para a maior palavra;
// 3 - Declarar loop que irá percorrer o array de strings;
// 4 - Abrir o bloco de código adicionando uma estrutura condicional que irá comparar se o comprimendo do número percorrido (array[i]) é menor que o o comprimeiro do valor na variável menorPalavra (array[0]), se for, menorPalavra assumirá o valor de (array[i]).
// 5 - Copiar o código anterior;
// 6 - Mudar a ocorrência de menorPalavra para maiorPalavra;
// 8 - Mudar o sinal da condicional para ('>'), fazendo com que agora se (array[i]) for maior que o valor contido em maiorPalavra (array[0]), maiorPalavra assumirá o seu valor;
// 9 - Usar console.log() para imprimir os valores em menorPalavra e maiorPalavra. 

/* De início coloquei o i (index) sem determinar que estava comparando o tamanho (.lenght), para o primeiro funcionou mas para o segundo não, então pesquisei em:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
Após isso comparei o meu código com o do gabarito presente no course e percebi que o que estava errado era que faltava determinar a comparação do tamanho dentro da estrutura condicional.
 */

let array = ['java', 'javascript', 'python', 'html', 'css'];

let menorPalavra = array[0];
let maiorPalavra = array[0];

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < menorPalavra.length) {
      menorPalavra = array[i];
    }
  }

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i];
    }
  }

  console.log(menorPalavra);
  console.log(maiorPalavra);
  
  

