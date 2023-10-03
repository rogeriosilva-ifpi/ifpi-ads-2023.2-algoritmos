import { get_positive_number, print } from "../../utils/input.js"

function main(){
  const limite = get_positive_number('Número: ')
  let numero = 1

  while (numero**2 <= limite){
    numero++
  }
  numero--

  print(`O maior quadrado menor/igual a ${limite} é ${numero**2} (${numero}*${numero})`)

}

main()