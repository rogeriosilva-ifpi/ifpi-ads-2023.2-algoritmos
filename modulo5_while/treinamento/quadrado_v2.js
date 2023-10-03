import { get_positive_number, print } from "../../utils/input.js"

function main(){
  const limite = get_positive_number('Número: ')
  const numero = Math.floor(Math.sqrt(limite))

  print(`O maior quadrado menor/igual a ${limite} é ${numero**2} (${numero}*${numero})`)

}

main()