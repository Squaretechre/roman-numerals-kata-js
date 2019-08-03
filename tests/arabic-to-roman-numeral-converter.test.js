import convert from '../src/arabic-to-roman-numeral-converter'

/*
    Numerals:
    1     ➔ I
    2     ➔ II
    3     ➔ III
    4     ➔ IV
    5     ➔ V
    9     ➔ IX
    10    ➔ X
    21    ➔ XXI
    50    ➔ L
    100   ➔ C
    500   ➔ D
    1000  ➔ M

    Rules:
    - I, X and C can't be repeated more than 3 times.
    - V, L and D are not repeated.

    Examples:
    13 = XIII
    14 = XIV
    18 = XVIII
    26 = XXVI
    39 = XXXIX
    42 = XXXXII
    61 = LXI
    545 = DXLV
    217 = CCXVII
 */

describe('arabic to roman numeral converter', () => {
  it('converts 1 to I', () => {
    expect(convert(1)).toBe('I')
  })

  it('converts 2 to II', () => {
    expect(convert(2)).toBe('II')
  })

  it('converts 3 to III', () => {
    expect(convert(3)).toBe('III')
  })

  it('converts 4 to IV', () => {
    expect(convert(4)).toBe('IV')
  })

  it('converts 5 to V', () => {
    expect(convert(5)).toBe('V')
  })

  it('converts 6 to VI', () => {
    expect(convert(6)).toBe('VI')
  })

  it('converts 7 to VII', () => {
    expect(convert(7)).toBe('VII')
  })

  it('converts 8 to VIII', () => {
    expect(convert(8)).toBe('VIII')
  })

  it('converts 9 to IX', () => {
    expect(convert(9)).toBe('IX')
  })

  it('converts 10 to X', () => {
    expect(convert(10)).toBe('X')
  })

  it('converts 11 to XI', () => {
    expect(convert(11)).toBe('XI')
  })
})
