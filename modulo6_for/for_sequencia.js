import { get_text, print } from '../utils/input.js'

function main(){
  const nome = get_text('Qual seu nome? ')

  for(let i = 0; i < nome.length; i++){
    const caractere_atual = nome[i]
    print(`> ${caractere_atual}`)
  }
}

main()