//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

//Algoritmo:
// 1 - Usa o Array dos exercícios anteriores;
// 2 - Declara uma variável que irá conter o número de ocorrências de números ímpares;
// 3 - Cria uma estrutura de repetição que:
      //Percorrerá todos os números do array;
      //Declara estrutura condiciona (if/else), que irá comparar se o resto da divisão do número percorrido é diferente de zero (caracteruzizando um número ímpar), se for, a variável que conta as ocorrências será somada de 1.
// 4 - Fora do for será declarada uma estrutura condicional que:
        //Irá comparar se o número de ocorrências de números ímpares é igual a 0, se for imprimir-se-á na tela uma mensagem, se não, imprimir-se-á o valor da variável total. 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    total += 1;
  }
}

if (total === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(total);
}