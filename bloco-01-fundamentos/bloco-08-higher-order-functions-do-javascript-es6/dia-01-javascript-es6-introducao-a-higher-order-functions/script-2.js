/*
2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/
   
    const comparaNumero = (number) => {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * 
        (max - min)) + min;
        }
        if (getRandomInt(1, 6) === number) {
          return true  
        }else {
            return false
        }
    }

    const sorteio = (number, callback) => {
        if (callback(number) === true) {
            return "Parabéns você ganhou"
        }else {
            return "Tente novamente"
        }
    }

    console.log(sorteio(3, comparaNumero))
  

