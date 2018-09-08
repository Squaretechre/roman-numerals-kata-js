import calculator from './calculator'
import '../styles/index.scss'

document.getElementById('buttonAdd').addEventListener('click', () => {
  const number1 = parseFloat(document.getElementById('number1').value)
  const number2 = parseFloat(document.getElementById('number2').value)
  const answer = calculator.add(number1, number2)

  document.getElementById('answer').innerHTML = answer
})

document.getElementById('buttonSubtract').addEventListener('click', () => {
  const number1 = parseFloat(document.getElementById('number1').value)
  const number2 = parseFloat(document.getElementById('number2').value)
  const answer = calculator.subtract(number1, number2)

  document.getElementById('answer').innerHTML = answer
})
