const convert = (number) => {
    const numerals = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
    }

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

