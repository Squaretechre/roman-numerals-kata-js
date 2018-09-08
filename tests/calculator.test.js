import calculator from '../src/calculator'

describe('calculator', () => {
  it('should add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3)
  })

  it('should subtract two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2)
  })
})
