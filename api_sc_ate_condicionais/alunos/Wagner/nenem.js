import { question } from 'readline-sync'

function main(){
    //1. Pedir nome e qtd de acertos
    const nome = obter_texto("Qual o seu nome:")
    const redacao = obter_numero("Nota redação (0 a 1000): ")
    const linguagens = obter_numero("Qtd acertos Linguagens: ")
    const matematica = obter_numero("Qtd acertos Matemática: ")
    const humanas = obter_numero("Qtd de acertos Humanas: ")
    const natureza = obter_numero("Qtd acertos Natureza: ")
    //2. Pedir pesos
    const pesoRedacao = obter_numero("Peso Redação: ")
    const pesoLinguagens = obter_numero("Peso Linguagens: ")
    const pesoMatematica = obter_numero("Peso Matemática: ")
    const pesoHumanas = obter_numero("Peso Humanas: ")
    const pesoNatureza = obter_numero("PesoNatureza: ")

    //3. Calcular média simples 
    const acertos = linguagens + matematica + humanas + natureza
    const nota = CalcularProporcaoEmMil(45, acertos)
    const mediaSimples = (nota + redacao) / 2
    

    //3.Calcular notas em proporcão de 1000
    const notaRedacao = redacao
    const notaLinguagens = CalcularProporcaoEmMil(45,linguagens)
    const notaMatematica = CalcularProporcaoEmMil(45,matematica)
    const notaHumanas = CalcularProporcaoEmMil(45,humanas)
    const notaNatureza = CalcularProporcaoEmMil(45,natureza)
    


    //4. Soma pesos
    const somaPesos = pesoRedacao + pesoLinguagens + pesoMatematica + pesoHumanas + pesoNatureza
    
    //5. Notas com pesos
    const notaComPesoRedacao = notaRedacao * pesoRedacao
    const notaComPesoLinguagens = notaLinguagens * pesoLinguagens
    const notaComPesoMatematica = notaMatematica * pesoMatematica
    const notaComPesoHumanas = notaHumanas * pesoHumanas
    const notaComPesoNatureza = notaNatureza * pesoNatureza
    

  

    //6. Media Ponderada
    const mediaPonderada = (notaComPesoRedacao + notaComPesoLinguagens + notaComPesoMatematica + notaComPesoHumanas + notaComPesoNatureza) / somaPesos
    
    const mediaFinal = mediaPonderada
    //7. Mostrar dados
    mostrar_texto("********** SERIGATE NENEM **********")
    mostrar_texto(`Aluno : ${nome}`)
    mostrar_texto("--------------------------------------------------------")
    mostrar_texto(`Redação    : ${redacao} (peso: ${pesoRedacao})`)
    mostrar_texto(`Redação    : ${notaLinguagens} (peso: ${pesoLinguagens})`)
    mostrar_texto(`Redação    : ${notaMatematica} (peso: ${pesoMatematica})`)
    mostrar_texto(`Redação    : ${notaHumanas} (peso: ${pesoHumanas})`)
    mostrar_texto(`Redação    : ${notaNatureza} (peso: ${pesoNatureza})`)
    mostrar_texto("--------------------------------------------------------")
    mostrar_texto(`Média Simples: ${mediaSimples}\n`)
    mostrar_texto(`>>>>>>>>>> Resultado >>>>>>>>>>`)
    mostrar_texto(`Média Ponderada: ${mediaPonderada}`)
    
    //7. Verificar Classificação
    if (mediaFinal > 0 && mediaFinal < 450){
        mostrar_texto("Classificação: INSUFICIENTE")
        mostrar_texto("Observação: Impedido de ir para a universidade. Deverá fazer mais um ano de ensino de reforço")
    }else if(mediaFinal > 450 && mediaFinal < 650){
        mostrar_texto("Classificação: SUFICIENTE")
        mostrar_texto("Observação: Poderá conseguir uma vaga. Porém em curso/ Universidade com baixa procura (nota de corte baixa)")

    }else if(mediaFinal > 650 && mediaFinal < 750){
        mostrar_texto("Classificacação: MUITO BOM")
        mostrar_texto("Observação: Poderá pleitar vagas em bons cursos/Universidades (nota de cortew alta)")
    }else{
        mostrar_texto("Classificação: EXCELENTE")
        mostrar_texto("Observação: Poderá escolher qualquer curso em qualquer universidade de Serigate ")
    }



   

    

}
main()

function obter_texto(mensagem){
    return question(mensagem)
}
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

function CalcularProporcaoEmMil(total, acertos){
    return (acertos / total) * 1000
}