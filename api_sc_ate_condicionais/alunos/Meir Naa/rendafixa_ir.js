import {question} from 'readline-sync'


function main(){
    //Entrada
    const valor_investido = Number(question('Valor investido (R$): '))
    const taxa_rendimento = Number(question('Taxa de rendimento mensal (%): '))
    const mes_investimento = Number(question('Mes que o investimento foi realizado (1 a 12): ')) 
    const ano_investimento = Number(question('Ano que o investimento foi realizado: '))
    const mes_resgate = Number(question('Mes que o investimento foi resgatado (1 a 12): '))
    const ano_resgate = Number(question('Ano que o investimento foi resgatado: '))
    const inflacao = Number(question('Inflacao acumulada (%): '))

    //Processamento
    const tempo_meses = tempo_investimento(ano_investimento, mes_investimento, ano_resgate, mes_resgate)
    const rendimento_bruto = juros_compostos(valor_investido, taxa_rendimento, tempo_meses)
    const ir = calcular_imposto_renda(tempo_meses, rendimento_bruto)
    let iof 
    if(tempo_meses === 1){
        iof = (5/100) * rendimento_bruto
    }else{
        iof = 0
    }

    const total_impostos = iof + ir
    const rendimento_liquido = rendimento_bruto - total_impostos
    const porcentagem_liquida = (rendimento_liquido / valor_investido) * 100
    const valor_total = valor_investido + rendimento_liquido

    const ganho_real = rendimento_liquido - ((inflacao/100) * valor_investido)
    
    //Saída
    console.log()
    console.log(`******************* TRIBUTAÇÃO RENDA FIXA *******************
    \n\nValor investido: ${rs(valor_investido)}
    \nTaxa de Rendimento: ${taxa_rendimento.toFixed(2)}%
    \nInvestido em ${mes_investimento}/${ano_investimento}
    \nRealizado em ${mes_resgate}/${ano_resgate}
    \n\n------------------------------------------------------------------------
    \n\nRendimento Bruto: ${rs(rendimento_bruto)}
    \nIOF: ${rs(iof)}
    \nIR: ${rs(ir)}
    \nTotal Impostos: ${rs(total_impostos)}
    \n\n------------------------------------------------------------------------
    \n\nRendimento Líquido: ${rs(rendimento_liquido)}
    \nRendimento Líquido: ${porcentagem_liquida.toFixed(2)}%
    \n\n------------------------------------------------------------------------
    \nValor Total: ${rs(valor_total)}
    \n\n------------------------------------------------------------------------
    \n\nInflação do Período: ${inflacao.toFixed(2)}%
    \nGanho real: ${rs(ganho_real)}
    \n\n------------------------------------------------------------------------
    `)
}


function rs(valor){
    return `R$ ${valor.toFixed(2)}`
}


function tempo_investimento(ano_investimento, mes_investimento, ano_resgate, mes_resgate){
    if(ano_investimento === ano_resgate){ // 1/2023 10/2023 
        return mes_resgate - mes_investimento
    }
    else if(ano_resgate - ano_investimento === 1 && mes_investimento === mes_resgate){ // 10/2022 10/2023
        return 12
    }
    else if(ano_resgate - ano_investimento === 1 && mes_resgate < mes_investimento){ // 10/2022 4/2023
        return mes_resgate + (12 - mes_investimento)
    }
    else if(ano_resgate - ano_investimento === 1 && mes_resgate > mes_investimento){ //10/2022 12/2023 
        return 12 + (mes_resgate - mes_investimento)
    }
    else{
        const meses = 12 * (ano_resgate - ano_investimento) 
        if(mes_investimento === mes_resgate){ // 9/2022 9/2025
            return meses
        }
        else if(mes_resgate < mes_investimento){ // 10/2022 7/2025
            return meses + (mes_resgate + (12 - mes_investimento))
        }
        else if(mes_resgate > mes_investimento){ // 9/2022 11/2025
            return meses + (mes_resgate - mes_investimento)
        }
    }
}


function juros_compostos(c,i,t){
    const montante = c * ((1 + i)**t)
    const juros = montante - c
    return juros
}


function calcular_imposto_renda(tempo_meses, rendimento_bruto){
    if((tempo_meses * 30) <= 180){
        return (22.5/100) * rendimento_bruto
    }
    if((tempo_meses * 30) >= 181 && (tempo_meses * 30) <= 360){
        return (20/100) * rendimento_bruto
    }
    if((tempo_meses * 30) >= 361 && (tempo_meses * 30) <= 720){
        return (17.5/100) * rendimento_bruto
    }else{
        return (15/100) * rendimento_bruto
    }
}


main()