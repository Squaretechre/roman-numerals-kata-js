
export default (number) => {
    const numeralOne = 'I'
    const numeralFour = 'IV'
    const numeralFive = 'V'
    const numeralNine = 'IX'
    const numeralTen = 'X'

    if (number === 15) return numeralTen + numeralFive
    if (number === 14) return numeralTen + numeralFour
    if (number === 13) return numeralTen + numeralOne + numeralOne + numeralOne
    if (number === 12) return numeralTen + numeralOne + numeralOne
    if (number === 11) return numeralTen + numeralOne
    if (number === 10) return numeralTen
    if (number === 9) return numeralNine
    if (number > 5) return numeralFive + numeralOne.repeat(number - 5)
    if (number === 5) return numeralFive
    if (number === 4) return numeralFour
    return numeralOne.repeat(number)
}
