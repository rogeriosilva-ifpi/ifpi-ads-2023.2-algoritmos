import { enter_to_continue, get_number_min, get_text, print } from '../utils/input.js'

let PROXIMA_MATRICULA = 1

function main(){
  let alunos = []
  let opcao = get_number_min(menu(), 0)

  while (opcao != 0){

    if (opcao === 1){
      // novo aluno
      const novo_aluno = obter_novo_aluno()
      alunos.push(novo_aluno)
    }else if (opcao === 2){
      // Listar alunos
      listar_alunos(alunos)
    }else if (opcao === 3){
      // const alunos_aprovados = filtrar_alunos_aprovados(alunos)
      const alunos_aprovados = filtrar(alunos, aluno => aluno[3] >= 7)
      listar_alunos(alunos_aprovados, 'ALUNOS APROVADOS')
    }else if (opcao === 4){
      // processar_resultado(alunos)
      alunos = mapear(alunos, definir_situacao)
      print('Processamento realizado!')
    }

    enter_to_continue()
    opcao = get_number_min(menu(), 0)
  }

}

// Funcionalidades
function obter_novo_aluno(){
  const aluno = ['', 0, '', 0.0, '', 'CURSANDO']
  
  aluno[0] = get_text('Nome: ')
  aluno[1] = get_number_min('Ano Nascimento: ', 1900)
  aluno[2] = get_text('M | F: ')
  aluno[3] = get_number_min('Média: ', 0)
  aluno[4] = gerar_matricula()

  return aluno
}

function listar_alunos(alunos, label = 'ALUNOS'){
  print(`-----***** ${label} *****------`)
  print('Matrícula\tNome\t\tMédia\tSituação')
  // todo: for de 3 expressoes
  for(let i = 0; i < alunos.length; i++){
    print(`${alunos[i][4]}\t\t${alunos[i][0]}\t${alunos[i][3]}\t${alunos[i][5]}`)
  }
}

function filtrar_alunos_aprovados(alunos){
  const cestinha = []
  for (let i = 0; i < alunos.length; i++){
    if (alunos[i][3] >= 7.0){
      cestinha.push(alunos[i])
    }
  }

  return cestinha
}

function processar_resultado(alunos){
  for (let i = 0; i < alunos.length; i++){
    const aluno_atual = alunos[i]
    if (aluno_atual[3] < 4){
      aluno_atual[5] = 'REPROVADO'
    }else if (aluno_atual[3] < 7){
      aluno_atual[5] = 'PROVA FINAL'
    }else{
      aluno_atual[5] = 'APROVADO'
    }

    alunos[i] = aluno_atual
  }

}

function filtrar(vetor, criterio){
  const cestinha = []
  for (let i = 0; i < vetor.length; i++){
    if (criterio(vetor[i])){
      cestinha.push(vetor[i])
    }
  }

  return cestinha
}

function mapear(alunos, funcao){
  for (let i in alunos){
    alunos[i] = funcao(alunos[i])
  }
  return alunos
}

function definir_situacao(aluno){
  if (aluno[3] < 4){
    aluno[5] = 'REPROVADO'
  }else if (aluno[3] < 7){
    aluno[5] = 'PROVA FINAL'
  }else{
    aluno[5] = 'APROVADO'
  }

  return aluno
}

function gerar_matricula(){

  let padding = ''
  const ordem = PROXIMA_MATRICULA++
  if (ordem < 10){
    padding = '000'
  }else if (ordem < 100){
    padding = '00'
  }else if (ordem < 1000){
    padding = '0'
  }

  const matricula = `23S${padding}${ordem}`

  return matricula
}

function menu(){
  return `
  ******* Sys Alunos *******
  --------------------------
  1 - Add Aluno
  2 - List Alunos
  3 - Lista Alunos APROVADOS
  4 - Processar Situação

  0 - Sair
  op >>> `
}

main()