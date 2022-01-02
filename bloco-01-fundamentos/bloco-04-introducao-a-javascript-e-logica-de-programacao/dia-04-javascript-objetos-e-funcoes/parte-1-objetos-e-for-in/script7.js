// 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

// {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editor: 'Rocco',
//   }

//Algoritmo:
// 1 - Usa-se a chave dos exercícios anteriores;
// 2 - Como no exercício pede para adiciona um novo livro favorito (será adicionado dentro de uma chave já declarar), usa-se o (.ṕush()), que irá adicionar sem sobrescrevê-lo.
// 3 - Foi adicionado um console.log() apenas para imprimir o valor de leitor e conferir se o que foi pedido aconteceu corretamente.

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
  );
 
console.log(leitor);