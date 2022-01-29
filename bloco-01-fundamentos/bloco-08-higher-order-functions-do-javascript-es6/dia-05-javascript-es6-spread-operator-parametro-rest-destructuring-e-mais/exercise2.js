/*
2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
*/

const sommation = (...args) => {
 return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sommation(3, 4, 5, 6, 7, 8, 9, 10));