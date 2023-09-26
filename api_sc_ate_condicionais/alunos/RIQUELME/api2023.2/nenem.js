import { question } from "readline-sync"

function serigate (){

    // NOME DO ALUNO
    const nome = question('Digite o nome do aluno: ')

    // NOTA DE LINGUAGENS
    console.log ('------------------------ LINGUAGENS ---------------------------')
    const acertos_linguagens = Number(question('Quantidade de acertos: '))
    const nota_linguagens = (acertos_linguagens/45) * 1000 

    // NOTA DE MATEMÁTICA
    console.log ('------------------------ MATEMÁTICA ---------------------------')
    const acertos_matematica = Number(question('Quantidade de acertos: '))
    const nota_matematica = (acertos_matematica/45) * 1000 
    
    // NOTA DE HUMANAS
    console.log ('------------------------ HUMANAS ---------------------------')
    const acertos_huamanas = Number(question('Quantidade de acertos: '))
    const nota_humanas = (acertos_huamanas/45) * 1000 
    
    // NOTA DE NATUREZA
    console.log ('------------------------ NATUREZA ---------------------------')
    const acertos_natureza = Number(question('Quantidade de acertos: '))
    const nota_natureza = (acertos_natureza/45) * 1000 
    

    // NOTA DE REDAÇÃO
    console.log ('------------------------ REDAÇÃO ---------------------------')
    const nota_redacao = Number(question('Nota em redação: '))
    

    // PESOS DE CADA ÁREA
    console.log ('------------------------ PESOS ---------------------------')
    const peso_linguagens = Number(question('Peso da nota de linguagens: '))
    const peso_matematica = Number(question('Peso da nota de matematica: '))
    const peso_humanas = Number(question('Peso da nota de humanas: '))
    const peso_natureza = Number(question('Peso da nota de natureza: '))
    const peso_redacao = Number(question('Peso da nota de redação: '))
    
    
    //MEDIA SIMPLES
    const media_simples = (nota_redacao + nota_linguagens + nota_matematica + nota_humanas + nota_natureza) / 5


    // RESULTADO DE NOTAS E PESOS
    console.log ('************** SERIGATE ENEM **********************')
    console.log(`Aluno                : ${nome}`)
    console.log ('---------------------------------------------------')
    console.log(`Redação              : ${nota_redacao.toFixed(1)} (Peso: ${peso_redacao})`)
    console.log(`Linguagens           : ${nota_linguagens.toFixed(1)} (Peso: ${peso_linguagens})`)
    console.log(`Matemática           : ${nota_matematica.toFixed(1)} (Peso: ${peso_matematica})`)
    console.log(`Humanas              : ${nota_humanas.toFixed(1)} (Peso: ${peso_humanas})`)
    console.log(`Natureza             : ${nota_natureza.toFixed(1)} (Peso: ${peso_natureza})`)
    console.log ('---------------------------------------------------')
    console.log(`Média simples        : ${media_simples.toFixed(1)} `)

    //CÁLCULO DO RESULTADO FINAL
    const media_ponderada = calcular_media_ponderada(nota_linguagens, peso_linguagens, nota_matematica, peso_matematica, nota_humanas, peso_humanas, nota_natureza, peso_natureza, nota_redacao, peso_redacao)
    const classificacao_final = classificacao(media_ponderada)
    const observacao_final = observacao(media_ponderada)


    // RESULTADO FINAL
    console.log ('>>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<<<<<<<<<<<<<')
    console.log(`Média ponderada      : ${media_ponderada.toFixed(0)}`)
    console.log(`Classificação        : ${classificacao_final} `)
    console.log(`Observação           : ${observacao_final} `)
    

    // FUNÇÕS UTILIZADAS 

    function calcular_media_ponderada(a1, p1, a2, p2, a3, p3, a4, p4, a5, p5){
        const media_ponderada = (a1*p1 + a2*p2 + a3*p3 + a4*p4 + a5*p5) / (p1 + p2 + p3 + p4 + p5)
        return media_ponderada
    }


    function classificacao(media_final){
        if ( media_final >= 0 && media_final < 450){
            return 'INSUFICIENTE'

        } else if (media_final >= 450 && media_final < 650){
            return'SUFICIENTE'

        } else if (media_final >= 650 && media_final < 750){
            return 'MUITO BOM'

        } else{
            return 'EXCELENTE'
        }
    }

    function observacao(media_final){
        if ( media_final >= 0 && media_final < 450){
            return 'Impedido de ir para a faculdade. Deverá fazer mais um ano de ensino de reforço'

        } else if (media_final >= 450 && media_final < 650){
            return 'Poderá conseguir uma vaga. Porém em Curso/Universidade com baixa procura (nota de corte baixa'

        } else if (media_final >= 650 && media_final < 750){
            return 'Poderá pleitar vaga em Bons Cursos/Universidades. (nota de corte alta)'

        } else{
            return 'Poderá escolher qualquer curso em qualquer universidade de Serigate'
        }
    }


}

serigate()