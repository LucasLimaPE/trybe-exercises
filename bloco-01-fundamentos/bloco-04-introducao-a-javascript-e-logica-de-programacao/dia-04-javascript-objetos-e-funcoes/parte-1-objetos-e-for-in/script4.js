// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

//Algoritmo:
// 1 - Usa-se a do exercício anterior;
// 2 - Declara-se um for in que irá percorrer as chaves (key) dentro do objeto info;
// 3 - Usa-se console.log() que, desta vez, irá imprimir o valor da chave dentro do objeto, imprimindo-o na tela.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

info['recorrente'] = 'Sim';

for (key in info) {
    console.log(info[key])
};