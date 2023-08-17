import { question } from 'readline-sync'

// CDB: Certificado de Depósito Bancário
function programa(){
  console.log('**** Simulador de CDB *****')
  
  const valor_investido = Number(question('Investir R$: '))
  const taxa_cdb = Number(question('Taxa Rend. (%): '))
  const ano_vencimento = Number(question('Ano vencimento(AAAA): '))

  const tempo_ano = calcular_tempo_investimento(ano_vencimento)
  const rendimento_cdb = calcular_juros_cdb(valor_investido, taxa_cdb, tempo_ano)
  
  const valor_total_a_sacar = valor_investido + rendimento_cdb
  // const percentual_de_ganho = (rendimento_cdb / valor_investido) * 100
  const percentual_de_ganho = taxa_cdb * tempo_ano

  console.log('-------- RESULTADO ----------')
  console.log(`>> Valor Investido: R$ ${valor_investido.toFixed(2)}`)
  console.log(`>> Rendimento     : R$ ${rendimento_cdb.toFixed(2)}`)
  console.log(`>> Total a Sacar  : R$ ${valor_total_a_sacar.toFixed(2)}`)
  console.log(`>> Rendimento (%) : ${percentual_de_ganho.toFixed(1)}%`)
  console.log('-----------------------------')

  console.log()
  console.log('Agora vamos ver quanto o Banco lucra com seu dinheiro:')
  const valor_emprestado = valor_investido
  const tempo_meses = tempo_ano * 12
  const taxa_mes = Number(question('Taxa Mensal (%): '))

  const juros_emprestimo = calcular_juros_emprestimo(valor_emprestado, taxa_mes, tempo_meses)
  const valor_lucro_banco = juros_emprestimo - rendimento_cdb
  const valor_total_emprestimo = valor_emprestado + juros_emprestimo

  console.log(`Total Emprést.(Pago): R$ ${valor_total_emprestimo.toFixed(2)}`)
  console.log(`Juros Emprést.      : R$ ${juros_emprestimo.toFixed(2)}`)
  console.log(`Juros CDB           : R$ - ${rendimento_cdb.toFixed(2)}`)
  console.log(`Lucro do Banco      : R$ ${valor_lucro_banco.toFixed(2)}`)
  console.log('-----------------------------')


}

function calcular_tempo_investimento(ano){
  const tempo = ano - 2023
  return tempo
}

function calcular_juros_cdb(valor_investido, taxa_cdb, tempo_ano){
  // const juros = valor_investido * (taxa_cdb/100) * tempo
  // const juros = juros_simples(valor_investido, taxa_cdb, tempo)

  // return juros
  return juros_simples(valor_investido, taxa_cdb, tempo_ano)
}

function calcular_juros_emprestimo(valor, taxa_mes, tempo_meses){
  return juros_compostos(valor, taxa_mes, tempo_meses)
}

function juros_simples(c, i, t){
  const juros = c * (i/100) * t
  return juros
}

function juros_compostos(c, i, t){
  const juros = c * (1 + (i/100))**t
  return juros
}

programa()