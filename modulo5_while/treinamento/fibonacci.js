import { get_number_min, print, print_inline } from '../../utils/input.js'

function main(){
  print('****** FIBO *******')
  const qtd = get_number_min('Número (>=2): ', 2)
  let contador = 2
  let ant_1 = 0
  let ant_2 = 1
  
  print('--------------------')
  print_inline(ant_1)
  print_inline(' ' + ant_2)

  while (contador < qtd){
    let proximo = ant_1 + ant_2
    print_inline(' ' + proximo)

    ant_1 = ant_2
    ant_2 = proximo

    contador++
  }

  print('\n--------------------')

}

main()