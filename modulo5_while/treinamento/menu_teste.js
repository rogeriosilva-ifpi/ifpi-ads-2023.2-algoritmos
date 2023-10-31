import { question } from 'readline-sync'

function main(){

  const menu = `
  1 - Atividade 1
  2 - Atividade 2
  0 - sair 
  >>> `

  // estado anterior
  let opcao = Number(question(menu))

  while (opcao != 0){
    if (opcao === 1){
      console.log('Fazendo atividade 1')
    }else if (opcao === 2){
      console.log('Fazendo atividade 2')
    }else{
      console.log('Opcao inválida!')
    }
    question('Continua....')
    opcao = Number(question(menu))
  }

}

main()