
export default (number) => {
    const numeralOne = 'I'
    const numeralFive = 'V'
    const numeralNine = 'IX'
    const numeralTen = 'X'

    if (number === 10) return numeralTen
    if (number === 9) return numeralNine
    if (number > 5) return numeralFive + numeralOne.repeat(number - 5)
    if (number === 5) return numeralFive
    if (number === 4) return numeralOne + numeralFive
    return numeralOne.repeat(number)
}
