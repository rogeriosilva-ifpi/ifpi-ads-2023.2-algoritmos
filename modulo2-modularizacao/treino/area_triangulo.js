import { question } from "readline-sync"

function programa(){
  console.log('**** ÁREA DE TRIÂNGULO ****')
  // Entrada
  const base = Number(question('Base: '))
  const altura = Number(question('Altura: '))

  // Processamento
  const area = calcular_area_triangulo(base, altura)

  // Saída
  console.log(`A área é ${area}`)
}

// definicao de um funcao
function calcular_area_triangulo(b, h){
  const resultado = (b * h) / 2
  return resultado
}

programa()