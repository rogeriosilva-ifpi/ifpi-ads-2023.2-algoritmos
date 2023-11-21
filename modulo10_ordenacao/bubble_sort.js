import { question } from 'readline-sync'
import { filtrar, mapear } from '../modulo8_colecoes/map_filter_reduce.js'

function main(){
  // const vetor = [32, 38, 45, 28, 0, 42, 13, 9, 50, 19]
  // const vetor = ['Samuel', 'Mariana', 'Wagner', 'Ayrlon', 'Amanda', 'Teresa', 'pc']
  const vetor = [
    {'nome':'MARI', 'nota': 10.0, 'idade': 19},
    {'nome':'LU', 'nota': 7.8, 'idade': 25},
    {'nome':'SAMIR', 'nota':6.0, 'idade': 21},
    {'nome':'HELÔ', 'nota':7.1, 'idade': 33}
  ]
  console.log('Vetor não ordenado')
  console.log(vetor)
  console.log('------------------')

  const alunos_com_situacao = mapear(vetor, computador_situacao)
  console.log(alunos_com_situacao)
  
  const atributo = question('Qual atributo: ')
  const asc_desc = question('ASC | DESC: ')

  const aprovados = filtrar(alunos_com_situacao, por_aprovado)
  const contador = bubble_sort(aprovados, por_atributo(atributo), asc_desc)

  console.log(`Vetor ordenado com ${contador} instrucoes`)
  console.log(aprovados)

  
}

function por_aprovado(aluno){
  return aluno['nota'] >= 7.0
}

function computador_situacao(aluno){
  const situacao = aluno['nota'] >= 7 ? 'APROVADO' : 'REPROVADO'
  aluno['situacao'] = situacao
  return aluno
}

function por_atributo(chave){
  function funcao(item){ 
    return item[chave]
  }
  return funcao
}

function por_nome(item){
  return item['nome']
}

function por_nota(item){
  return item['nota']
}

function by_pass(item){
  return item
}

function por_tamanho(item){
  return item.length
}

function ultima_letra(item){
  return item[item.length - 1]
}

function bubble_sort(vetor, criterio, reverse='ASC'){
  let contador = 0
  for (let p = 0; p < vetor.length - 1; p++){
    let houve_troca = false
    for(let i = 0; i < vetor.length - 1 - p; i++){
      if (reverse === 'DESC'){
        if (criterio(vetor[i]) < criterio(vetor[i+1])){
          const aux = vetor[i]
          vetor[i] = vetor[i + 1]
          vetor[i+1] = aux
          houve_troca = true
        } 
      }else if (reverse === 'ASC'){
        if (criterio(vetor[i]) > criterio(vetor[i+1])){
          const aux = vetor[i]
          vetor[i] = vetor[i + 1]
          vetor[i+1] = aux
          houve_troca = true
        }
      }
      
      contador++
    }
    if (!houve_troca) break
  }

  return contador
}

main()