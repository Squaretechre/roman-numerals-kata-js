import convert from './arabic-to-roman-numeral-converter'
import '../styles/index.scss'

const inputNumber = document.getElementById('inputNumber')
const inputNumeral = document.getElementById('inputNumeral')
const buttonConvert = document.getElementById('buttonConvert')
const buttonClear = document.getElementById('buttonClear')

buttonConvert.addEventListener('click', () => {
  const arabicNumber = parseFloat(inputNumber.value)
  inputNumeral.value = convert(arabicNumber)
})

buttonClear.addEventListener('click', () => {
  inputNumber.value = ''
  inputNumeral.value = ''
})
