const myRemove = require('./my-remove');

describe ('Requisito 1', () => {
    it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna uma cópia do array sem o número 3', () => {
        expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
    });  
  });

describe ('Requisito 2', () => {
    it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });  
  });

describe ('Requisito 3', () => {
    it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado ([1, 2, 3, 4])', () => {
        expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
    });  
  });
  
  
  
  
  









