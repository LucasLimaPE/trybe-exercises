/**
5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.  
*/

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  /*
  Este exercício foi resolvido com base na documentação encontrada em:

  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  */
  
  const containsA = (array) => {
      let separaLetras = array.join('').toLowerCase().split('')
      let contaLetraA = separaLetras.reduce((todasLetras, letra) => {
          if (letra in todasLetras) {
              todasLetras[letra]++;
          }
          else {
              todasLetras[letra] = 1;
          }
          return todasLetras;
      }, {});
      return contaLetraA.a;
  };

  console.log(containsA(names));