import { question } from 'readline-sync'

function main(){
  const nome = question('Nome: ')
  let qtd = Number(question('Número: '))

  while (qtd > 0 ){
    console.log(`Olá ${nome}! Tempo de Ouro... lembra disso!`)
    qtd--
  }

}

main()