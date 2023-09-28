import { get_positive_number } from "../../utils/input.js"
import { print_tabuada } from '../../utils/math.js'

function main(){
  const number = get_positive_number('Número: ')
  print_tabuada(number, 'SOMAR')
  print_tabuada(number, 'DIMINUIR')
  print_tabuada(number, 'MULTIPLICAR')
  print_tabuada(number, 'DIVIDIR')
}

main()