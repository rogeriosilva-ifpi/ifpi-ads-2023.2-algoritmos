import { question } from "readline-sync"

function main(){
  console.log('********* CDB vs CDC **********')

  // 1. Pedir dados CDB
  const capital_cdb = Number(question('Valor Investido R$: '))
  const taxa_cdb = Number(question('Taxa % a.a: '))
  const ano_saque_cdb = Number(question('Ano Saque: '))
  
  // 2. Calcular Juros CDB
  const juros_cdb = calcular_juros_cdb(capital_cdb, taxa_cdb, ano_saque_cdb)
  const valor_receber_cdb = capital_cdb + juros_cdb
  const rendimento_percentual_cdb = (juros_cdb / capital_cdb) * 100

  // 3. Mostrar Dados CDB
  console.log('------- Resumo CDB ----------')
  console.log(`Investimento : ${rs(capital_cdb)}`)
  console.log(`Ganho        : ${rs(juros_cdb)}`)
  console.log(`A Receber    : ${rs(valor_receber_cdb)}`)
  console.log(`Rendimento   : ${rendimento_percentual_cdb.toFixed(2)} %`)

  console.log('\n--------- CDC ---------')
  // 4. Pedir dados CDC
  const capital_cdc = capital_cdb
  const taxa_cdc = Number(question('Taxa CDC % a.m.: '))
  const tempo_cdc = (ano_saque_cdb-2023) * 12 // meses

  // 5. Calcular Juros CDC
  const juros_cdc = calcular_juros_cdc(capital_cdc, taxa_cdc, tempo_cdc)
  const valor_total_apagar = capital_cdc + juros_cdc
  const valor_parcela = valor_total_apagar / tempo_cdc
  const percentual_total = (juros_cdc / capital_cdc) * 100 // CDC: Custo Efetivo Total

  // 6. Mostrar dados CDC
  console.log('------- Resumo CDC ----------')
  console.log(`Valor CDC(Emp.): ${rs(capital_cdc)}`)
  console.log(`Total a Pagar  : ${rs(valor_total_apagar)}`)
  console.log(`Juros CDC      : ${rs(juros_cdc)}`)
  console.log(`CET %          : ${percentual_total.toFixed(2)} %`)
  console.log(`Parcelas       : ${tempo_cdc} x ${rs(valor_parcela)}`)

  // 7. Calcular Lucro do Banco
  const lucro_banco = juros_cdc - juros_cdb
  console.log('\n------ LUCRO DO BANCO --------')
  console.log(`Lucro: ${rs(lucro_banco)}`)
}

function calcular_juros_cdb(capital_cdb, taxa_cdb, ano_saque_cdb){
  const tempo = ano_saque_cdb - 2023
  const juros = juros_compostos(capital_cdb, taxa_cdb, tempo)
  return juros
}

function calcular_juros_cdc(capital_cdc, taxa_cdc, tempo_cdc){
  return juros_compostos(capital_cdc, taxa_cdc, tempo_cdc)
}

function juros_compostos(c, i, t){
  const montante = c * (1 + i/100)**t
  const juros = montante - c
  return juros
}


function rs(valor){
  const formatado = `R$ ${valor.toFixed(2)}`
  return formatado
}


main()