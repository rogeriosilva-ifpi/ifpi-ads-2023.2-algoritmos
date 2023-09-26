import { question } from "readline-sync";


function main(){
//informações
    const nome = question(" > Informe o seu nome : ")
    const nota1 = Number(question(" > Informe sua nota na area 1 ( de 0 a 45) : "))
    const nota2 = Number(question(" > Informe sua nota na area 2 ( de 0 a 45 ) : "))
    const nota3 = Number(question(" > Informe sua nota na area 3 ( de 0 a 45 ) : "))
    const nota4 = Number(question(" > Informe sua nota na area 4 ( de 0 a 45 ): "))
    const nota5 = Number(question(" > Informe sua nota na area 5 ( de 0 a 1000) : "))
    const peso1 = Number(question(" > Informe o valor do peso 1 : "))
    const peso2 = Number(question(" > Informe o valor do peso 2 : "))
    const peso3 = Number(question(" > Informe o valor do peso 3 : "))
    const peso4 = Number(question(" > Informe o valor do peso 4 : "))
    const peso5 = Number(question(" > Informe o valor do peso 5 : "))
    
    //calculos

    const notaum = converter_nota(nota1)
    const notadois = converter_nota(nota2)
    const notatres = converter_nota(nota3)
    const notaquatro = converter_nota(nota4)

    const media_simples = calculo_simples(notaum,notadois,notatres,notaquatro,nota5)
    const nota_final = calcular_nota_final(notaum,notadois,notatres,notaquatro,nota5,peso1,peso2,peso3,peso4,peso5)
    const classificao = calcular_classificacao(nota_final)
    const observacao = calcular_observacao(nota_final)

    //saida

    console.log(" ********** SERIGATE NENEM ********** ")
    console.log(`> Aluno           : ${nome}`)
    console.log("--------------------------------------")
    console.log(`> Redacao         : ${nota5} ( Peso : ${peso5})`)
    console.log(`> Linguagens      : ${notaum} ( Peso : ${peso1})`)
    console.log(`> Matematica      : ${notatres} ( Peso : ${peso3})`)
    console.log(`> Humanas         : ${notadois} ( Peso : ${peso2})`)
    console.log(`> Natureza        : ${notaquatro} ( Peso : ${peso4})`)
    console.log("--------------------------------------")
    console.log(`> Media Simples   : ${media_simples.toFixed(2)}`)
    console.log("                                                      ")
    console.log(">>>>>>>>>> RESULTADO <<<<<<<<<<")
    console.log(`> Media Ponderada : ${nota_final}`)
    console.log(`> Classificacao   : ${classificao}`)
    console.log(`> Observacao : ${observacao}`)
}



main()


function converter_nota(nota){

    const resultad0 = (1000 * nota)/45
    return resultad0
}


 function calcular_nota_final(notaum,notadois,notatres,notaquatro,nota5,peso1,peso2,peso3,peso4,peso5){

        const pronto = ((notaum * peso1) + (notadois * peso2) + (notatres * peso3) + (notaquatro * peso4) + (nota5 * peso5)) / (peso1 + peso2 + peso3 + peso4 + peso5)
        return pronto
 }


 function calcular_classificacao(nota_final){

    if (nota_final >= 0 && nota_final < 450){
        return `INSUFICIENTE`
    }else if(nota_final >= 450 && nota_final < 650 ){
        return `SUFICIENTE`
    }else if(nota_final >= 650 && nota_final < 750){
        return `MUITO BOM`
    }else if(nota_final >= 750){
        return `EXCELENTE`
    }
}




function calcular_observacao(nota_final){
    if (nota_final >= 0 && nota_final < 450){
        return `Impedido de ir para a Universidade. Devera fazer mais um ano de ensino de reforco.`
    }else if(nota_final >= 450 && nota_final < 650 ){
        return `Podera conseguir uma vaga. Porem em Curso/Universidade com baixa procura.( nota de corte baixa )`
    }else if(nota_final >= 650 && nota_final < 750){
        return `Podera pleitear vaga em Bons Cursos/Universidades.( Nota de corte alta )`
    }else if(nota_final >= 750){
        return `Podera escolher qualquer curso em qualquer universidade de Serigate.`
    }}



function calculo_simples(notaum,notadois,notatres,notaquatro,nota5){
    const resvltad0 = (notaum + notadois + notatres + notaquatro + nota5)/5
    return resvltad0
}