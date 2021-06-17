const Email = require('../js/validarEmail.js');

test('CT1 - 1@', () => {
    expect(Email.validarEmail('1@')).toBe(false);
});

test('CT2 - email.com', () => {
    expect(Email.validarEmail('email.com')).toBe(false);
});

test('CT3 - de@imas.fke', () => {

    expect(Email.validarEmail('de@imas.fke')).toBe(true);
});

test('CT4 - prof@unifei.edu.br', () => {
    expect(Email.validarEmail('prof@unifei.edu.br')).toBe(true);
});

test('CT5 - ""', () => {
    expect(Email.validarEmail('')).toBe(false);
});

test('CT6 - "@"', () => {
    expect(Email.validarEmail('@')).toBe(false);
});

test('CT7 - "@."', () => {
    expect(Email.validarEmail('@.')).toBe(false);
});

test('CT8 - "@.."', () => {
    expect(Email.validarEmail('@..')).toBe(false);
});

test('CT9 - " "', () => {
    expect(Email.validarEmail(' ')).toBe(false);
});

test('CT10 - " . "', () => {
    expect(Email.validarEmail(' . ')).toBe(false);
});

test('CT11 - "#@4.&. "', () => {
    expect(Email.validarEmail('#@4.&.')).toBe(false);
});

test('CT2 - @gmail.com', () => {
    expect(Email.validarEmail('@gmail.com')).toBe(false);
});

test('CT2 - ab@gmail', () => {
    expect(Email.validarEmail('@gmail.com')).toBe(false);
});