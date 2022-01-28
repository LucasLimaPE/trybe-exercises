/*
6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .
*/

/*
 O código para resolução deste exercício foi tirado do gabarito do Course, após várias tentativas de resolvê-lo, minha lógica até estava correta, porém, estava me atrapalhando na hora de construí-la em código, a questão era que eu não tinha pensado no parâmetro index e como utilizá-lo, como de costume, quando pego um código pronto, irei explicá-lo com minhas palavras para melhor absorvê-lo.

 Algorítmo explicativo:

 1 - Serão usdos os arrays (students) e (notes);
 2 - Declara-se a função (studentAverage);
 3 - Como essa função é uma função apenas para gerar um resultado ela não recebe parâmetros, pois ela foi criada para uma solução específica que é gerar as notas a partir dos arrays.
 4 - Declara-se uma constante dentro do escopo da função que irá aplicar um map ao array (students);
 5 - Usa-se como parâmettro do map o elemento (student) e o index (posição do elemento no array) e como retorno desse map será criado um objeto; 
 * - Atenta-se que o map será rodado para cada indice, ou seja, para cada elemento em students será gerado um objeto dentro do array gerado no map.
 6 - Declara-se uma chave que receberá o nome do estdante (o elemento (student));
 7 - Declara-se uma chave que receberá como valor um reduce aplicado ao array (notes) na posição index.
 * - Esta é a sacada para utilizar o reduce na criação das médias, como foi utilizado o parâmetro index no map, para cada elemento em (students) será aplicado um (notes.reduce) na mesma posição;
 8 - O reduce recebe comom parâmetros o acumulador (acc) e o valor corrente (curr) e, também, o número 0, fazendo com que todos os valores da posição sejam percorridos.
 9 - Este reduce retornará o valor do acumulador (0) somado do valor corrente (curr) e dividido pelo tamanho do array notes (notes.length), retornando assim, para cada elemento em students o valor da sua média.
 10 - Fora do escopo do (.map()) e ainda dentro do escopo da função declara-se como retorno da função a variável constante (nameAndAverage) que criará o array de objetos solicidado na questão.

*/

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notes = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const nameAndAverage = students.map((student, index) => ({
    name: student,
    average: (notes[index].reduce((acc, curr) => acc + curr, 0) / notes[index].length),
  }));
  return nameAndAverage;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];