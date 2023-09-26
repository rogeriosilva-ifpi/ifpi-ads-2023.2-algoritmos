//01.milhas

import {question} from 'readline-sync'

function main(){
    //cabeçalho
    console.log('---------- Simulador Milhas-----------')
    const nome = question('Qual seu nome?')
    console.log(`Muito bem ${nome}, preencha com a suas informações: `)

    //Entrada- INFOS E VERIFICAR
    const qtd_milhas = Number(question('\nInforme a quantidade de milhas que deseja comprar: '))
    const comprar_milhas= verificar_milhas(qtd_milhas)
    console.log(comprar_milhas)

    const percentual = Number(question('\nInforme o valor percentual do desconto: '))
    const porcentagem = verificar_percent(percentual)
    console.log(porcentagem)

    const bonus = Number(question('\nInforme o valor do bônus da promoção: '))
    const promo_bonus = verificar_bonus(bonus)
    console.log(promo_bonus)

   
    //Processamento
    const desconto = 70 - (70 * (percentual/100))
    const milhas_bonus = (bonus/100) * qtd_milhas
    const milhas_totais = qtd_milhas + milhas_bonus

    const valor_final_milheiro = calcular_valor_final(desconto, milhas_totais)
    const classificacao = classificar_compra(valor_final_milheiro)
    const recomendacao = recomendar_compra(valor_final_milheiro)

    //Saída
    console.log('\n********** COMPRA DE MILHAS **********')
    console.log(`Valor Ref.      : R$70,00`)
    console.log(`Milhas Comprar  : ${qtd_milhas}`)
    console.log(`\nDesconto       : ${percentual}%`)
    console.log(`Valor com desc  : R$${desconto}`)
    console.log(`\nBônus         : ${bonus}%`)
    console.log(`Milhas de bônus : ${milhas_bonus}`)
    console.log(`\nMilhas Totais  : ${milhas_totais}`)
    console.log(`Valor total     : R$${desconto}`)
    console.log(`\nVALOR FINAL MILHEIRO: >>R$${valor_final_milheiro.toFixed(2)}<<`)
    console.log(`Classificação da Compra: ${classificacao}`)
    console.log(`Recomendação da Compra: ${recomendacao}`)

    console.log(`\nObrigada por participar de nosso simulador, ${nome}!`)
    
}

function verificar_milhas(qtd_milhas){
    if(qtd_milhas === 1000){
        return`Quantidade aprovada!`
    } else if(qtd_milhas%1000 === 0){
        return`Quantidade aprovada!`
    } else if(qtd_milhas%1000 !==0){
        return`A quantidade precisa ser um múltipo de 1000!`
    }

}

function verificar_percent(percentual){
    if(percentual>80 || percentual<0){
        return `Percentual deve ser de 0 a 80%!`
    } else{
        return `Percentual aprovado!`
    }
}

function verificar_bonus(bonus){
    if(bonus>300 || bonus<0){
        return`Percentual deve ser de 0 a 300%!`
    } else {
        return`Percentual aprovado!`
    }
}

function calcular_valor_final(desconto, milhas_totais){
    const vf = (desconto/milhas_totais) * 1000
    return vf 
}

function classificar_compra(valor_final_milheiro){
    if(valor_final_milheiro <= 15.4 ){
        return`EXCELENTE!`
    } else if(valor_final_milheiro > 15.4 && valor_final_milheiro <= 17.5){
        return 'BOM! :)'
    } else if(valor_final_milheiro>17.5 && valor_final_milheiro <= 35){
        return 'RUIM :('
    } else if(valor_final_milheiro> 35){
        return 'PÉSSIMO !!!! '
    }
}

function recomendar_compra(valor_final_milheiro){
    if(valor_final_milheiro <= 15.4 ){
        return`Pode comprar!`
    } else if(valor_final_milheiro > 15.4 && valor_final_milheiro <= 17.5){
        return 'Pode comprar!'
    } else if(valor_final_milheiro>17.5 && valor_final_milheiro <= 35){
        return 'Evite comprar!'
    } else if(valor_final_milheiro> 35){
        return 'Não compre! '
    }
}

main()