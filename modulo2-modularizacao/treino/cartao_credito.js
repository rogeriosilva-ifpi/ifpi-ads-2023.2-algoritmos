import { question } from "readline-sync"

function main(){
  // 1. Pedir Total Fatura
  const fatura_total = Number(question('Total Fatura R$: '))
  
  // 2. Calcular o mínimo (20%)
  const fatura_minimo = fatura_total * (20/100)

  // Pedir a Taxa Juros Mensal do Rotativo
  const taxa_rotativo = Number(question('Taxa Rotativo % (a.m): '))
  
  // 3. Exibir valor total e mínimo
  console.log('----- Detalhes da Fatura --------')
  console.log(`Valor Total : ${rs(fatura_total)}`)
  console.log(`Pag. Mínimo : ${rs(fatura_minimo)}`)
  

  // 4. P1: Perguntar quanto vai pagar e meses
  console.log('P1 - Plano de Pagamento 1: ')
  const valor_p1 = Number(question('Valor R$:'))
  const meses_atraso_p1 = Number(question('Meses de Atraso: '))
  
  // 6. P2: Perguntar quanto vai pagar e meses
  console.log('P2 - Plano de Pagamento 2: ')
  const valor_p2 = Number(question('Valor R$:'))
  const meses_atraso_p2 = Number(question('Meses de Atraso: '))
  
  // 8. Calcular Montante/Fatura P1
  const valor_residual_p1 = fatura_total - valor_p1
  const fatura_p1 = calcular_fatura_futuro(valor_residual_p1, taxa_rotativo, meses_atraso_p1)
  
  // 9. Calcular Montante/Fatura P2
  const valor_residual_p2 = fatura_total - valor_p2
  const fatura_p2 = calcular_fatura_futuro(valor_residual_p2, taxa_rotativo, meses_atraso_p2)
  

  // 10. Mostrar Faturas P1 e P2
  console.log(`------- Plano 1 ---------`)
  console.log(`Valor Pago    : ${rs(valor_p1)}`)
  console.log(`Valor Residual: ${rs(valor_residual_p1)}`)
  console.log(`Meses Atraso  : ${meses_atraso_p1}`)
  console.log(`Fatura em ${meses_atraso_p1} meses será de ${rs(fatura_p1)}`)
  
  console.log(`\n------- Plano 2 ---------`)
  console.log(`Valor Pago    : ${rs(valor_p2)}`)
  console.log(`Valor Residual: ${rs(valor_residual_p2)}`)
  console.log(`Meses Atraso  : ${meses_atraso_p2}`)
  console.log(`Fatura em ${meses_atraso_p2} meses será de ${rs(fatura_p2)}`)
}

function calcular_fatura_futuro(valor, taxa, meses){
  const valor_futuro = valor + juros_compostos(valor, taxa, meses)
  return valor_futuro
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