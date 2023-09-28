import { get_number_min, print } from "../../utils/input.js"
import { fatorial_recursiva } from "../../utils/math.js"

function main(){
  // let numero = get_positive_number('Número: ')
  let numero = get_number_min('Número: ', 0)
  // const resultado = fatorial(numero)
  const resultado = fatorial_recursiva(numero)
  print(`Fatorial de ${numero} é ${resultado}`)
}

main()