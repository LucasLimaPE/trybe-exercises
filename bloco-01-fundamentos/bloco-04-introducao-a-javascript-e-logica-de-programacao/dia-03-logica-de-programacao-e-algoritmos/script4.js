// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

//Algoritmo:
// 1 - Declara-se uma variável com o valor inicial zero (letbiggestNumber = 0);
// 2 - Declara-se um for que vai de 0 a 50 e será acrescentado de 1 a cada loop, sendo responsável por gerar o dividendo e abir o primeiro bloco de código (for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {};
// 3 - Declara-se uma variável isPrime que, dentro do primeiro bloco de código que, inicialmente, terá seu valor como true, que servirá para que biggesNumber assuma seu valor (inicialmente 0),e será acrescentado de um, até quando quando no segundo for currentNumber for maior que currentDivisor {for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1), abrindo o segundo bloco de código que contém o código responsável por comparar se o número atual do primeiro for é divisível por algum número iniciando de 2 até que, no segundo for, o valor seja igual a ele, se isso acontecer, isPrime assumirá o valor false, o valor de biggestPrimeNumber não muda, pois o último número em que o segundo bloco de código foi aberto é referente ao último número primo entre 0 e 50 (); 

// 4 - Atenta-se que:
        //O principal elemento para funcionamento deste código é o uso dos booleans, tendo em vista que por ter sido declarado como verdadeiro dentro do primeiro bloco de código e dentro do mesmo bloco de código fora do segundo for foi declarado uma condicional que diz que se is prime acontece (isPrime assumir o valor verdadeiro dentro do segundo for) o valor atual percorrido no primeiro for se tornará o valor de biggest number; 

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

        


    


