import { question } from "readline-sync";

function main(){

    const valor_investido = Number(question('Valor Investido: '))
    const mes_investimento = Number(question('Mes do investimento: '))
    const ano_investimento = Number(question('Ano do investimento: '))
    const mes_resgate = Number(question('Mes do resgate: '))
    const ano_resgate = Number(question('Ano do resgate: '))
    const taxa = Number(question('Taxa: '))

    const juros_composto = calcular_juros_composto(taxa, valor_investido, tempo)
    const tempo_ano = calcular_tempo_investimento(ano_investimento)
    
    const valor_total_sacar = valor_investido + tempo
    const percentual_ganho = taxa * tempo_ano

}

function calcular_tempo_investimento(ano_investimento){
    const tempo = ano_investimento - 2023
    return tempo

}

function calcular_juros_composto(c, i, t){
    const juros = c * (1 + (i/100))**t
}

function verificar_ir(tempo_ano){

    if (tempo_ano < 180){
        return          
    }
}

main()