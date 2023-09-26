import {question} from "readline-sync"

function main(){

    const nome = question('Digite o nome do aluno: ')

    const nota_redacao = Number(question("Nota da prova de Redação: "))
    const nota_linguagens = Number(question("Nota da prova de Linguagens:"))
    const nota_matematica = Number(question("Nota da prova de Matemática:"))
    const nota_humanas = Number(question("Nota da prova de Humanas:"))
    const nota_natureza = Number(quaestion("Nota da prova de Natureza:"))

    const peso_redacao = Number(question("Peso da prova de Redação:"))
    const peso_linguagens = Number(question("Peso da prova de Linguagens:"))
    const peso_matematica = Number(question("Peso da prova de Matemática:"))
    const peso_humanas = Number(question("Peso da prova de Humanas:"))
    const peso_natureza = Number(question("Peso da prova de Natureza:"))

    const soma_pesos = (peso_redacao + peso_linguagens + peso_matematica + peso_humanas + peso_natureza)
 
    const media = calcular_media_ponderada

    const classificacao_do_aluno = classificacao

    const observacao_sobre_o_aluno = observacao





    console.log('********** SERIGATE NENEM ************')

    console.log(`Aluno           : ${nome}`)

    console.log(`----------------------------------------`)

    console.log(`Redação            : ${nota_redacao}, (Peso: ${peso_redacao})`)
    console.log(`Linguagens            : ${nota_linguagens}, (Peso: ${peso_linguagens})`)
    console.log(`Matemática            : ${nota_matematica}, (Peso: ${peso_matematica})`)
    console.log(`Humanas            : ${nota_humanas}, (Peso: ${peso_humanas})`)
    console.log(`Natureza            : ${nota_natureza}, (Peso: ${peso_natureza})`)

    console.log(`----------------------------------------`)

    console.log(`Média                : ${media}`)



    console.log(`>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<`)
    console.log(`Média Ponderada: ${media}`)
    console.log(`Classificação: ${classificacao_do_aluno}`)
    console.log(`Observação: ${observacao}`)

    console.log(`----------------------------------------`)
}

main()

function calcular_media_ponderada(){

const media = (nota_redacao*peso_redacao + nota_linguagens*peso_linguagens + nota_matematica*peso_matematica + nota_humanas*peso_humanas + nota_natureza*peso_natureza) / soma_pesos

}

return()


function classificacao(){

else (media = 0 < 450){
    console.log(`INSUFICIENTE - O aluno ${nome} está impedido de ir para a Universidade.`)
    
} if (media = 450 < 650){
    console.log(`SUFICIENTE - O aluno ${nome} poderá conseguir uma vaga.`)

} else if (media = 650 < 750){
    console.log(`MUITO BOM - O aluno ${nome} poderá pleitear vaga em bons cursos/Universidades.`)

} else if (media = 750 <= 1000){
    console.log(`EXCELENTE - O aluno ${nome} poderá escolher qualquer curso em qualquer Universidade`)

}
}
return()

function observacao(){

    else (media = 0 < 450){
        console.log(`O aluno ${nome} está impedido de ir para a Universidade.`)
        
    } if (media = 450 < 650){
        console.log(`O aluno ${nome} poderá conseguir uma vaga.`)
    
    } else if (media = 650 < 750){
        console.log(`O aluno ${nome} poderá pleitear vaga em bons cursos/Universidades.`)
    
    } else if (media = 750 <= 1000){
        console.log(`O aluno ${nome} poderá escolher qualquer curso em qualquer Universidade`)
    
    }
}
    
return()