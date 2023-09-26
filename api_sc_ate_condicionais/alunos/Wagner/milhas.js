import { question } from 'readline-sync'

function main(){
    //0. Valor do Milheiro
    const precoMilheiro = 70

    //1. Pedir ao usuário quantidade de milhas deseja comprar
    const qtd_milhas = obter_numero("Quantas milhas deseja comprar (Só é possível comprar em bloco de 1000): ")

    //2. Validar valor: blocos de 1000
    if (qtd_milhas % 1000 !== 0){
        mostrar_texto("Só é possível comprar múltiplos de 1000")
    }
    
    //3. Pedir Valor desconto
    const desconto = obter_numero('Qual o percentual de desconto (0 a 80%): ')

    //4. Validar desconto
    if (desconto > 80){
        mostrar_texto("Percentual fora da faixa de 0 e 80%")
    }
    //5. Pedir valor do bônus
    const valorBonus = obter_numero('Qual o valor do bônus (0 a 300%): ')

    //6. Calcular valor desconto
    const precoDesconto = calcularDesconto(precoMilheiro, desconto)

    // Valor a Pagar
    const qtd_milheiros = qtd_milhas / 1000
    const valorPagar = precoDesconto * qtd_milheiros

    //7. Milhas bônus
    const milhasBonus = calcularBonusMilhas(qtd_milhas, valorBonus)

    //8. Total de milhas
    const totalMilhas = milhasBonus + qtd_milhas
   




    //? Mostrar dados
    mostrar_texto("********** COMPRA DE MILHAS **********")
    mostrar_texto(`Valor de ref.      : R${precoMilheiro}/milheiro`)
    mostrar_texto(`Milhas a comprar   : ${qtd_milhas} \n`)
    mostrar_texto(`Desconto           : ${desconto}%           `)
    mostrar_texto(`Valor com desconto : R$${precoDesconto}\n`)
    mostrar_texto(`Bônus              : ${valorBonus} `)
    mostrar_texto(`Milhas de bônus    : ${milhasBonus} \n`)
    mostrar_texto(`Milhas totais      : ${totalMilhas} `)
    mostrar_texto(`Valor Total        : R$${valorPagar}  `)

}
main()

function obter_numero(mensagem){
    return Number(question(mensagem))
}

function mostrar_texto(texto){
    return console.log(texto)
}

function calcularDesconto(valor, percentual){
    const desconto = valor * (percentual/100)
    return desconto
}

function calcularBonusMilhas(valor, percentual){
    return calcularDesconto(valor, percentual)
}