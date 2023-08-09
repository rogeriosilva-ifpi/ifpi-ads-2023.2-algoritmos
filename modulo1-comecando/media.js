import { question } from 'readline-sync'

console.log('***** MÉDIA SEMESTRAL *****')
// Entrada
const nota1 = Number(question('Nota 1: '))
const nota2 = Number(question('Nota 2: '))

// Processamento
const media = (nota1 + nota2) / 2

// Saída
console.log(`A sua média é ${media}`)