import { clear_screen, get_number, get_positive_number, print } from '../../utils/input.js'

function main(){
  let votos_1 = 0
  let votos_2 = 0
  let votos_3 = 0
  let brancos = 0
  let nulos = 0


  print('******** ELEICOES 2023 *********')
  let qtd_eleitores = get_positive_number('Quantidade de Eleitores: ')

  while (qtd_eleitores > 0){
    // pedir o voto / mostrar a urna
    clear_screen()
    const voto = get_number(urna())

    if (voto === 1){
      votos_1++
    }else if (voto === 2){
      votos_2++
    }else if (voto === 3){
      votos_3++
    }else if (voto === 9){
      nulos++
    }else if (voto === 0){
      brancos++
    }else{
      print('Voto Inválido!')
      qtd_eleitores++
    }

    qtd_eleitores--
  }

  mostrar_votacao(votos_1, votos_2, votos_3, brancos, nulos)

  const vencedor = computar_vencedor(votos_1, votos_2, votos_3)
  if (vencedor === -1){
    print(`EMPATE! Temos que fazer um nova eleição!`)
  }else{
    print(`O Candidato eleito foi: ${vencedor}`)
  }
  

  print('******** ------------- *********')
}

function urna(){
  const tela = `
  |-------- URNA ----------|
   1 - Candidato 01
   2 - Candidato 02
   3 - Candidato 03
   9 - Nulo
   0 - Branco
  |------------------------|

  VOTO >>> `

  return tela
}


function computar_vencedor(votos_1, votos_2, votos_3){
  if (votos_1 > votos_2 && votos_1 > votos_3){
    return 1
  }else if (votos_2 > votos_1 && votos_2 > votos_3){
    return 2
  }else if (votos_3 > votos_1 && votos_3 > votos_2){
    return 3
  }else{
    return -1;
  }
}

function mostrar_votacao(votos_1, votos_2, votos_3, brancos, nulos){
  print(`
  |------ RESULTADO ------|
  > Candidato 1: ${votos_1}
  > Candidato 2: ${votos_2}
  > Candidato 3: ${votos_3}
  ------
  > Brancos    : ${brancos}
  > Nulos      : ${nulos}
  \n`)
}

main()