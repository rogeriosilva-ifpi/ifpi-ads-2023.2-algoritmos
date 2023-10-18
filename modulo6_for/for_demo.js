import { print } from '../utils/input.js'

function main(){

  const alunos = ['Ronald', 'MN', 'ME', 'Mari', 'Helô']

  for(let aluno of alunos){ // of: elemento
    print(`> ${aluno} - ${aluno.length} letras`)
  }

}


function for_in(){

  const alunos = ['Ronald', 'MN', 'ME', 'Mari', 'Helô']

  for(let index in alunos){
    const aluno = alunos[index]
    print(`> ${aluno} - ${aluno.length} letras`)
  }

}



function main_for_3_instrucoes(){

  const alunos = ['Ronald', 'MN', 'ME', 'Mari', 'Helô']

  for(let i = 0; i < alunos.length; i++){
    const aluno = alunos[i]
    print(`> ${aluno} - ${aluno.length} letras`)
  }

}


function main_while(){

  const alunos = ['Ronald', 'MN', 'ME', 'Mari', 'Helô']

  let i = 0

  while (i < alunos.length){
    const aluno = alunos[i]
    print(`> ${aluno} - ${aluno.length} letras`)

    i++
  }

}

main()