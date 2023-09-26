import { question } from "readline-sync"

function main(){
  let nome = question('Nome: ')
  let menor_nome = nome
  let contador = 1

  while (nome.length !== 7){
    nome = question('Nome: ')
    contador++

    if (nome.length < menor_nome.length){
      menor_nome = nome
    }
  }

  console.log(`Você digitou ${contador} nomes`)
  console.log(`O menor nome: ${menor_nome}`)
}

main()