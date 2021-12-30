// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

// {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   }

//Algoritmo: 
// 1 - Usa-se o mesmo objeto do exercícios anterior.
// 2 - insere dentro do objeto info uma nova chave chamada ('recorrente'), tendo como valor a string ('Sim');
// 3 - Usa-se console.log() para imprimir o objeto info."" 

/*
Pesquisas feitas no site:

https://www.w3schools.com/js/js_objects.asp

*/

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

info['recorrente'] = 'Sim';

console.log(info);