/*
2 - Retorne o nome do livro de menor nome.
Dica: use a função forEach . 
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
  A resolução desse exercícios foi tirada do gabarito no Course, após ficar muito tempo tentando solucioná-lo olhei o gabarito e vi como as HOFS nos fornecem solulções muito mais simples para solucionar problemas cotidianos, entretando, não entendi o código de primeira e procrei o Zéze (pessoa que criou o código do gabarito) para me explicar melhor o código na mentoria, após a explicação dele ficou bem claro a utilização da negação da variável dentro do if que era a partq que não estava etendendo.
  */

  function smallerName(array) {
    let nameBook;
        array.forEach((bookName) => {
        if (!nameBook || bookName.name.length < nameBook.length){
          nameBook = bookName.name;
        }
      });
    return nameBook;
  }

  console.log(smallerName(books));