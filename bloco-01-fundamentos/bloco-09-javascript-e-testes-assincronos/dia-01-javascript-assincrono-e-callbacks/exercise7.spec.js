/* 
Este código foi feito com base no gabarito.
*/

const uppercase = require('./exercise7');

describe('Testa a função uppercase', () => {
    it('uppercase "test" to equal "TEST"', (done) => {
        uppercase('test', (str) => {
          try {
            expect(str).toBe('TEST');
            done();
          } catch (error) {
            done(error);
          }
        })
      })
});