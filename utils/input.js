import { question } from "readline-sync"

export function get_text(label){
  return question(label)
}

export function get_number(label){
  return Number(question(label))
}

export function get_number_min(label, minimo){
  let numero = get_number(label)

  while (numero < minimo){
    console.log(`ERROR: Digite um número maior ou igual a ${minimo}`)
    numero = get_number(label)
  }

  return numero
}

export function get_positive_number(label){
  return get_number_min(label, 1)
}

export function print(text){
  console.log(text)
}

export function print_inline(text){
  process.stdout.write(`${text}`)
}

export function clear_screen(){
  console.clear()
}

export function enter_to_continue(){
  get_text('<enter> to continue...')
  clear_screen()
}

export function dinheiro(valor){
  return `R$ ${valor.toFixed(2)}`
}