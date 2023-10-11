import { get_positive_number, print, print_inline } from '../../utils/input.js'
/*
2. Leia 2 (dois) números, calcule e escreva 
o mmc (mínimo múltiplo comum) entre os números lidos.
*/
function main(){
  const num1 = get_positive_number('Número 1: ')
  const num2 = get_positive_number('Número 2: ')
  let mmc = num1
  
  print_inline('* ')

  while (mmc % num1 !== 0 || mmc % num2 !== 0){
    print_inline('* ')
    mmc++
  }

  print(`\nO MMC(${num1}, ${num2}) é ${mmc}`)
}

console.time()
main()
console.timeEnd()