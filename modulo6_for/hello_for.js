import { question } from 'readline-sync'

function main(){
  const nome = question('Nome: ')

  for(let i = 0; i < nome.length; i++){
    console.log(`
      > ${i}: Olá ${nome}! 
      !!! Tempo de Ouro... lembra disso!!!
    `)
  }

}

main()