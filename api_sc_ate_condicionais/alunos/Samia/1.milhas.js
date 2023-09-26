import { question } from "readline-sync"

function main(){
    //Entrada
    const qtd_milhas = obter_numero('Informe a quantidade de milhas que deseja comprar (valores múltiplos de 1000): ')
    if (qtd_milhas % 1000 != 0){
        const msg = console.log('Só é possível comprar milheiros, ou seja, insira valores múltiplos de 1000!')
        return msg
    }
    const percentual_desconto = obter_numero('Informe o valor percentual do desconto (0 a 80%): ')
    if(percentual_desconto < 0 || percentual_desconto > 80){
        const msg = console.log('Valor fora da faixa permitida!')
        return msg
    }
    const percentual_bonus = obter_numero('Informe o valor percentual do bônus (0 a 300%): ')
    if(percentual_bonus < 0 || percentual_bonus > 300){
        const msg = console.log('Valor fora da faixa permitida!')
        return msg
    }

    //Processamento
    const valor_referencia = 70
    const valor_com_desc = valor_com_desconto(percentual_desconto, valor_referencia)
    const milhas_bonus = calcular_milhas_bonus(percentual_bonus, qtd_milhas)
    const milhas_totais = qtd_milhas + milhas_bonus
    const valor_total = valor_com_desc
    const valor_final_milheiros = valor_total / (milhas_totais / 1000)
    const [classicacao, recomendacao] = resultado(valor_final_milheiros)

    //Saída
    console.log('\n********** COMPRA DE MILHAS **********')
    console.log(`Valor Ref.         : R$ ${valor_referencia.toFixed(2)}/milheiro`)
    console.log(`Milhas Comprar     : ${qtd_milhas}`)
    console.log(`\nDesconto         : ${percentual_desconto}%`)
    console.log(`Valor com desc.  : R$ ${valor_com_desc.toFixed(2)}/milheiro`)
    console.log(`\nBônus            : ${percentual_bonus}%`)
    console.log(`Milhas de Bônus  : ${milhas_bonus}`)
    console.log(`\nMilhas Totais    : ${milhas_totais}`)
    console.log(`Valor Total      : R$ ${valor_total.toFixed(2)}`)
    console.log(`\nVALOR FINAL MILHEIRO: >> R$ ${valor_final_milheiros.toFixed(2)} <<`)
    console.log(`Classificação da Compra: ${classicacao} :)`)
    console.log(`Recomendação: ${recomendacao}\n`)

}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function valor_com_desconto(percentual_desconto, valor_referencia){
    const valor_desc = ((100 - percentual_desconto)/ 100) * valor_referencia
    return valor_desc
}

function calcular_milhas_bonus(percentual_bonus, qtd_milhas){
    const bonus_milhas = (percentual_bonus / 100) * qtd_milhas
    return bonus_milhas
}

function resultado(valor_final_milheiros){
    if (valor_final_milheiros <= 15.4){
        const classif = 'EXCELENTE'
        const recomend = 'Compre!'
        return [classif, recomend]
    }else if (valor_final_milheiros > 15.40 && valor_final_milheiros < 17.50){
        const classif = 'BOA'
        const recomend = 'Ainda vale a pena, compre também caso tenha uma viagem próxima.'
        return [classif, recomend]
    }else if (valor_final_milheiros > 17.50 && valor_final_milheiros <= 35){
        const classif = 'RUIM'
        const recomend = 'Só compre se for pouca quantidade e urgentes.'
        return [classif, recomend]
    }else if (valor_final_milheiros > 35){
        const classif = 'PÉSSIMA'
        const recomend = 'Não compre! Avalie comprar a passagem mesmo, e em "ultimíssimo caso" compre somente para completar um dado alvo'
        return [classif, recomend]
    }
}

main()