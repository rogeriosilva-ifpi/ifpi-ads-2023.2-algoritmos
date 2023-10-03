import { enter_to_continue, get_number_min, get_positive_number, print } from '../../utils/input.js'
import { is_even, is_prime } from '../../utils/math.js'
function main(){
  let numero = get_positive_number('Magic Number: ')
  const menu = `
  |----- MAGIC NUMBER ------|
  1 - Info
  2 - Mostrar N Múltiplos
  3 - Mostrar N Divisores
  4 - Mudar o Magic Number
  
  0 - Sair
  Opcao >>> `
  let opcao = get_number_min(menu, 0)

  while (opcao !== 0){

    if (opcao === 1){   
      show_info(numero)
    }else if (opcao === 2){
      show_multiples(numero)
    }else if (opcao === 3){
      show_divisors(numero)
    }else if (opcao === 4){
      numero = get_positive_number('Novo Magic Number: ')
    }else{
      print('Opcao Inválida!')
    }

    enter_to_continue()
    opcao = get_number_min(menu, 0)
  }
}

function show_info(numero){
  // operador ternário "Question ? True : False"
  const par_impar = is_even(numero) ? 'PAR' : 'ÍMPAR'
  const prime = is_prime(numero) ? 'É PRIMO' : 'NÃO É PRIMO'
  
  const info = `
  |--->> Magic Number: ${numero} <<---|
  > ${par_impar}
  > ${prime}
  `
  print(info)
}

function show_divisors(number){
  let count = 0
  let candidate = 1
  const count_dividers = get_number_min('Quantos divisores? ', 1)

  while (count < count_dividers && candidate <= number){

    if (number % candidate === 0){
      print(`> ${candidate}`)
      count++
    }

    candidate++
  }

  if (count < count_dividers){
    print(`ALERTA: Não foi possível encontrar ${count_dividers} divisores!`)
    print(`ALERTA: O número ${number} só tem ${count} divisores`)
  }
}

function show_multiples(number){
  let count = 0
  let count_multiples = get_number_min('Quantos múltiplos? ', 1)
  let actual = 0

  while (count < count_multiples){
    print(`> ${actual}`)
    actual = actual + number
    count++
  }
  print('-------------------------')
}

main()