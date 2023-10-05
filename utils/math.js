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

// Arrow Function
export const is_even = number => number % 2 === 0

/*
// Arrow Function
export const is_even = number => {return number % 2 === 0}

// Regular Function
export function is_even(number){
  return number % 2 === 0
}

// Anonymous Function
export const is_even = function(number){
  return number % 2 === 0
}*/

export function is_prime(number){
  let count_dividers = 0
  let candidate = 1

  while (candidate <= number){
    if (number % candidate === 0){
      count_dividers++
    }
    candidate++
  }

  return count_dividers === 2
}

export function porcentagem(valor, percentual){
  return valor * (percentual/100)
}

