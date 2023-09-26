import { question } from "readline-sync"

function main(){
  const limite_inferior = get_number('Limite Inferior: ')
  const limite_superior = get_number_min('Limite Superior: ', limite_inferior+1)

  const numero = get_number('Múltiplo de : ')
  
  let atual = limite_inferior
  let contador = 0

  

  while (atual <= limite_superior){
    if (atual % numero === 0){
      console.log(atual)
      contador++
    }
    atual++
  }

  console.log(`Foram encontrado ${contador} múltiplos de ${numero}!`)
}

function get_number(label){
  return Number(question(label))
}

function get_number_min(label, minimo){
  let numero = get_number(label)

  while (numero < minimo){
    console.log(`ERROR: Digite um número maior ou igual a ${minimo}`)
    numero = get_number(label)
  }

  return numero
}

main()