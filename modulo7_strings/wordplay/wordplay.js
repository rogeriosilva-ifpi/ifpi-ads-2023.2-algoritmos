import { readFileSync } from 'fs'
import { enter_to_continue, get_number, get_positive_number, get_text, print } from '../../utils/input.js'
import { contem_letra, text_to_lower } from '../../utils/strings.js'

function main(){
  const palavras = load_palavras()
  let opcao = get_number(menu(palavras.length))

  while (opcao != 0){

    if (opcao === 1){
      mostrar_palavras_n_letras(palavras)
    }else if (opcao === 2){
      // Palavras que não contém letra "e"
      mostrar_palavras_sem_letra_tal(palavras)
    }else if (opcao === 3){
      mostrar_palavras_que_evitam_proibidas(palavras)
    }else if( opcao === 6){
      mostrar_palavras_is_abecedarian(palavras)
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
  1 - Palavras com mais de N letras
  2 - Palavras sem letra "tal"
  3 - Palavras sem letras proibidas
  ...
  6 - Palavras Abecedarian

  0 - Sair
  >>> `
}

function load_palavras(){
  const arquivo = readFileSync('palavras.txt', 'utf-8')
  const palavras = arquivo.split('\n')

  return palavras
}

function mostrar_palavras_n_letras(palavras){
  const tamanho = get_positive_number('Tamanho+: ')
  let contador = 0
  for (let palavra of palavras){
    if (palavra.length > tamanho){
      contador++
      print(palavra)
    }
  }

  const percentual = (contador / palavras.length) * 100
  print(`
    Temos (${percentual.toFixed(3)} % ) ${contador} palavras com mais ${tamanho} de letras!
  `)
}

function mostrar_palavras_sem_letra_tal(palavras){
  const letter = get_text('Letra: ')
  let contador = 0
  for (let palavra of palavras){
    if (has_no_letter(palavra, letter)){
      contador++
      print(palavra)
    }
  }

  const percentual = (contador / palavras.length) * 100
  print(`
    Temos (${percentual.toFixed(3)} % ) ${contador} palavras sem a letra "${letter}"!
  `)
}

function mostrar_palavras_que_evitam_proibidas(palavras){
  const letras_proibidas = get_text('Letras proibidas: ')
  let contador = 0

  for (let palavra of palavras){
    if (avoids(palavra, letras_proibidas)){
      contador++
      print(palavra)
    }
  }
  const percentual = (contador / palavras.length) * 100
  print(`
    Existem ${contador} palavras (${percentual.toFixed(2)} %) que não usam as letras "${letras_proibidas}"
  `)
}

function mostrar_palavras_is_abecedarian(palavras){
  let contador = 0
  for (let palavra of palavras){
    if (is_abecedarian(palavra)){
      contador++
      print(palavra)
    }
  }

  const percentual = (contador / palavras.length) * 100
  print(`
    Temos (${percentual.toFixed(3)} % ) ${contador} palavras abecedarian!
  `)
}

function has_no_letter(palavra, letter){
  for (let letra of palavra){
    if ( text_to_lower(letra) === text_to_lower(letter)){
      return false
    }
  }
  
  return true
}

function avoids(palavra, letras_proibidas){
  for (let letra_proibida of letras_proibidas){
    if (contem_letra(palavra, letra_proibida)){
      return false
    }
  }

  return true
}

function is_abecedarian(palavra){
  for(let i =0 ; i < (palavra.length - 1);i++){
    let letra_atual = palavra[i]
    let proxima = palavra[i + 1]
    if(letra_atual.charCodeAt() > proxima.charCodeAt()){
      return false
    }
  }

  return true
}




main()