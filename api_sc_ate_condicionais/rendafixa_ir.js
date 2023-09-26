import { question } from 'readline-sync'

function main(){
  const valor_investido = getNumber('Valor R$: ')
  console.log('Data do Investimento:')
  const mes_investimento = getNumber('Mês: ')
  const ano_investimento = getNumber('Ano: ')
  
  console.log('Data da Realização:')
  const mes_realizacao = getNumber('Mês: ')
  const ano_realizacao = getNumber('Ano: ')

  const taxa_cdb = getNumber('Taxa CDB (% a.m): ')
  const inflacao = getNumber('Inflação do Perído (%): ')

  // Quantidade de meses
  const tempo_meses = calcular_meses_entre_datas(mes_investimento, ano_investimento, 
                  mes_realizacao, ano_realizacao)

  if (tempo_meses === -1){
    console.log('Error nas data. Favor tente novamente')
    return
  }

  const rendimento_cdb = calcular_juros_cdb(valor_investido, taxa_cdb, tempo_meses)
  const ir = calcular_ir(rendimento_cdb, tempo_meses)
  const iof = calcular_iof(rendimento_cdb, tempo_meses)
  const rendimento_cdb_liq = rendimento_cdb - ir - iof
  const valor_a_sacar = valor_investido + rendimento_cdb_liq
  const ganho_real_perc = (rendimento_cdb_liq/valor_investido) * 100
  const valor_inflacao = valor_investido * (inflacao/100)
  const ganho_real_pos_inflacao = rendimento_cdb_liq - valor_inflacao
  const ganho_real_pos_inflacao_perc = (ganho_real_pos_inflacao/valor_investido) * 100

  // 
  const resultado = `******* TRIBUTAÇÃO RENDA FIXA ********
  Valor Investimento	: R$ ${valor_investido.toFixed(2)}
  Taxa de Rendimento	: ${taxa_cdb.toFixed(2)}% a.m
  Investido em		: ${mes_investimento}/${ano_investimento}
  Realizado em		: ${mes_realizacao}/${ano_realizacao}
  —-------------------------------------
  Rendimento Bruto	: R$ ${rendimento_cdb.toFixed(2)}
  IOF			: R$ ${iof.toFixed(2)}
  IR			: R$ ${ir.toFixed(2)}
  Total impostos		: R$ ${(iof+ir).toFixed(2)}
  —-------------------------------------
  Rendimento Líquido	: R$ ${rendimento_cdb_liq.toFixed(2)}
  Rendimento Líquido	: ${ganho_real_perc.toFixed(1)}% 
  —-------------------------------------
  Valor total a sacar	: R$ ${valor_a_sacar.toFixed(2)}
  —-------------------------------------
  Inflação do Período	: ${inflacao.toFixed(1)}% 
  Ganho Real		: R$ ${ganho_real_pos_inflacao.toFixed(2)} ou ${ganho_real_pos_inflacao_perc.toFixed(1)}% 
  —-------------------------------------
  `
  console.log(resultado)
}

function calcular_meses_entre_datas(mes_investimento, ano_investimento, mes_realizacao, ano_realizacao){
  const meses_final = mes_realizacao + 12*ano_realizacao
  const meses_inicial = mes_investimento + 12*ano_investimento

  const total_meses = (meses_final - meses_inicial) + 1

  if (meses_final < meses_inicial){
    return -1
  }

  return total_meses
}

function calcular_iof(rendimento_cdb, tempo_meses){
  if (tempo_meses === 1){
    return rendimento_cdb * (5/100)
  }

  return 0
}


function calcular_ir(rendimento_cdb, tempo_meses){
  const dias = tempo_meses * 30
  
  if (dias <= 180){
    return rendimento_cdb * (22.5/100)
  }else if (dias <= 360){
    return rendimento_cdb * (20/100)
  }else if (dias <= 720){
    return rendimento_cdb * (17.5/100)
  }else{
    return rendimento_cdb * (15/100)
  }
}


function calcular_juros_cdb(valor_investido, taxa_cdb, tempo_meses){
  const montante = valor_investido * (1 + taxa_cdb/100)**tempo_meses
  const rendimento = montante - valor_investido

  return rendimento
}

function getNumber(texto){
  return Number(question(texto))
}

main()