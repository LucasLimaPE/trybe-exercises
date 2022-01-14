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

describe ('Requisito 3', () => {
    test('Testa se a função lança um erro quando os parâmtro são (4, "5")', () => {
        expect(() => { sum (4, "5") }).toThrow();
    });  
  });

  describe ('Requisito 4', () => {
    test('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect(() => { sum (4, "5") }).toThrowError(new Error('parameters must be numbers'));
    });  
  });
  