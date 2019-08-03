
export default (number) => {
    if (number === 8) return 'VIII'
    if (number === 7) return 'VII'
    if (number === 6) return 'VI'
    if (number === 5) return 'V'
    if (number === 4) return 'IV'
    return 'I'.repeat(number)
}
