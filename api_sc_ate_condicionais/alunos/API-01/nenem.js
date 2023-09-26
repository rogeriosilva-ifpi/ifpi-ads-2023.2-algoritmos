import { question } from "readline-sync";

function main(){

    const nome = question("Digite seu nome: ")
    const nota_1 = Number(question("Nota 1: "))
    const nota_2 = Number(question("Nota 2: "))
    const nota_3 = Number(question("Nota 3: "))
    const nota_4 = Number(question("Nota 4: "))
    const nota_5 = Number(question("Nota 5: "))
    const peso_1 = Number(question("Peso 1: "))
    const peso_2 = Number(question("Peso 2: "))
    const peso_3 = Number(question("Peso 3: "))
    const peso_4 = Number(question("Peso 4: "))
    const peso_5 = Number(question("Peso 5: "))

    const media_ponderada = calcular_media_ponderada(nota_1,nota_2, nota_3, nota_4, nota_5, peso_1, peso_2, peso_3, peso_4, peso_5)
    const media_simples = calcular_media_simples(nota_1,nota_2, nota_3, nota_4, nota_5, peso_1, peso_2, peso_3, peso_4, peso_5)
    const classificacao = mostrar_classificacao(media_ponderada)

    console.log(' ********** SERIGATE NENEM ********** ')
    console.log(`Aluno              : ${nome}`)
    console.log('------------------------------------------------')
    console.log(`Redação            : ${nota_1} (peso: ${peso_1})`)
    console.log(`Linguagem          : ${nota_2} (peso: ${peso_2})`)
    console.log(`Matemática         : ${nota_3} (peso: ${peso_3})`)
    console.log(`Humanas            : ${nota_4} (peso: ${peso_4})`)
    console.log(`Natureza           : ${nota_5} (peso: ${peso_5})`)
    console.log("------------------------------------------------")
    console.log(`Media Simples      : ${media_simples}`)
    console.log(`>>>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<<<<<<<`)
    console.log(`Média Ponderada    : ${media_ponderada}`)
    console.log(`Classificação      : ${classificacao}`)



}

function calcular_media_simples(nota_1,nota_2, nota_3, nota_4, nota_5, peso_1, peso_2, peso_3, peso_4, peso_5){

    const media_simples = nota_1 + nota_2 + nota_3 + nota_4 + nota_5 / 5
        return media_simples
    
}

function calcular_media_ponderada(nota_1,nota_2, nota_3, nota_4, nota_5, peso_1, peso_2, peso_3, peso_4, peso_5){

    const media_ponderada =nota_1 * peso_1 + nota_2 * peso_2 + nota_3 * peso_3 + nota_4 * peso_4 + nota_5 * peso_5 / peso_1 + peso_2 + peso_3 + peso_4 + peso_5
        return media
    
}

function mostrar_classificacao(media_ponderada){

    if(media_ponderada < 450){
        return "INSUFICIENTE"
    }else if (media_ponderada > 450 && media_ponderada < 650){
        return "SUFICIENTE"
    }else if (media_ponderada > 750 && media_ponderada < 750){
    return "MUITO BOM"
    }else if (media_ponderada > 750 ){
        return "EXCELENTE"
    }



}
main()