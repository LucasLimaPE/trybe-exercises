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

describe ('Requisito 3', () => {
    it('Verifica se a chamada myFizzBuzz(10) retorna ("buzz")', () => {
        expect("buzz").toEqual(myFizzBuzz(10));
    });  
  });

describe ('Requisito 4', () => {
    it('Verifica se a chamada myFizzBuzz(11) retorna (11)', () => {
        expect(11).toEqual(myFizzBuzz(11));
    });  
  });