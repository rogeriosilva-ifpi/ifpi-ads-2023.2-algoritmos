import {question} from 'readline-sync'

function main(){
    //Entrada
    const valor_investido = Number(question('Digite o valor investido: '))
    const taxa_rendimento = Number(question('Digite a taxa de rendimento a.m: '))
    const mes_investimento = Number(question('Digite o mes em que o valor foi ivestido: '))
    const ano_investimento = Number(question('Digite o ano em que o valor foi ivestido: '))
    const mes_resgate = Number(question('Digite o mes de resgate do investimento: '))
    const ano_resgate = Number(question('Digite o ano de resgate do investimento: '))

    //Processamento
    

    //Saida
    console.log(`********** TRIBUTAÇÂO RENDA FIXA **********`)
    console.log(`Valor Investimento: R$${valor_investido}`)
    console.log(`Taxa de Rendimento: R$${taxa_rendimento}`)
    console.log(`Investido em      : R$${mes_investimento}/${ano_investimento}`)
    console.log(`Realizado em      : R$${mes_resgate}/${ano_resgate}`)
    console.log(`___________________________________________`)
}