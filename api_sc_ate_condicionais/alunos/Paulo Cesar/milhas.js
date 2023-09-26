import { question } from "readline-sync";

function main(){
//informações


const milhas = Number(question(" > Informe quantas milhas deseja comprar ( só é possivel pedir multiplos de 1000) : "))
const desconsto = Number(question(" > Informe o valor do desconto que deseja ( de 0 a 80%) : "))
const bonus = Number(question(" > Informe o bonus desejado : "))

//calculos 
const e_milheiro = calcular_milho(milhas)
const bonificacao = milhas * ( bonus/100)
const e_desconto = calcular_desc(desconsto)
const barato = 70 * (desconsto/100)
const desconto  = 70 - desconsto
const milhas_totais = milhas + bonificacao
const resto = milhas_totais / 1000
const valor = desconto / resto
const classificacao = calcular_classificacao(valor)

//saida
console.log(" ********* COMPRA DE MILHAS **********") 
console.log("> Valor Referencial        : R$ 70,00")
console.log(`> Milhas a Comprar         : ${milhas}`)
console.log(`> Desconto                 : ${desconsto}%`)
console.log(`> Valor com desconto       : R$ ${desconto}/milheiro`)
console.log(`> Bonus                    : ${bonus}%`)
console.log(`> Milhas de bonus          : ${bonificacao}`)
console.log(`> Milhas Totais            : ${milhas_totais}`)
console.log(`> Valor Total              : R$ ${desconto}`)
console.log(`> Valor final do milheiro  : R$ ${valor}`)
console.log(`> Classificacao            : ${classificacao}`)

}


main()


function calcular_milho(milhas){
    if(milhas % 1000 === 0 ){
        return true
    }else {return false}
}


function calcular_desc(desconsto){
    if(desconsto > 0 && desconsto <= 80){
        return true
    }else{return false}
}


function calcular_classificacao(valor){
    if ( valor >= 35){
        return  `PESSIMO`
    }else if( valor >= 17.5 && valor < 35){
        return `RUIM`
    }else if(valor > 14 && valor < 17.5){
        return `BOA`
    }else if(valor > 0 && valor <= 14){
        return `EXCELENTE`
    }
}