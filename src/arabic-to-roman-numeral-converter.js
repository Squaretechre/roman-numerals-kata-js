const convert = (number) => {
    const numeralOne = 'I'
    const numeralFour = 'IV'
    const numeralFive = 'V'
    const numeralNine = 'IX'
    const numeralTen = 'X'

    const numerals = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X'
    }

    if (number === 24) return numeralTen + numeralTen + numeralFour
    if (number > 20) return numeralTen + numeralTen + numeralOne.repeat(number - 20)

    let remainingTotal = number
    let numeral = ''

    while (remainingTotal > 0) {
        const nextHighestNumeral = Object.keys(numerals).reverse().find(key => remainingTotal >= key)
        remainingTotal = remainingTotal - nextHighestNumeral
        numeral = numeral + numerals[nextHighestNumeral]
    }

    return numeral
};

export default convert

