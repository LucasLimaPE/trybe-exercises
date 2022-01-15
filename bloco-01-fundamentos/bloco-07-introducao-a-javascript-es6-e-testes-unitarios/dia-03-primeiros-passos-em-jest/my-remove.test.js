const myRemove = require('./my-remove');

describe ('Requisito 1', () => {
    it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna uma cópia do array sem o número 3', () => {
        expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
    });  
  });

  
  
  
  
  









