import { question } from "readline-sync";


function main(){
//Informações
    const valor_investimento = Number(question(" > Informe o valor do investimento ($)  : "))
    const taxa_rendimento = Number(question(" > Informe a taxa de rendimento ao mes (%) : "))
    const mes_inicio = Number(question(" > Informe o mes que realizou o investimento : "))
    const ano_inicio = Number(question(" > Infome o ano que realizou o investimeto : "))
    const mes_final = Number(question(" > Informe o mes de resgate : "))
    const ano_final = Number(question(" > Informe o ano de resgate : "))  
    const inflacao = Number(question(" > Informe a inflacao acumulada durante o investimento(%) : "))

//calculos
   const mes_dias1 = mes_inicio * 30
   const anos_dias1 = ano_inicio * 365 
   const soma1 = mes_dias1 + anos_dias1
   const mes_dias2 = mes_final * 30
   const anos_dias2 = ano_final * 365 
   const soma2 = mes_dias2 + anos_dias2
   const dias_final = soma2 - soma1
   const meses_final = dias_final / 30
   const calculo = juros_compostos(valor_investimento,taxa_rendimento,meses_final)
   const rendimento_bruto = calculo - valor_investimento
   const ir = calcular_ir(dias_final,rendimento_bruto)
   const iof = calcular_iof(dias_final,rendimento_bruto)
   const impostos = iof + ir
   const liquido = rendimento_bruto - impostos
   const total_a_sacar = valor_investimento + liquido
   const inflacionado = valor_investimento * (inflacao/100)
   const inflacionado2 = valor_investimento + inflacionado
   const ganho_real = total_a_sacar - inflacionado2

   //saida
   console.log("***** TRIBUTACAO RENDA FIXA *****")
   console.log(`> Valor do Investimento   : R$ ${valor_investimento}`)
   console.log(`> Taxa de rendimento      : ${taxa_rendimento}% a.m`)
   console.log(`> Investido em            : ${mes_inicio}/${ano_inicio}`)
   console.log(`> Realizado em            : ${mes_final}/${ano_final}`)
   console.log("-----------------------------------------------------")
   console.log(`> Rendimento Bruto        : R$ ${rendimento_bruto.toFixed(2)} `)
   console.log(`> IOF                     : R$ ${iof.toFixed(2)}`)
   console.log(`> IR                      : R$ ${ir.toFixed(2)}`)
   console.log(`> Total de impostos       : R$ ${impostos.toFixed(2)} `)
   console.log("-----------------------------------------------------")
   console.log(`> Rendimento Liquido      : R$ ${liquido.toFixed(2)}`)
   console.log("-----------------------------------------------------")
   console.log(`> Valor total a sacar     : R$ ${total_a_sacar.toFixed(2)}`)
   console.log("-----------------------------------------------------")
   console.log(`> Inflacao do Periodo     : ${inflacao}%`)
   console.log(`> Ganho Real             : R$ ${ganho_real.toFixed(2)}`)


}


main()


function juros_compostos(valor_investimento,taxa_rendimento,meses_final){
    const montante = (valor_investimento * ((1 + taxa_rendimento/100)**(meses_final)))
    return montante
}



function calcular_ir(dias_final,rendimento_bruto){
    if(dias_final <= 180 ){
        return rendimento_bruto * (22.5/100)
    }else if(dias_final > 180 && dias_final <= 360){
        return rendimento_bruto * (20/100)
    }else if(dias_final > 360 && dias_final <= 720){
        return rendimento_bruto * (17.5/100)
    }else if( dias_final > 720){
        return dias_final * (15/100)
    }

}



function  calcular_iof(dias_final,rendimento_bruto){
    if(dias_final <= 30){
        return rendimento_bruto * (5/100)
    }else { return 0}
}
