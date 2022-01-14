const sum = require('./sum');

describe ('Requisito 1', () => {
  it('A função recebe (4, 5) e retorna (9)', () => {
      expect(9).toEqual(sum(4, 5));
  });  
});

describe ('Requisito 2', () => {
    it('A função recebe (0, 0) e retorna (0)', () => {
        expect(0).toEqual(sum(0, 0));
    });  
  });