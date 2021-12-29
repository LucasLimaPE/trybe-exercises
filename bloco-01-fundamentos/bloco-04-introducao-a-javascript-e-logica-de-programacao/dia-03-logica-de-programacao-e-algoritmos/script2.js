// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

//Algoritmo:
// 1 - Usa-se a variável determinada no enunciado;
// 2 - Declara-se a variável que irá conter o valor da ṕrimeira variável e adicionar os métodos que irão fazer a string ser revertida;
// 3 - Há uma concatenação de métodos.
// 4 - O primeiro médoto o (.split()) é responsável por separar uma string dado um parâmetro para separação neste caso será a ocorência de um caractere, representado por aspas vazias(*sem o espaço pois o espaco também pode ser dado como paraâmetro(('')), assim o valor de entrada será divido em um array de substring;
// 5 - O segundo método o (.reverse('')) é o responsável por inverter a ordem do array de substrings feito pelo método (split()) , recebendo como parâmetro também a ocorrência de um caractere, ordenando de maneira invertida as separações feitas no (split('')).
// 6 - O terceiro e último método usado é o (.join()), que recebe como parâmetro uma string vazia, fazendo com que o que há entre cada posição do array de substrings criados no passo anterior seja retirado e cada letra se junte, formando o nóme se forma invertida.

/* Esta questão foi resolvida com consulta no gabarito do course e nos sites:
https://www.horadecodar.com.br/2020/05/06/como-inverter-uma-string-em-javascript/
https://www.w3schools.com/jsref/jsref_split.asp
https://www.w3schools.com/jsref/jsref_reverse.asp
https://www.w3schools.com/jsref/jsref_join.asp
*/

let word = 'tryber';
let reverseWord = word.split('').reverse('').join('');
console.log(reverseWord);


