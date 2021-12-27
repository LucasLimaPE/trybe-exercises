// Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
//Feito com consulta no course.

let descontoInss;
let impostoDeRenda;

const salarioBruto = 2000.00;

if (salarioBruto <= 1556,94) {
    descontoInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    descontoInss = salarioBruto * 0.11;
} else {
    descontoInss = 570.88;
}

const salarioBase = salarioBruto - descontoInss;

if (salarioBase <= 1903.98) {
    impostoDeRenda = 0;
} else if (salarioBase <= 2826.65) {
    impostoDeRenda = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    impostoDeRenda = (salarioBase * 0.15) - 354.80;
} else if (salarioBase = 4664.68) {
    impostoDeRenda = (salarioBase * 0.225) - 636.13;
} else {
    impostoDeRenda = (salarioBase * 0.275) - 869.36;
};

console.log("Salário: " + (salarioBase - descontoInss));