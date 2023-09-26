import { question } from "readline-sync";

function main(){
    const nome_aluno = Number(question('Nome Aluno(a): '))

    const nota_redacao = Number(question('Nota Redação: '))
    const peso_redacao = Number(question('Peso: '))

    const nota_linguagens = Number(question('Nota Linguagens: '))
    const peso_linguagens = Number(question('Peso: '))

    const nota_matematica = Number(question('Nota Matematica: '))
    const peso_matematica = Number(question('Peso: '))


    const nota_humanas = Number(question('Nota Humanas: '))
    const peso_humanas = Number(question('Peso: '))

    const nota_natureza = Number(question('Nota Natureza: '))
    const peso_natureza = Number(question('Peso: '))

    const media_simples = calcular_media_simples(nota_redacao, nota_linguagens, nota_matematica, nota_humanas, nota_natureza)
    const media_ponderada = calcular_media_ponderada(nota_redacao, peso_redacao, nota_linguagens, peso_linguagens, nota_matematica, peso_matematica, nota_humanas, peso_humanas, nota_natureza, peso_natureza)
    const classificacao_obervacao = obter_classicacao(media_ponderada)

    console.log('****** SERIGATE NENEM ******')
    console.log('Aluno        : ${nome_aluno}')
    console.log('----------------------------')
    console.log(`Redação      : ${nota_redacao} (peso: ${peso_redacao})`)
    console.log(`Linguagens   : ${nota_linguagens} (peso: ${peso_linguagens})`)
    console.log(`Matemática   : ${nota_matematica} (peso: ${peso_matematica})`)
    console.log(`Humanas      : ${nota_humanas} (peso: ${peso_humanas})`)
    console.log(`Natureza     : ${nota_natureza} (peso: ${peso_natureza})`)
    console.log('----------------------------')
    console.log(`Média Simples: ${media_simples.toFixed(2)}\n`)
    console.log(`>>>>>>> RESULTADO <<<<<<<<<`)
    console.log(`Média Ponderada: ${media_ponderada.toFixed(2)}\n`)
    console.log(`Classificação: ${classificacao_obervacao}\n`)

}

function calcular_media_simples(n1, n2, n3, n4, n5){
    return (n1 + n2 + n3 + n4 + n5) / 5
}

function calcular_media_ponderada(n1, p1, n2, p2, n3, p3, n4, p4, n5, p5){
    return ((n1 * p1) + (n2 * p2) + (n3 * p3) + (n4 * p4) + (n5 * p5)) / (p1 + p2 + p3 + p4 + p5)
}

function obter_classicacao(nota_final){
    if(nota_final >= 0 && nota_final < 450){
        return `> INSUFICIENTE\nObservação: Impedido de ir para a faculdade. Deverá fazer mais um ano de ens. de reforço`
    }else if(nota_final >= 450 && nota_final < 650){
        return `> SUFICIENTE\nObservação: Poderá conseguir uma vaga. Porém em Curso/Universidade com baixa procura(nota de corte baixa)`
    }else if(nota_final >= 650 && nota_final < 750){
        return `> MUITO BOM\nObservação: Poderá pleitear vaga em bons Cursos/Universidades(nota de corte alta)`
    }else{
        return `> EXCELENTE\nObservação: Poderá escolher qualquer curso em qualquer Universidade de Serigate`
    }
}

main()
