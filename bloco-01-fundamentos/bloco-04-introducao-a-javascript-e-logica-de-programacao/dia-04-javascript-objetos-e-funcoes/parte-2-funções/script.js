// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

//Algoritmo:
// 1 - Declara-se a função que irá receber como parâmetro uma string;
// 2 - Declara-se uma variável que armazenará o valor da string revertida usando os métodos:
        //.split('') - Responsável por separar esta uma string ou um array com um determinado parâmetro, neste caso é a ocorrência de uma posição na string, separando cada letra da string recebida na função.
        //.reverse('') - Responsável por iventer os valores dentro do array construído no método anterior.
        //.join('') - Responsável por juntar novamente esse array fazendo-o voltar a ser uma string, este método também pode adicionar algo entre as posições do array.
// 3 - Por último foi adicionado também o método (.toLowerCase()) responsável por fazer esta função funcionar tanto se a entrada for dada com maísculos quanto com minúsculos.

/*
Pesquisas feitas nos sites:

https://brasilescola.uol.com.br/o-que-e/portugues/o-que-e-palindromo.htm

https://www.w3schools.com/js/default.asp

https://www.w3schools.com/jsref/jsref_tolowercase.asp#:~:text=Definition%20and%20Usage,not%20change%20the%20original%20string.

*/
function indiceDoMaiorValor(string) {
     let stringReverse = string.toLowerCase().split('').reverse('').join('');
     if (stringReverse === string.toLowerCase()) {
         return true;
     } else {
         return false;
     }
}

console.log(indiceDoMaiorValor('AnilinA'));

