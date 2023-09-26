import { question } from "readline-sync";

function main(){

    // Entrada
    console.log('######### Olá, bem vindo ao Serigate Nenem Simulator! ##########')
    const nome = question('Qual o seu nome?')
    // Redação
    const nota_redacao = Number(question('Qual foi a nota da sua Redacao?'))
    const peso0 = Number(question('Qual o peso da area "Redacao"?'))
    // Linguagens 
    const linguagens = Number(question('Quantos acertos em Linguagens?'))
    const nota1 = ((linguagens/45)*1000)
    const peso1 = Number(question('Qual o peso da area "Linguagens"?'))
    // Matematica
    const matematica = Number(question('Quantos acertos em Matematica?'))
    const nota2 = ((matematica/45)*1000)
    const peso2 = Number(question('Qual o peso da area "Matematica"?'))
    // Humanas
    const humanas = Number(question('Quantos acertos em Humanas?'))
    const nota3 = ((humanas/45)*1000)
    const peso3 = Number(question('Qual o peso da area "Humanas"?'))
    // Natureza
    const natureza = Number(question('Quantos acertos em Natureza?'))
    const nota4= ((natureza/45)*1000)
    const peso4 = Number(question('Qual o peso da area "Natureza"?'))

    // Processamento
    const media = calcular_media(nota_redacao, peso0, nota1, peso1, nota2, peso2, nota3, peso3, nota4, peso4)
    const classificacao = classificacao_aluno (media)
    const observacao = classificacao_observacao(media)
    const media_simples = (nota_redacao+nota1+nota2+nota3+nota4)/5

    // Saída
    console.log(
        `*********** SERIGATE NENEM ************
        Aluno     : ${nome}
        ----------------------------------------
        Redação   : ${nota_redacao.toFixed(2)} pontos; peso: ${peso0}
        Linguagens: ${nota1.toFixed(2)} pontos;  peso: ${peso1}
        Matematica: ${nota2.toFixed(2)} pontos; peso: ${peso2}
        Humanas   : ${nota3.toFixed(2)} pontos; peso: ${peso3}
        Natureza  : ${nota4.toFixed(2)} pontos; peso: ${peso4}
        ----------------------------------------
        Média Simples: ${media_simples.toFixed(2)} pontos

        >>>>>>>>>> RESULTADO <<<<<<<<<<
        Média Ponderada: ${media.toFixed(2)}
        Classificação: ${classificacao}
        Observação: ${observacao}
        ----------------------------------------
        `)


}


function calcular_media(nota_redacao, peso0, nota1, peso1, nota2, peso2, nota3, peso3, nota4, peso4){
    const calculando_media = ((nota_redacao * peso0)+ (nota1 * peso1)+ (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4))/(peso0 + peso1 + peso2+ peso3+ peso4)
    return calculando_media
}  

function classificacao_aluno (media){
    if(media < 450){
        return 'INSUFICIENTE'
    }else if(media < 650){
        return 'SUFICIENTE'
    }else if(media < 750){
        return 'MUITO BOM'
    }else{
        return 'EXCELENTE'
    }
}

function classificacao_observacao(media){
    if(media < 450){
        return 'Impedido de ir para a Universidade. Deverá fazer mais um ano de ensino de reforço.'
    }else if(media < 650){
        return 'Poderá conseguir uma vaga. Porém em Curso/Universidade com baixa procura(nota de corte baixa).'
    }else if(media < 750){
        return 'Poderá pleitear vaga em Bons Cursos/Universidades(nota de corte alta)'
    }else{
        return 'Parabéns! Poderá escolher qualquer curso em qualquer universidade de Serigate!'
    }
}
 

main()