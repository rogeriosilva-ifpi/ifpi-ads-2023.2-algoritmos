import { print } from "./input.js"

export function fatorial(number){
  if (number === 0) return 1

  let fat = number
  number--

  while (number > 1){
    fat = fat * number
    number--
  }

  return fat
}

export function fatorial_recursiva(number){
  if (number === 0 || number === 1){ // Caso simples - Condicao de parada
    return 1
  }
  return number * fatorial_recursiva(number - 1) // trabalho e a convergencia
}

export function print_tabuada(number, tipo){
  if (tipo === 'SOMAR'){
    tabuada_somar(number)
  }else if (tipo === 'DIMINUIR'){
    tabuada_diminuir(number)
  }else if (tipo === 'MULTIPLICAR'){
    tabuada_multiplicar(number)
  }else if (tipo === 'DIVIDIR'){
    tabuada_dividir(number)
  }else{
    print('Tipo inválido!')
  }
}

function tabuada_somar(number){
  let parcela = 1
  print('-- SOMAR --')
  print('-----------')
  
  while (parcela <= 10){
    const soma = number + parcela
    print(`${number} + ${parcela} = ${soma}`)
    parcela++
  }
}

function tabuada_diminuir(number){
  let minueno = number
  print('-- DIMINUIR --')
  print('--------------')
  while (minueno <= (number + 9)){
    const diferenca = minueno - number
    print(`${minueno} - ${number} = ${diferenca}`)
    minueno++
  }
}

function tabuada_multiplicar(number){
  let fator = 1
  print('-- MULTIPLICAR --')
  print('-----------------')
  
  while (fator <= 10){
    const produto = number * fator
    print(`${number} * ${fator} = ${produto}`)
    fator++
  }
}


function tabuada_dividir(number){
  let dividendo = number
  print('-- DIVIDIR --')
  print('-----------------')
  
  while (dividendo <= (10 * number)){
    const quociente = dividendo / number
    print(`${dividendo} ÷ ${number} = ${quociente}`)
    dividendo = dividendo + number
  }
}
