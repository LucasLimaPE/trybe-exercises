# Exercícios - Bloco 04 - Introdução à JavaScript e Lógica de Programação -

## Exercícios - 4.1 - JavaScript - Primeiros passos -
 
1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para.\
    * Adição (a + b).\
    * Subtração (a - b).\
    * Multiplicação (a * b).\
    * Divisão (a / b).\
    * Módulo (a % b).\
2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.\
3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.\
4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.\
5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.\
    * Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.\
    * Um ângulo será considerado inválido se não tiver um valor positivo.\
6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.\
    * Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.\
    * Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .\
    * Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.\
    * Exemplo: bishop (bispo) -> diagonals (diagonais) .\
7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras.\
    * Porcentagem >= 90 -> A.\
    * Porcentagem >= 80 -> B.\
    * Porcentagem >= 70 -> C.\
    * Porcentagem >= 60 -> D.\
    * Porcentagem >= 50 -> E.\
    * Porcentagem < 50 -> F.\
    * O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .\
    * Bonus: use somente um if .\
9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .\
    * Bonus: use somente um if .\
10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.\
    * Atente que, sobre o custo do produto, incide um imposto de 20%.\
    * Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.\
    * O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.\
        * valorCustoTotal = valorCusto + impostoSobreOCusto.\
        * lucro = valorVenda - valorCustoTotal (lucro de um produto).\
11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
    * A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências.\
        * INSS (Instituto Nacional do Seguro Social).\ 
        * Salário bruto até R$ 1.556,94: alíquota de 8%.\
        * Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%.\
        * Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%.\
        * Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.\
    * IR (Imposto de Renda)
        * Até R$ 1.903,98: isento de imposto de renda.\
        * De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de * R$ 142,80 a deduzir do imposto.\
        * De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto.\
        * De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto.\
        * Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.\
    * Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:\
    * O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.\
    * Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.\
    * Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:\
        * R$ 2.670,00: salário com INSS já deduzido;\
        * 7.5%: alíquota de imposto de renda;\
        R$ 142,80 parcela a se deduzir do imposto.\
    * Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45 .\
    * O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.\
    * Resultado: R$ 2.612,55.

## Exercícios - 4.2 - JavaScript - Array e loop For - 

### Parte 1 - Array e loop For -

1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() .\
2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado.\
3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array.\
    * A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.\
4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20".\
5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o.\
6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado".\
7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o.\
8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado.\
9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

### Parte 2 - Bônus - Array e loop For - 

1 - Ordene o array numbers em ordem crescente e imprima seus valores.\

2 - Ordene o array numbers em ordem decrescente e imprima seus valores.\

3 -Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .

## Exercícios - 4.3 - JavaScript - Lógica de Programação e Algoritmos - 

1 - Crie um algoritmo que retorne o fatorial de 10.\
2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".\
3 - Escreva dois algoritmos: um que retorne a maior palavra de um array e outro que retorne a menor. Considere o número de caracteres de cada palavra.\
4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

## Exercícios - 4.4 - JavaScript - Objetos e funções - 

### Parte 1 - Objetos e For/In -

1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.\
2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.\
3 - Faça um for/in que mostre todas as chaves do objeto.\
4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.\
5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.\
6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

### Parte 2 - Funções -

1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.\
    * Exemplo de palíndromo: arara .\
    * verificaPalindrome('arara') .\
    * Retorno esperado: true .\
    * verificaPalindrome('desenvolvimento') .\
    * Retorno esperado: false .\
2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.\
    * Array de teste: [2, 3, 6, 7, 10, 1]; .\
    * Valor esperado no retorno da função: 4 .\
3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
    * Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
    * Valor esperado no retorno da função: 6 .
4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.\
    * Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .\
    * Valor esperado no retorno da função: Fernanda .\
5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.\
    * Array de teste: [2, 3, 2, 5, 8, 2, 3]; .\
    * Valor esperado no retorno da função: 2 .\
6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.\
    * Valor de teste: N = 5 .\
    * Valor esperado no retorno da função: 1+2+3+4+5 = 15 .\
7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word .
Considere que a string ending sempre será menor que a string word .\
    * Valor de teste: 'trybe' e 'be' .\
    * Valor esperado no retorno da função: true
    * verificaFimPalavra('trybe', 'be') .\
    * Retorno esperado: true .\
    * verificaFimPalavra('joaofernando', 'fernan') .\ 
    * Retorno esperado: false









