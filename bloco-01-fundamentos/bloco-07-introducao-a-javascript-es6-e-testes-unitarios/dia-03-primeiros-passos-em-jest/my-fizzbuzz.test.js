const myFizzBuzz = require('./my-fizzbuzz');

describe ('Requisito 1', () => {
    it('Verifica se a chamada myFizzBuzz(15) retorna ("fizzbuzz")', () => {
        expect("fizzbuzz").toEqual(myFizzBuzz(15));
    });  
  });

describe ('Requisito 2', () => {
    it('Verifica se a chamada myFizzBuzz(9) retorna ("fizz")', () => {
        expect("fizz").toEqual(myFizzBuzz(9));
    });  
  });