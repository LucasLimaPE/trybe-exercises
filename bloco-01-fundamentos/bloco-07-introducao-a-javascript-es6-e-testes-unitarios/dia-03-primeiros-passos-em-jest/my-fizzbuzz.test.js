const myFizzBuzz = require('./my-fizzbuzz');

describe ('Requisito 1', () => {
    it('Verifica se a chamada myFizzBuzz(15) retorna ("fizzbuzz")', () => {
        expect("fizzbuzz").toEqual(myFizzBuzz(15));
    });  
  });