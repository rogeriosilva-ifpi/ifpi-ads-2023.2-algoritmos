import { question } from "readline-sync"

function main(){
  let numero = Number(question('Número: '))
  let somatorio = numero

  while (numero % 7 !== 0){
    numero = Number(question('Número: '))
    somatorio = somatorio + numero
  }

  console.log(`Soma dos Números: ${somatorio}`)
}

main()