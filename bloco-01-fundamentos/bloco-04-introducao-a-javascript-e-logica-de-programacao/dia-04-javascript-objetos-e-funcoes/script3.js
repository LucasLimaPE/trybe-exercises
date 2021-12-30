// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// personagem
// origem
// nota
// recorrente

//Algoritmo:
// 1 - Usa-se o objeto do exerício anterior;
// 2 - Declara-se um for/in que irá percorrer as chaves (key) dentro do objeto info, e abre-se o bloco de código;
// 3 - Dentro do bloco de código usa-se console.log() para imprimir as chaves percorrdas no for/in.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

info['recorrente'] = 'Sim';

for (key in info) {
    console.log(key)
};