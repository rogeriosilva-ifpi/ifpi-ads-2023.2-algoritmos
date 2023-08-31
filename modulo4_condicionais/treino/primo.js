import { question } from 'readline-sync'

function main(){
  const numero = Number(question('Numero: '))

  if (eh_primo(numero)){
    console.log(`O número ${numero} é PRIMO.`)
  }else{
    console.log(`O número ${numero} NÃO é PRIMO.`)
  }

  console.log('\nFIM.')

}

function eh_primo(num){
  // Fail Fast
  if (num <= 1){
    return false
  }

  if (num === 3 || num === 5 || num === 7){
    return true
  }

  // const resultado = !eh_divisivel(num, 3) && !eh_divisivel(num, 5) && !eh_divisivel(num, 7)
  return !eh_divisivel(num, 3) && !eh_divisivel(num, 5) && !eh_divisivel(num, 7)

  // if (!eh_divisivel(num, 3) && !eh_divisivel(num, 5) && !eh_divisivel(num, 7)){
  //   return true
  // }else{
  //   return false
  // }
}

function eh_divisivel(numero, divisor){
  // const resultado = numero % divisor === 0
  return numero % divisor === 0
}

main()