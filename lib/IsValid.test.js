const IsValid = require("./IsValid.js");

describe('IsValid.username()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            expect(IsValid.username('')).toBe('Pamirsai irasyti slapyvardi');
        });
        test('per trumpas username', () => {
            expect(IsValid.username('Li')).toBe('Per trumpas slapyvardis');
        });
        test('per ilgas username', () => {
            expect(IsValid.username('Lilililililililililili')).toBe('Per ilgas slapyvardis');
        });
    })
})

describe('IsValid.email()', () => {
    describe('Netinkamo tipo parametrai', () => {
         
    })
})

describe('IsValid.password()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            expect(IsValid.password('')).toBe('Pamirsai irasyti slaptazodi');
        });
        test('per trumpas password', () => {
            expect(IsValid.password('512')).toBe('Per trumpas slaptazodis');
        });
    })
})