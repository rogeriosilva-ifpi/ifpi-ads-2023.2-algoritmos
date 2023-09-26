import { question } from "readline-sync";

function main(){
    //entrada
    const milhas_a_comprar = Number(question('Quantas milhas deseja comprar (em multiplos de 1000) ? : '))
    const desconto_percentual = Number(question('Percentual de desconto (0 a 80%) : '))
    const bonus_de_milhas = Number(question('Bonus de milhas (0 a 300%) : '))

    //processamento
    if(validar_milhas === false){
        return 'Digite um valor multiplo de 1000'
    }
    else if(validar_desconto === false){
        return 'Digite um valor na faixa de 0 a 80 %'
    }
    else if(validar_bonus === false){
        return 'Digite um valor na faixa de 0 a 300 %'
    }

    const valor_padrao_milheiro = 70

    const desconto = calcular_desconto(desconto_percentual,valor_padrao_milheiro)
    const valor_com_desconto = valor_padrao_milheiro - desconto

    const milhas_de_bonus = calcular_milhas_de_bonus(milhas_a_comprar,bonus_de_milhas)
    const milhas_totais = milhas_a_comprar + milhas_de_bonus

    const valor_total = valor_com_desconto * (milhas_a_comprar / 1000)
    const valor_final_milheiro = valor_total / (milhas_totais/ 1000)

    const classificacao_compra = verificar_classificacao(valor_final_milheiro)
    const recomendacao = retornar_recomendacao(classificacao_compra)


    //saida
    console.log(`****** COMPRA DE MILHAS *******`)
    console.log(`Valor Ref.         : ${valor_padrao_milheiro.toFixed(2)} R$ `)
    console.log(`Milhas a comprar   : ${milhas_a_comprar}\n`)
    console.log(`Desconto           : ${desconto_percentual}%`)
    console.log(`Valor com desconto : ${valor_com_desconto.toFixed(2)} R$ \n`)
    console.log(`Bônus              : ${bonus_de_milhas}`)
    console.log(`Milhas de Bônus    : ${milhas_de_bonus}\n`)
    console.log(`Milhas Totais      : ${milhas_totais}`)
    console.log(`Valor Total        : ${valor_total.toFixed(2)}\n`)
    console.log(`VALOR FINAL MILHEIRO    : >>  ${valor_final_milheiro.toFixed(2)} R$ << \n`)
    console.log(`Classificação da compra : ${classificacao_compra}`)
    console.log(`Recomendação            : ${recomendacao}`)


}

function validar_milhas(milhas){
    if (milhas % 1000 === 0){
        return true
    }
    else{
        return false
    }
}

function validar_desconto(desconto_percentual){
    if (desconto_percentual >= 0 && desconto_percentual <= 80){
        return true
    }
    else{
        return false
    }
}

function validar_bonus(bonus_de_milhas){
    if (bonus_de_milhas >= 0 && bonus_de_milhas <= 300){
        return true
    }
    else{
        return false
    }
}

function calcular_desconto(desconto_percentual,valor_padrao_milheiro){
    return valor_padrao_milheiro * (desconto_percentual / 100)
}

function calcular_milhas_de_bonus(milhas_a_comprar,bonus_de_milhas){
    return milhas_a_comprar * (bonus_de_milhas / 100)
}

function verificar_classificacao(valor_final){
    if(valor_final <= 15.4){
        return `EXCELENTE`
    }
    else if(valor_final <= 17.5){
        return `BOA`
    }
    else if(valor_final > 35){
        return `PESSIMA`
    }
    else{
        return `RUIM`
    }
}

function retornar_recomendacao(classificacao){
    if (classificacao === `EXCELENTE`){
        return 'Compre !!'
    }
    else if (classificacao === `BOA`){
        return 'Ainda vale a pena, compre tambem se caso tenha uma viagem proxima. '
    }
    else if (classificacao === `RUIM`){
        return 'So compre se for pouca quantidade e urgentes. '
    }
    else if (classificacao === `PESSIMA`){
        return 'Não compre ! Avalie comprar a passagem mesmo, e em ultimissimo caso compre somente para completar um dado alvo.'
    }
}

main()