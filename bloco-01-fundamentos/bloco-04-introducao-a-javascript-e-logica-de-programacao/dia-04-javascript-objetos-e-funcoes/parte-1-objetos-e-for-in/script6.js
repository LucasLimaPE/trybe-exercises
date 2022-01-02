
// // Usando o objeto abaixo, faça os exercícios a seguir:
//6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//Algoritmo:
// 1 - Usa-se o objeto dado no enunciado;
// 2 - Declara-se um console.log() que irá imprimir a concatenação das partes da frase com os valores dentro da chave do objeto;
// 4 - Atenta-se que ao acessar um valor dentro de uma chave que está dentro de um array, é necessário especificar a posição da chave e após isso o nome da chave para que seja impresso no console.log().

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
  
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');