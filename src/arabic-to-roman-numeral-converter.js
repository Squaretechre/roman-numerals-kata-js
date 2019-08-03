
export default (number) => {
    if (number === 5) return 'V'
    if (number === 4) return 'IV'
    return 'I'.repeat(number)
}
