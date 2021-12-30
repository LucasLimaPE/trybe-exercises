// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

//Algoritmo:
// 1 - Usa-se o mesmo objeto dos ecercícios anteriores;
// 2 - Usa-se console.log() para imprimir a concatenação entre a frase e as informações dentro do objeto;
// 3 - Atenta-se que por livrosFavoritos se tratar de um array pode-se acessar o comprimento da chave.

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

  console.log('"Julia tem ' + leitor.livrosFavoritos.length + ' livros' + ' favoritos"');