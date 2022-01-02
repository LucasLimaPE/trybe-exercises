// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

//Algoritmo:
// 1 - Usa-se o primeiro objeto declarado nos exercícios anteriores;
// 2 - Cria-se um segundo objeto contendo os valores dado no enunciado;
// 3 - Abre-se o for que irá percorrer os valores dentro do primeiro objeto e abre-se o o bloco de código;
// 4 - Declara-se uma estrutura condicional que irá comparar o valor da chave do primeiro objeto com o valor da chave do segundo objeto, se isso acontecer será impresso no console.log() a mensagem de recorrência;
// 5 - Se não, acontecerá a concatenação dos valores das chaves peercorridas dentro do objeto.

/*
Após a tentativa de colocar um for dentro do outro para que mostrasse os valores juntos, determinando um console.log() para imprimir os valores na tela, estava sendo impresso na tela o valor de um depois do outro, ao consultar o gabarito entendi a importância do if dentro do for para comparar se os valores são iguais, determinando assim que o console imprima uma mensagem de recorrência, se não, imprima o valor normal de cada chave do primeiro objeto concatenado com o valor normal das chaves dentro do segundo objeto.
*/

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let key in info) {
    if (
      key === 'recorrente' &&
      info[key] === 'Sim' &&
      info2[key] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[key] + ' e ' + info2[key]);
    }
  }