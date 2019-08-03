
export default (number) => {
    const numeralOne = 'I'

    if (number === 8) return 'V' + numeralOne + numeralOne + numeralOne
    if (number === 7) return 'V' + numeralOne + numeralOne
    if (number === 6) return 'V' + numeralOne
    if (number === 5) return 'V'
    if (number === 4) return numeralOne + 'V'
    return numeralOne.repeat(number)
}
