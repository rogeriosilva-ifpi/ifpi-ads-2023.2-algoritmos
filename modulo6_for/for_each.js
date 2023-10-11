import { get_text, print } from '../utils/input.js'

function main(){

  const nome = get_text('Qual seu nome? ')

  for(let item of nome){
    if (item === ' ') continue
    print(item)
  }

}

main()