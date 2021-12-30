// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

//Algoritmo:
// 1 - Declara-se uma variável com o valor inicial zero;
// 2 - Declara-se um for que vai de 0 a 50 e será acrescentado de 1 a cada loop, sendo responsável por gerar o dividendo;
// 3 - Declara-se uma variável isPrime que inicialmente terá seu valor como true, que servirá para que biggesNumber assuma seu valor, este valor só mudará quando um novo número primo for detectado; 
// 4 - Declara-se um for dentro do for criado anteriormente, que irá percorrer de 2 até que ele seja menor que o valor do primeiro for (dividendo), acrescentando um a cada loop;
// 5 - Declara-se dentro do bloco de código do segundo for uma estrutura condicional (if/else), que irá comparar se o dividendo (primeiro for), durante o loop foi divisível por algum dos números percorridos no segundo for (divisor), se isso acontecer, isPrime assumirá o valor false;
// 6 - Atenta-se que biggestNumber como está acontecendo dentro do primeiro bloco de código só mudará o valor de biggestNumber na próxima ocorrência de um número primo, visto que o if que faz isso acontecer está dentro do bloco primeiro bloco de código (primeiro for), caso o valor atual de isPrime seja false nada ocorrerá com biggestNumber.
// 7 - Usa-se console.log() para imprimir o valor de biggestPrimeNumber;

/* Este código foi retirado do gabarito, inicalmente tentei colocar um for dentro do for e comparar todas as condições dentro de apenas um if, o que não deu certo visto que existia a necessidade de comparar o número atual percorrido por todos os seus antecessores, ao ver o código no gabarito entendi que por isso é determinado dentro do primeiro bloco a condição bolean e dentro do segundo for a repetição será até que o divisor seja menor que o valor do dividendo atual, se o divisor for divisível por algum valor entre 2 e ele mesmo caracteriza que ele não é primo, tendo em vista que o número só é primo se ele for dividido apenas por 1 ou por ele mesmo.

//Pesquisas feitas nos sites:

/*
https://escolakids.uol.com.br/matematica/

relacao-fundamental-da-divisao.htm
https://pt.stackoverflow.com/questions/462432/

criar-um-algoritmo-em-js-para-listar-todos-os-n%C3%BAmeros-primos-menores-ou-igual

https://app.betrybe.com/course
*/

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);

        


    


