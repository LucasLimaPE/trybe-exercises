# Exercícios - Bloco 08 - JavaScript ES6 - Higher Order Functions -

## Exercícios - 8.1 - JavaScript ES6 - Introdução a Higher Order Functions -

1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com;

2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou")
;

3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

*Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.


## Exercícios - 8.2 - JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort -

1 -  Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947;

2 - Retorne o nome do livro de menor nome;

3 - Encontre o primeiro livro cujo nome possui 26 caracteres;

4 - Ordene os livros por data de lançamento em ordem decrescente;

5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário;

6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário;

7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.


## Exercícios - 8.3 - JavaScript ES6 - Higher Order Functions - map e filter -

1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA;

2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado;

3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia;

4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho;

5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia;

6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação;

7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.


## Exercícios - 8.4 - JavaScript ES6 - reduce -

1 - Dada uma matriz, transforme em um array;

2 - Crie uma string com os nomes de todas as pessoas autoras;

3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados;

4 - Encontre o livro com o maior nome;

5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula;

6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .


## Exercícios - 8.5 - JavaScript ES6 - spread operator, parâmetro rest, destructuring e mais -

1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54;

2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos;

3 - Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo;

4 - Encontre o livro com o maior nome;

5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só;

6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro;

7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento;

8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento;

9 - Existe um objeto yearSeasons que representam as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano;
