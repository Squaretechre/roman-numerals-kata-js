
export default (number) => {
    const numeralOne = 'I'
    const numeralFive = 'V'

    if (number === 9) return 'IX'
    if (number > 5) return numeralFive + numeralOne.repeat(number - 5)
    if (number === 5) return numeralFive
    if (number === 4) return numeralOne + numeralFive
    return numeralOne.repeat(number)
}
