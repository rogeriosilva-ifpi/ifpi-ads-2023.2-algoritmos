import { question } from "readline-sync"

function main() {
    const valor_investido = Number(question('Valor: '))
    const juros  = Number(question('Juros(até 1%): '))
    const mes_ano_entrada = Number(question('Mes e Ano de Entrada(00/0000): ')).split('/').map(Number)
    const mes_ano_saida = question('Mes e Ano de Saida(00/0000): ').split('/').map(Number)

    const tempo = calcular_tempo_investido(mes_ano_entrada, mes_ano_saida)


    console.log(`****** TRIBUTAÇÃO RENDA FIXA ******`)
    console.log(`Valor Investimento: ${valor_investido}`)
    console.log(`Taxa de Rendimento: ${juros}% a.m`)
    console.log(`Investido em      : ${mes_ano_entrada}`)
    console.log(`Realizado em      : ${mes_ano_saida}`)
    console.log(`-----------------------------------`)
    console.log(`Rendimento Bruto  : `)
    console.log(`IOF               : `)
    console.log(`IR                : `)
    console.log(`Total Impostos    : `)
    console.log(`-----------------------------------`)
    console.log(`Rendimento Líquido: `)
    console.log(`Rendimento Líquido: %`)
    console.log(`-----------------------------------`)
    console.log(`Valor Total Sacar : `)
    console.log(`-----------------------------------`)
    console.log(`Inflação Período  : `)
    console.log(`Ganho Real        : `)
    console.log(`-----------------------------------`)

}

main()