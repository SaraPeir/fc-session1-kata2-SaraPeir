const paddingLeft = require('./index');


describe('paddingLeft', () => {
  test('write hola and it returns hola', () => {
    expect(paddingLeft('hola', 3, 'x')).toBe('hola');
    return console.log(paddingLeft('hola', 3, 'x'));
    });
      test('write hola and it returns hola', () => {
        expect(paddingLeft('hola', 4, 'x')).toBe('hola');
        return console.log(paddingLeft('hola', 4, 'x'));
        });
      test('write hola and it returns xxhola', () => {
        expect(paddingLeft('hola', 6, 'x')).toBe('xxhola');
        return console.log(paddingLeft('hola', 6, 'x'));
        });
        test('write hola and it returns xxxxxxhola', () => {
          expect(paddingLeft('hola', 10, 'x')).toBe('xxxxxxhola');
          return console.log(paddingLeft('hola', 10, 'x'));
          });
          test('write maria and it returns xxxxxmaria', () => {
            expect(paddingLeft('maria', 10, 'x')).toBe('xxxxxmaria');
            return console.log(paddingLeft('maria', 10, 'x'));
            });


});
