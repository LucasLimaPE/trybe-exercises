/*
7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
*/

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 2000,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 2000,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 2000,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 2000,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 2000,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 2000,
      },
      releaseYear: 1928,
    },
  ];
  
 /*
 Após passar bastante tempo tentando solucionar este exercício, olhei o gabarito e vi este código.
 Inicialmente não tinha entendi muito bem a quest]ao da negação utilizada no (.some()), fui à mentoria do Roberval onde ele me explicou bem sobre a utilização da negação e o que está acontcendo de fato dentro do código, como exercício de quando utilizo o código de alguém, irem explicar o código linha a linha.

 Algoritmo explicativo:

 1 - Declara-se a função (authorUnique);
 2 - Declara-se o retorno da função (authorUnique);
 3 - No retorno irá acontecer um every, aplicado ao array books;
 4 - Esse every receberá como parâmetro uma função que receberá o elemento book como parâmetro;
 5 - O retorno do every será a aplicação da negação de um (.some());
 6 - Dentro do (.some), receberá também o elemento (book), mas dentro do some ele recebe o nome de (bookSome);
 7 - O retorno deste some será que o ano de nascimento do autor no some (book.author.birthYear) deverá ser igual ao ano do autor no every (book.author.birthYear), foi utilizado uma conjunção (&&) onde o some só irá retornar verdadeiro quando ele tiver as duas condições sendo verdadeiras neste caso a segunda condição é que o nome do autor no some (book.author.name) seja diferente do nome do autor no every (book.author.name) fazendo com que o some seja verdadeiro.
 8 - Como foi usado a negação do some como retorno do every, quando o some retornar falso será retornado para o every um verdadeiro, pois foi usada a negação de some como parâmetro do every, fazendo com que está condição so seja falsa quando o some retornar verdadeiro, ou seja, os nomes dos autores forem diferentes e os anos de nascimento forem iguais.
 */


  function authorUnique() {
    return books.every((book) =>
      !books.some((bookSome) =>
        (bookSome.author.birthYear === book.author.birthYear)
        && (bookSome.author.name !== book.author.name)));
  }

console.log(authorUnique(books));