import { get_text, print } from '../utils/input.js'
/**
 * to_upper(texto)
 * Entrada: 'rogerio'
 * Retornar: 'ROGERIO'
 */
function main(){
  const nome = get_text('Texto: ')
  const resultado = text_to_upper(nome)
  print(resultado)
}

function text_to_upper(texto){
  let novo_texto = ''
  for (let char of texto){
    if (eh_letra_minuscula(char)){
      const code_ascii = char.charCodeAt()
      const novo_code = code_ascii - 32
      const novo_char = String.fromCharCode(novo_code)

      novo_texto = novo_texto + novo_char
    }else{
      novo_texto = novo_texto + char
    }
  }

  return novo_texto
}

function eh_letra_minuscula(char){
  const code = char.charCodeAt(0)
  if (code >= 97 && code <= 122){
    return true
  }else{
    return false
  }
}

main()
