import {question} from 'readline-sync'


function main(){
    //Entrada
    const nome = question('Nome do aluno: ')
    const redacao = Number(question('\nPontos Redacao: '))
    const peso_redacao = Number(question('Peso Redacao: '))
    const linguagens = Number(question('\nQuestoes certas de Linguagens: '))
    const peso_ling = Number(question('Peso Linguagens: '))
    const matematica = Number(question('\nQuestoes certas de Matematica: '))
    const peso_mat = Number(question('Peso Matematica: '))
    const humanas = Number(question('\nQuestoes certas de Humanas: '))
    const peso_hum = Number(question('Peso Humanas: '))
    const natureza = Number(question('\nQuestoes certas de Natureza: '))
    const peso_nat = Number(question('Peso Natureza: '))

    //Processamento
    //notas
    const nota_ling = obter_nota(linguagens)
    const nota_mat = obter_nota(matematica)
    const nota_hum = obter_nota(humanas)
    const nota_nat = obter_nota(natureza)
    //medias
    const media_simples = calcular_media_simples(redacao, nota_ling, nota_mat, nota_hum, nota_nat)
    const nota_final = calcular_media_ponderada(redacao, peso_redacao, nota_ling, peso_ling, nota_mat, peso_mat, nota_hum, peso_hum, nota_nat, peso_nat)
    //classificação
    const classificacao = obter_classificacao(nota_final)
    
    //Saída
    console.log()
    console.log(`******************* SERIGATE NENEM *******************
    \n\nAluno             : ${nome}
    \n------------------------------------------------------
    \n\n                       NOTA        PESO
    \nRedação             : ${redacao.toFixed(2)}        ${peso_redacao}
    \nLinguagens          : ${nota_ling.toFixed(2)}        ${peso_ling}
    \nMatemática          : ${nota_mat.toFixed(2)}        ${peso_mat}
    \nHumanas             : ${nota_hum.toFixed(2)}        ${peso_hum}
    \nNatureza            : ${nota_nat.toFixed(2)}        ${peso_nat}
    \n------------------------------------------------------
    \n\nMédia Simples       : ${media_simples.toFixed(2)}
    \n
    \n>>>>>>>>>>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<<<<<<<<
    \nMédia Ponderada: ${nota_final.toFixed(2)}
    \n${classificacao}
    `)
}


function obter_nota(acertos){
    return (1000 * acertos) / 45
}


function calcular_media_simples(nota1, nota2, nota3, nota4, nota5){
    return (nota1 + nota2 + nota3 + nota4 + nota5) / 5
}


function calcular_media_ponderada(nota1, peso1, nota2, peso2, nota3, peso3, nota4, peso4, nota5, peso5){
    return ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4) + (nota5 * peso5)) / ((peso1 + peso2 + peso3 + peso4 + peso5))
}


function obter_classificacao(nota_final){ 
    if(nota_final >= 0 && nota_final < 450){
        return `Classificação: INSUFICIENTE
        \nObservação: Impedido de ir para a Universidade. Deverá fazer mais um ano de ensino de reforço.`
    }
    else if(nota_final >= 450 && nota_final < 650){
        return `Classificação: SUFICIENTE
        \nObservação: Poderá conseguir uma vaga. Porém em Curso/Universidade com baixa procura (nota de corte baixa).`
    }
    else if(nota_final >= 650 && nota_final < 750){
        return `Classificação: MUITO BOM
        \nObservação: Poderá pleitear vaga em Bons Cursos/Universidades (nota de corte alta).`
    }
    else{
        return `Classificação: EXCELENTE
        \nObservação: Poderá escolher qualquer curso em qualquer universidade de Serigate.`
    }


}


main()