//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = numeros[0];

for (let i = 1; i < numeros.length; i += 1) {
    if (numeros[i] > maiorValor) {
        maiorValor = numeros[i];
    }
}

console.log(maiorValor);