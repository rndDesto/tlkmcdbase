import * as normalizeInput from '../normalizeInput';

describe('src/utils/normalizeInput', () => {
  test('alphabet', () => {
    const result = normalizeInput.alphabet('abc');
    expect(result).toEqual('abc');
  });
  test('alphanumeric', () => {
    const result = normalizeInput.alphanumeric('abc1234');
    expect(result).toEqual('abc1234');
  });

  test('number', () => {
    const result = normalizeInput.number('11234');
    expect(result).toEqual('11234');
  });
  test('numberSpecial', () => {
    const result = normalizeInput.numberKarakter('123.,');
    expect(result).toEqual('123.,');
  });
  test('noSpace', () => {
    const result = normalizeInput.noSpace('abcd');
    expect(result).toEqual('abcd');
  });
  test('toLowerCase', () => {
    const result = normalizeInput.textLowerCase('abcd');
    expect(result).toEqual('abcd');
  });
});
