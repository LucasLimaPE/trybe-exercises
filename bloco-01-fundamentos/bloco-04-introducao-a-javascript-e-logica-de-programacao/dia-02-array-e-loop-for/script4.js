//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

//Algoritmo:
// 1 - Copiar código do exercício anterior;
// 2 - Retirar console anterior;
// 3 - Criar estrutura condicional (if/else) que:
        //Irá comparar se o valor da variável média aritmética é maior que 20, se for, usar console.log() para imprimira mensagem indicando isso, se não, indicar que o valor é menor ou igual a 20.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
}

mediaAritmetica = total / numbers.length;

if (mediaAritmetica > 20) {
    console.log("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20");
}