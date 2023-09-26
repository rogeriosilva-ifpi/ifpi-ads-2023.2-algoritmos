import { question } from "readline-sync"

function main(){
    //Entrada
    const nome_aluno = question('Informe o nome do aluno: ')
    const redacao = obter_numero('Informe a pontuação na prova de redação: ')
    const quest_linguagens = obter_numero('Informe a quantidade de acertos em Linguagens: ')
    const quest_matematica = obter_numero('Informe a quantidade de acertos em Matemática: ')
    const quest_humanas = obter_numero('Informe a quantidade de acertos em Humanas: ')
    const quest_natureza = obter_numero('Informe a quantidade de acertos em Natureza: ')

    const peso_redacao = obter_numero('Informe o valor do Peso de Redação: ')
    const peso_linguagens = obter_numero('Informe o valor do Peso de Linguagens: ')
    const peso_matematica = obter_numero('Informe o valor do Peso de Matemática: ')
    const peso_humanas = obter_numero('Informe o valor do Peso de Humanas: ')
    const peso_natureza = obter_numero('Informe o valor do Peso de Natureza: ')

    //Processamento
    const nota1 = redacao
    const nota2 = calcular_nota(quest_linguagens)
    const nota3 = calcular_nota(quest_matematica)
    const nota4 = calcular_nota(quest_humanas)
    const nota5 = calcular_nota(quest_natureza)
    
    const media_simples = calcular_media_simples(nota1, nota2, nota3, nota4, nota5)

    const nota_final = calcular_media_ponderada(nota1, peso_redacao, nota2, peso_linguagens, nota3, peso_matematica, nota4, peso_humanas, nota5, peso_natureza)

    const [classificacao, observacao] = tabela_classificacao(nota_final)

    //Saída
    console.log('\n************* SERIGATE NENEM *************')
    console.log(`Aluno          : ${nome_aluno}`)
    console.log('------------------------------------------')
    console.log(`Redação        : ${nota1.toFixed(1)} (peso: ${peso_redacao})`)
    console.log(`Linguagens     : ${nota2.toFixed(1)} (peso: ${peso_linguagens})`)
    console.log(`Matemática     : ${nota3.toFixed(1)} (peso: ${peso_matematica})`)
    console.log(`Humanas        : ${nota4.toFixed(1)} (peso: ${peso_humanas})`)
    console.log(`Natureza       : ${nota5.toFixed(1)} (peso: ${peso_natureza})`)
    console.log('------------------------------------------')
    console.log(`Média simples  : ${media_simples.toFixed(1)}`)
    console.log('\n>>>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<<')
    console.log(`Média Ponderada   : ${nota_final.toFixed(1)}`)
    console.log(`Classificação   : ${classificacao}`)
    console.log(`Observação   : ${observacao}`)
    console.log('------------------------------------------\n')
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function calcular_nota(questoes){
    const nota = (questoes * 1000)/ 45
    return nota
}

function calcular_media_simples(nota1, nota2, nota3, nota4, nota5){
    const qtd_notas = 5
    const media_simples_notas = (nota1 + nota2 + nota3 + nota4 + nota5) / qtd_notas
    return media_simples_notas
}

function calcular_media_ponderada(nota1, peso1, nota2, peso2, nota3, peso3, nota4, peso4, nota5, peso5){
    const nota_final_ponderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4) + (nota5 * peso5))/ (peso1 + peso2 + peso3 + peso4 + peso5)
    return nota_final_ponderada
}

function tabela_classificacao(nota_final){
    if (nota_final >= 0 && nota_final < 450){
        const classicacao_nota = 'INSUFICIENTE'
        const observacao_nota = 'Impedido de ir para a Universidade. Deverá fazer mais um ano de ensino de reforço.'
        return [classicacao_nota, observacao_nota]
    }else if (nota_final >= 450 && nota_final < 650){
        const classicacao_nota = 'SUFICIENTE'
        const observacao_nota = 'Poderá conseguir uma vaga. Porém em Curso/Universidade com baixa procura (nota de corte baixa).'
        return [classicacao_nota, observacao_nota]
    }else if (nota_final >= 650 && nota_final < 750){
        const classicacao_nota = 'MUITO BOM'
        const observacao_nota = 'Poderá pleitear vaga em Bons Cursos/Universidades (nota de corte alta).'
        return [classicacao_nota, observacao_nota]
    }else if (nota_final >= 750 && nota_final <= 1000){
        const classicacao_nota = 'EXCELENTE'
        const observacao_nota = 'Poderá escolher qualquer curso em qualquer universidade de Serigate'
        return [classicacao_nota, observacao_nota]
    }
}

main()