/**
 * APROVADO Media >= 7
 * PROVA FINAL .. MEDIA < 7.0 e >+ 4.0
 * REPROVADO MEDIA < 4.0
 */

import { question } from "readline-sync";

function main(){
  const nota1 = Number(question('Nota 1:'))
  const nota2 = Number(question('Nota 2:'))

  const media = calcular_media(nota1, nota2)
  const situacao = verificar_situacao(media)

  console.log(`Sua média final é: ${media}`)
  console.log(`Sua Situação final é: ${situacao}`)
}

function calcular_media(nota1, nota2){
  return (nota1 + nota2) / 2
}

function verificar_situacao(media){
  if (media >= 7){
    return 'APROVADO'
  }else if (media >= 4){
    console.log('Você ficou em PROVA FINAL')
    const nota_pf = Number(question('Nota PF: '))
    const situacao_pf = verificar_situacao_pf(nota_pf, media)
    return situacao_pf
  }else{
    return 'REPROVADO DIRETO'
  }
}

function verificar_situacao_pf(nota_pf, media){
  const media_final = calcular_media(nota_pf, media)
  console.log(`Sua Média após PF ${media_final.toFixed(2)}`)
  if (media_final >= 6){
    return 'APROVADO PF'
  }else{
    return 'REPROVADO PF'
  }
}

function verificar_situacao2(media){
  if (media < 4){
    return 'REPROVADO'
  }else if (media < 7){
    return 'PROVA FINAL'
  }else{
    return 'APROVADO'
  }
}

main()