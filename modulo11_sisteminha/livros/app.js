// Livro é de um Autor
// Livro: id, nome, ano, autor_id
// Autor tem vários Livros
// Autor: id, nome

import { question } from "readline-sync"
import { ulid } from 'ulidx'

const livros = []
const autores = []

function main(){
  console.clear()

  let opcao = Number(question(menu()))

  while (opcao != 0){
    if (opcao === 1){
      const autor = novo_autor()
      autores.push(autor)
      console.log('Autor adicionado!')
    }else if (opcao === 2){
      listar_autores()
    }else if (opcao === 5){
      const livro = novo_livro()
      livros.push(livro)
      console.log('Livro adicionado!')
    }else if (opcao === 6){
      listar_livros()
    }
    
    
    question('Enter... ')
    console.clear()

    opcao = Number(question(menu()))
  }

}

function menu(){
  const opcoes = `
  |----- Sys Books ------|
  1 - Novo Autor
  2 - Listar Autores
  5 - Novo Livro
  6 - Listar Livros
  
  opcao (0 - sair) >>> `

  return opcoes
}

// AUTORES
function novo_autor(){
  const autor = {
    'id': ulid(),
    'nome': '',
  }

  autor['nome'] = question('Nome: ')

  return autor
}

function listar_autores(){
  for(let autor of autores){
    console.log(autor)
  }
}

// LIVROS
function novo_livro(){
  // listar os autores
  for (let i = 0; i < autores.length; i++){
    console.log(`> ${i}: ${autores[i]['nome']}`)
  }
  const index = Number(question('Index do Autor: '))
  const autor_id = autores[index]['id']

  const livro = {
    'id': ulid(),
    'nome': question('Nome Livro: '),
    'ano': Number(question('Ano: ')),
    'autor_id': autor_id
  }
  return livro
}


function listar_livros(){
  for (let livro of livros){
    const autor = obter_autor_por_id(livro['autor_id'])
    console.log(`${livro['id']} - ${livro['nome']} - ${autor['nome']} - ${livro['ano']}`)
  }
}

function obter_autor_por_id(id){
  for (let autor of autores){
    if (autor['id'] === id){
      return autor
    }
  }

  return 'Não localizado'
}

main()