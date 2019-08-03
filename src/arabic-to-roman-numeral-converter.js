
export default (number) => {
    const numeralOne = 'I'
    const numeralFive = 'V'

    if (number === 8) return numeralFive + numeralOne + numeralOne + numeralOne
    if (number === 7) return numeralFive + numeralOne + numeralOne
    if (number === 6) return numeralFive + numeralOne
    if (number === 5) return numeralFive
    if (number === 4) return numeralOne + numeralFive
    return numeralOne.repeat(number)
}
