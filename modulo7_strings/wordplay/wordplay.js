import { readFileSync } from 'fs'
import { enter_to_continue, get_number, print } from '../../utils/input.js'

function main(){
  const palavras = load_palavras()
  let opcao = get_number(menu(palavras.length))

  while (opcao != 0){

    if (opcao === 1){
      // 20 caracteres
      mostrar_palavras_20_letras(palavras)
    }else if (opcao === 2){
      // Palavras que não contém letra "e"
    }

    enter_to_continue()
    opcao = get_number(menu(palavras.length))
  }

}

function menu(qtd_palavras){
  return `
  '********** WORDPLAY ***********'
  ${qtd_palavras} palavras carregadas
  -----------------------------------
  1 - Palavras com mais de 20 letras

  0 - Sair
  >>> `
}

function load_palavras(){
  const arquivo = readFileSync('palavras.txt', 'utf-8')
  const palavras = arquivo.split('\n')

  return palavras
}

function mostrar_palavras_20_letras(palavras){
  for (let palavra of palavras){
    if (palavra.length > 20){
      print(palavra)
    }
  }
}

main()