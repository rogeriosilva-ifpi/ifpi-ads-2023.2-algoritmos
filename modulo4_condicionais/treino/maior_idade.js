import { question } from 'readline-sync'

function main(){
  const nome = question('Nome: ')
  const idade = Number(question('Idade: '))

  if (idade >= 18){
    console.log('Parabéns! Vc já maior de idade!')
  }else{
    // idade < 18
    console.log('Vc ainda é menor de idade!')
  }

  console.log(`Tchau ${nome}!!`)
}

main()