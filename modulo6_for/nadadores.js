import { get_text, print } from '../utils/input.js'

function main(){
  // let [pontos_a, pontos_b] = [0, 0]
  let pontos_a = 0
  let pontos_b = 0
  // let entrada = get_text('Prova/Nadadores "0 0": ')
  // let dados = entrada.split(' ')
  // let prova = Number(dados[0])
  // let qtd = Number(dados[1])
  let [prova, qtd] = get_text('Prova/Nadadores: ').split(' ').map(Number)

  while (prova !== 0 || qtd !== 0){

    for (let i = 0; i < qtd; i++){ // para cada nadador
      const [nome, classificacao, tempo, clube] = get_text('N/C/T/C: ').split(' ')

      const pontos = calcular_pontos(Number(classificacao))
  
      if (clube === 'a'){
        pontos_a += pontos
      }else{
        pontos_b += pontos
      }
    }
   
    // convergencia de dados
    [prova, qtd] = get_text('Prova/Nadadores: ').split(' ').map(Number)

  }

  // Resultados
  // const vencedor = pontos_a > pontos_b ? 'Time A' : pontos_b > pontos_a ? 'Time B' : 'Empate'
  let vencedor = 'EMPATOU'
  if (pontos_a > pontos_b){
    vencedor = 'Time A'
  }else if (pontos_b > pontos_a){
    vencedor = 'Time B'
  }

  const resultados = `
  ***** RESULTADO *****
  Time A: ${pontos_a} pontos
  Time B: ${pontos_b} pontos
  -------------
  Resultado: ${vencedor}
  `
  print(resultados)
}

function calcular_pontos(posicao){
  if (posicao === 1) return 9
  if (posicao === 2) return 6
  if (posicao === 3) return 4
  if (posicao === 4) return 3
  return 0
}


main()