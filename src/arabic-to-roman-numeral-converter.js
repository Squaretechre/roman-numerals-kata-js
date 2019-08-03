const convert = (number) => {
    const numeralOne = 'I'
    const numeralFour = 'IV'
    const numeralFive = 'V'
    const numeralNine = 'IX'
    const numeralTen = 'X'

    if (number === 24) return numeralTen + numeralTen + numeralFour
    if (number > 20) return numeralTen + numeralTen + numeralOne.repeat(number - 20)
    if (number === 20) return numeralTen + numeralTen
    if (number === 19) return numeralTen + numeralNine
    if (number > 15) return numeralTen + numeralFive + numeralOne.repeat(number - 15)
    if (number === 15) return numeralTen + numeralFive
    if (number === 14) return numeralTen + numeralFour
    if (number > 10) return numeralTen + numeralOne.repeat(number - 10)
    if (number === 10) return numeralTen
    if (number === 9) return numeralNine
    if (number > 5) return numeralFive + numeralOne.repeat(number - 5)
    if (number === 5) return numeralFive
    if (number === 4) return numeralFour

    return numeralOne.repeat(number)
};

export default convert

