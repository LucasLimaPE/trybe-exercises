/*
4 - Encontre o livro com o maior nome.
*/

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
/*
Este código foi feito com base no gabarito da questão presenten no course, estava meio confuso em entender como iria acessar a propriedade name dentro do array e retornar o objeto que contém ela. Fiz alterações no código para poder receber qualquer array que seja de objetos e contenha a chave names.

Algoritmo explicativo:
1 - Usa-se o array books;
2 - Declara-se a função (longesNamedBook) que recebe como parâmetro um array e retorna a aplicação de um reduce nesse array;
3 - O reduce recebe como parâmetro uma função que recebe como parâmetro acc (acumulador) e curr (valor corrente) e abre o escopo da função de parâmetro;
4 - Dentro do escopo existe um if que irá comparar se o tamanho/comprimento do valor percorrido no array ou seja do objeto na chave name (curr.name.length) é maior que o valor comprimento de da chave no acc que, como não foi passado um segundo parâmetro para o reduce, vai ser a primeira posiçao do array (acc.name.length), se for maior, irá retornar o curr.
5 - Caso não entre nesse if irá retornar acc que, como foi dito anteriormente, é a primeira posição do array.
*/


const longestNamedBook = (array) => array.reduce((acc, curr) => {
  if (curr.name.length > acc.name.length) {
    return curr;
  }
  return acc;
});

  
console.log(longestNamedBook(books));