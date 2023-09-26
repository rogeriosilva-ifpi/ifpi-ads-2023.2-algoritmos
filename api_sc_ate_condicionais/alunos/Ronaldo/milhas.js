import {question} from 'readline-sync'

function main(){
    
    //Entrada
    const milhas = Number(question('Quantas milhas comprou: '))
    const promocao = Number(question('Digite o valor de desconto promocao(%): '))
    const bonus = Number(question('Digite o bonus que ganhou(%): '))
    
    //Processamento
    const valor_ref = 70
    const desconto = valor_ref - ((valor_ref*promocao)/100)
    const milhas_bonus = (milhas * (bonus / 100))
    const milhas_totais = milhas + milhas_bonus
    const valor_final_milheiro = ((desconto / milhas_totais)*1000)
    const classificacao = verificar_classificacao_compra(valor_final_milheiro)
    const recomendacao = verificar_recomendacao(valor_final_milheiro)

    //Saida
    console.log(`********** COMPRA DE MILHAS **********`)
    console.log(`Valor Referencia  : R$ 70,00/milheiro`)
    console.log(`Milhas Comprar    : 1000`)
    console.log(`______________________________________`)
    console.log(`Desconto          : ${promocao}%`)
    console.log(`Valor Com Desconto: ${desconto},00/milheiro`)
    console.log(`______________________________________`)
    console.log(`Bônus             : ${bonus}%`)
    console.log(`Milhas de Bônus   : ${milhas_bonus}`)
    console.log(`______________________________________`)
    console.log(`Milhas Totais     : ${milhas_totais}`)
    console.log(`Valor Total       : ${desconto},00`)
    console.log(`VALOR FINAL MILHEIRO >> ${valor_final_milheiro},00 <<`)
    console.log(`Classificação da Compra: ${classificacao}`)
    console.log(`Recomendação da Compra: ${recomendacao}`)
}

function verificar_classificacao_compra(valor_final_milheiro){
    if(valor_final_milheiro < 15.4){
        return 'EXCELENTE!'
    }else if(valor_final_milheiro > 15.4 && valor_final_milheiro < 17.5){
        return 'BOA!'
    }else if(valor_final_milheiro > 17.5 && valor_final_milheiro < 35){
        return 'RUIM!'
    }else{
        return 'PÉSSIMA!'
    }
}

function verificar_recomendacao(valor_final_milheiro){
    if(valor_final_milheiro < 15.4){
        return 'COMPRE!'
    }else if(valor_final_milheiro > 15.4 && valor_final_milheiro < 17.5){
        return 'COMPRE CASO TENHA UMA VIAGEM PRÓXIMA!'
    }else if(valor_final_milheiro > 17.5 && valor_final_milheiro < 35){
        return 'SÓ COMPRE SE FOR POUCAS QUANTIDADES E URGENTES!'
    }else{
        return 'COMPRE SOMENTE PARA COMPLETAR UM DADO ALVO!'
    }
}
main()