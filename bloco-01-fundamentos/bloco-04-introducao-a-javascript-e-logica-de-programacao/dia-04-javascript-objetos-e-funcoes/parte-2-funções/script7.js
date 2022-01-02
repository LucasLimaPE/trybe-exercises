// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

//Algoritmo:
// 1 - Declara-se a função verificaFimDaPalavra que recebe duas strings como parâmetro e abre-se o primeiro bloco de código;
// 2 - Declara-se duas variáveis (inversoPalavra) e (inversoFimPalavra), onde serão aplicados os métodos (.spli('')), qie irá separar cada posição da string por aspas, (.reverse()), que irá reverter as posições que foram separadas em (.split()) e (.join()) que irá juntar novamente as posições formando novamente uma String, agora de forma reversa.
// 3 - Declara-se uma variável result sem valor definido;
// 4 - Declara-se um for que irá de 0 até o tamanho da variável (inversoFimPalavra), sendo acrescido de um a cada loop, abrindo o segundo bloco de código;
// 5 - Declara-se uma condicional que irá comparar de (inversoPalavra[index]), ou seja, a primeira letra da string de forma revertida é diferente a (inversoFimPalavra), se isso acontecer, abrir-se-a o terceiro bloco de código onde a variável (result) assumirá o valor false, e o loop irá parar (break;).
// 6 - Se não, ou seja, se a posição nas duas variáveis forem iguais, result assumirá o valor true, e a verificação irá continuar;
// * - Atenta-se que o for irá percorrer apenas o tamanho da variável que representa o final da palavra, assim não irá verificar toda a palavra e sim apenas a parte do seu final.
// 7 - Declara-se como retorno da função o resultado seja a variável (result);

/*
 Este código foi tirado do gabarito, após tentar fazer um if e depois um for com uma lógica parecida mas estava usando os métodos dentro do for e não estava conseguindo chegar na lógica usada para percorrer apenas o tamanho do fim da palavra, no gabarito isso foi resolvido usando o tamanho da variável (inversoFimPalavra[index]) e com o break após a comparação.
*/
  
  function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
    let result;
  
    for (let index = 0; index < inversoFimPalavra.length; index += 1) {
      if (inversoPalavra[index] !== inversoFimPalavra[index]) {
        result = false;
        break;
      } else {
        result = true;
      }
    }
    
    return result;
  }
  
  console.log(verificaFimPalavra('trybe', 'be')); //true
  console.log(verificaFimPalavra('joaofernando', 'fernan')); //false


















