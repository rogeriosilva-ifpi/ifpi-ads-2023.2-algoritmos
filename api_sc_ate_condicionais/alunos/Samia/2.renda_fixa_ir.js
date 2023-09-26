import { question } from "readline-sync"

function main(){
        //Entrada
        const valor_investido = obter_numero('Informe o valor investido: R$ ')
        const taxa_cdb = obter_numero('Informe a taxa de rendimento (%): ')
        const mes_investimento = obter_numero('Informe o mês de investimento: ')
        const ano_investimento = obter_numero('Informe o ano de investimento: ')
        const mes_resgate = obter_numero('Informe o mês de resgate: ')
        const ano_resgate = obter_numero('Informe o ano de resgate: ')

        //Processamento
        const rendimento_mensal = calcular_rend_mensal(valor_investido, taxa_cdb)
        const tempo_invest_meses = calcular_tempo_invest_meses(ano_investimento, mes_investimento, ano_resgate, mes_resgate)
        const rendimento_bruto = calcular_rendimento_bruto(rendimento_mensal, tempo_invest_meses)
        const iof = calcular_iof(rendimento_bruto)
        const ir = calcular_ir(tempo_invest_meses, rendimento_bruto)
        const total_impostos = iof + ir

        console.log(rendimento_mensal)
        console.log(tempo_invest_meses)

        //Saída
        console.log('\n********** TRIBUTAÇÃO RENDA FIXA **********')
        console.log(`Valor Investimento: R$ ${valor_investido.toFixed(2)}`)
        console.log(`Taxa de Rendimento: ${taxa_cdb/100}% a.m`)
        console.log(`Investido em: ${mes_investimento}/${ano_investimento}`)
        console.log(`Resgatado em: ${mes_resgate}/${ano_resgate}`)
        console.log('-------------------------------------------')
        console.log(`Rendimento Bruto: R$ ${rendimento_bruto.toFixed(2)}`)
        console.log(`IOF: R$ ${iof}`)
        console.log(`IR: R$ ${ir}`)
        console.log(`Total impostos: R$ ${total_impostos}`)


}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function calcular_rend_mensal(valor_investido, taxa_cdb){
    const rend_mensal = valor_investido - (valor_investido * (taxa_cdb / 100))
    return rend_mensal
}

function calcular_tempo_invest_meses(ano_investimento, mes_investimento, ano_resgate, mes_resgate){
    const tempo_anos = (ano_resgate - ano_investimento) * 12
    const tempo_meses = (12 + mes_resgate) - mes_investimento
    const tempo_investido = tempo_anos + tempo_meses
    return tempo_investido
}

function calcular_rendimento_bruto(rendimento_mensal, tempo_invest_meses){
    const rend_bruto = rendimento_mensal * tempo_invest_meses
    return rend_bruto
}

function calcular_iof(calcular_rendimento_bruto){
    const valor_iof = calcular_rendimento_bruto * 0.05
    return valor_iof
}

function calcular_ir(tempo_invest_meses, calcular_rendimento_bruto){
    const tempo_dias = tempo_invest_meses * 30
    if (tempo_dias <= 180){
        const valor_ir = calcular_rendimento_bruto * (22.5/100)
        return valor_ir
    }else if (tempo_dias >= 181 && tempo_dias <= 360){
        const valor_ir = calcular_rendimento_bruto * (20/100)
        return valor_ir
    }else if (tempo_dias >= 361 && tempo_dias <= 720){
        const valor_ir = calcular_rendimento_bruto * (17.5/100)
        return valor_ir
    }else if (tempo_dias > 720){
        const valor_ir = calcular_rendimento_bruto * (15/100)
        return valor_ir
    }
}

main()