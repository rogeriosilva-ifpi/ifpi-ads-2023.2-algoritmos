import { question } from "readline-sync";

function main(){
    const valor_refencia_milhas = 70
    const qtd_milhas = Number(question('Qtd. Milhas: '))
    const percentual_desconto = Number(question('Percentual de Desconto(0% - 80%): '))
    const percentual_bonus = Number(question('Bonus(0% - 300%): '))

    const valor_com_desconto = calcular_desconto(percentual_desconto, valor_refencia_milhas)
    const milhas_bonus = calcular_bonus(qtd_milhas, percentual_bonus)
    const total_milhas = qtd_milhas + milhas_bonus
    const valor_final_milheiro = valor_com_desconto / (total_milhas / 1000)
    const classificacao = obter_classificacao(valor_final_milheiro)
    const recomendacao = obter_recomendacao(classificacao)

    if(!eh_multiplos_mil(qtd_milhas) || !autorizar_desconto(percentual_desconto) || !liberar_bonus(percentual_bonus)){
        if(!eh_multiplos_mil(qtd_milhas)){
            console.log('>>> Só é possível comprar milhas múltiplos de mil')
        }
        if(!autorizar_desconto(percentual_desconto)){
            console.log('>>> Percentual de desconto fora da faixa')
        }
        if(!liberar_bonus(percentual_bonus)){
            console.log('>>> Percentual de bônus fora da faixa')
        }
    }else{
        console.log('******* COMPRAS DE MILHAS *******')
        console.log(`Valor Ref.     : R$ 70.00/milheiro`)
        console.log(`Milhas Comprar : ${qtd_milhas}\n`)
        console.log(`Desconto       : ${percentual_desconto}%`)
        console.log(`Valor com desc.: R$ ${valor_com_desconto.toFixed(2)}/milheiro\n`)
        console.log(`Bônus          : ${percentual_bonus}%`)
        console.log(`Milhas de Bônus: ${milhas_bonus}\n`)
        console.log(`Milhas Totais  : ${total_milhas}`)
        console.log(`Valor Total    : R$ ${valor_com_desconto.toFixed(2)}\n`)
        console.log(`VALOR FINAL MILHEIRO: >> R$ ${valor_final_milheiro.toFixed(2)} <<`)
        console.log(`Classificação da Compra: ${classificacao}`)
        console.log(`Recomendação: ${recomendacao}`)
    }
}

function obter_classificacao(valor_milha){
    if(valor_milha <= 15.4){
        return `EXCELENTE :D`
    }else if(valor_milha > 15.40 && valor_milha <= 17.50){
        return `BOA :)`
    }else if(valor_milha > 17.50 && valor_milha <= 35){
        return `RUIM :/`
    }else{
        return `PÉSSIMA :(`
    }
}

function obter_recomendacao(classificacao){
    if(classificacao === 'EXCELENTE :D'){
        return 'Pode Comprar'
    }else if(classificacao === 'BOA :)'){
        return `Ainda vale a pena! Compre, caso tenha uma viagem próxima`
    }else if(classificacao === 'RUIM :/'){
        return 'Só compre se for poucas unidades e urgentes'
    }else{
        return 'Não Compre'
    }
}

function eh_multiplos_mil(num){
    return num % 1000 === 0
}

function autorizar_desconto(percentual_desconto){
    return percentual_desconto >= 0 && percentual_desconto <= 80
}

function liberar_bonus(percentual_bonus){
    return percentual_bonus >= 0 && percentual_bonus <= 300
}

function calcular_desconto(taxa, valor){
    return valor - calcular_porcentagem(valor, taxa)
}

function calcular_bonus(qtd_milhas, percentual_bonus){
    return calcular_porcentagem(qtd_milhas, percentual_bonus)
}

function calcular_porcentagem(valor, percentual){
    return (percentual * valor) / 100
}

main()
