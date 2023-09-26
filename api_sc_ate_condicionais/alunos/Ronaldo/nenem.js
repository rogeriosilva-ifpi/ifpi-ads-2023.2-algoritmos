import {question} from 'readline-sync'

function main(){
    //Entrada
    const nome = (question('Digite o seu nome: '))
    const questoes_linguagens = Number(question('Digite quantas questoes acertou na prova linguagens: '))
    const peso_linguagens = Number(question('Digite o peso da nota de linguagens: '))
    const questoes_humanas = Number(question('Digite quantas questoes acertou na prova de humanas: '))
    const peso_humanas = Number(question('Digite o peso da nota de humanas: '))
    const questoes_matematica = Number(question('Digite quantas questoes acertou na prova de matematica: '))
    const peso_matematica = Number(question('Digite o peso da nota de matematica: '))
    const questoes_natureza = Number(question('Digite quantas questoes acertou na prova de natureza: '))
    const peso_natureza = Number(question('Digite o peso da nota de natureza: '))
    const nota_redacao = Number(question('Digite a nota da redacao: '))
    const peso_nota_redacao = Number(question('Digite o peso da nota da redacao: '))

    //Processamento
    const nota_linguagens = ((questoes_linguagens / 45) * 1000)
    const nota_humanas = ((questoes_humanas / 45) * 1000)
    const nota_matematica = ((questoes_matematica / 45) * 1000)
    const nota_natureza = ((questoes_natureza / 45) * 1000)
    
    const media_simples = ((nota_linguagens + nota_humanas + nota_matematica + nota_natureza + nota_redacao) / 5)
    const media_ponderada = calcular_media_ponderada(nota_linguagens, peso_linguagens, nota_humanas, peso_humanas, nota_matematica, peso_matematica, nota_natureza, peso_natureza, nota_redacao, peso_nota_redacao)
    const classificacao = verificar_classificacao(media_ponderada)
    const observacao = verificar_observacao(media_ponderada)

    //Saída
    console.log(`************** SERIGATE NENEM **************`)
    console.log(`Aluno          : ${nome}`)
    console.log(`____________________________________________`)
    console.log(`Redação        : ${nota_redacao.toFixed(2)}     Peso: ${peso_nota_redacao}`)
    console.log(`Linguagens     : ${nota_linguagens.toFixed(2)}     Peso: ${peso_linguagens}`)
    console.log(`Matemática     : ${nota_matematica.toFixed(2)}     Peso: ${peso_matematica}`)
    console.log(`Humanas        : ${nota_humanas.toFixed(2)}     Peso: ${peso_humanas}`)
    console.log(`Natureza       : ${nota_natureza.toFixed(2)}     Peso: ${peso_natureza}`)
    console.log(`____________________________________________`)
    console.log(`Média Simples  : ${media_simples.toFixed(2)}`)
    console.log(`>>>>>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<<<<`)
    console.log(`Média Ponderada: ${media_ponderada.toFixed(2)}`)
    console.log(`Classificação  : ${classificacao}`)
    console.log(`Observação     : ${observacao}`)
    console.log(`____________________________________________`)

}

function calcular_media_ponderada(nota_linguagens, peso_linguagens, nota_humanas, peso_humanas, nota_matematica, peso_matematica, nota_natureza, peso_natureza, nota_redacao, peso_nota_redacao){
    const resultado = (((peso_linguagens*nota_linguagens) + (peso_humanas*nota_humanas) + (peso_matematica*nota_matematica) + (peso_natureza*nota_natureza) + (peso_nota_redacao*nota_redacao)) / (peso_linguagens + peso_humanas + peso_natureza + peso_matematica + peso_nota_redacao))
    return resultado
}

function verificar_classificacao(media_ponderada){
    if(media_ponderada > 0 && media_ponderada < 450){
        return 'INSUFICIENTE!'
    }else if(media_ponderada > 450 && media_ponderada < 650){
        return 'SUFICIENTE!'
    }else if(media_ponderada > 650 && media_ponderada < 750){
        return 'MUITO BOM!'
    }else if(media_ponderada > 750 && media_ponderada < 1000){
        return 'EXCELENTE!'
    }else{
        return 'A NOTA DIGITADA É INVÁLIDA!'
    }
}

function verificar_observacao(media_ponderada){
    if(media_ponderada > 0 && media_ponderada < 450){
        return 'Impedido de ir para a Universidade. Deverá fazer mais um ano de ensino de reforço!'
    }else if(media_ponderada > 450 && media_ponderada < 650){
        return 'Poderá conseguir uma vaga. Porém em Curso/Universidade com baixa procura(nota de corte baixa.)!'
    }else if(media_ponderada > 650 && media_ponderada < 750){
        return 'Poderá pleitear vaga em bons Cursos/Universidades(nota de corte alta.)!'
    }else if(media_ponderada > 750 && media_ponderada < 1000){
        return 'Poderá escolher qualquer curso em qualquer universidade de Serigate!'
    }else{
        return 'A NOTA DIGITADA É INVÁLIDA!'
    }
}
main()