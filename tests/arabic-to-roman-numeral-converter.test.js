import convert from '../src/arabic-to-roman-numeral-converter'

describe('arabic to roman numeral converter', () => {
  it('converts 1 to I', () => {
    expect(convert(1)).toBe('I')
  })
})
