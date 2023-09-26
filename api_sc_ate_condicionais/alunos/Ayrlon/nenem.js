import { question } from "readline-sync";

function main(){
    //entrada
    console.log(`(* * * * * * NENEM * * * * * *)\n`)
    const nome_aluno = question('Nome do aluno : ')

    console.log(`\n==> AREA : Redação `)
    const nota_redacao = Number(question('> Nota : '))
    const peso_redacao = Number(question('> Peso : '))

    console.log(`\n==> AREA : Linguagens `)
    const nota_linguagens = Number(question('> Nota : '))
    const peso_linguagens = Number(question('> Peso : '))

    console.log(`\n==> AREA : Matematica `)
    const nota_matematica = Number(question('> Nota : '))
    const peso_matematica = Number(question('> Peso : '))

    console.log(`\n==> AREA : Humanas `)
    const nota_humanas = Number(question('> Nota : '))
    const peso_humanas = Number(question('> Peso : '))

    console.log(`\n==> AREA : Natureza `)
    const nota_natureza = Number(question('> Nota : '))
    const peso_natureza = Number(question('> Peso : '))

    //processamento
    const nt_area_1 = nota_redacao
    const peso_1 = peso_redacao

    const nt_area_2 = calcular_nota_proporcional(nota_linguagens)
    const peso_2 = peso_linguagens

    const nt_area_3 = calcular_nota_proporcional(nota_matematica)
    const peso_3 = peso_matematica

    const nt_area_4 = calcular_nota_proporcional(nota_humanas)
    const peso_4 = peso_humanas

    const nt_area_5 = calcular_nota_proporcional(nota_natureza)
    const peso_5 = peso_natureza

    const media_simples = calcular_media_simples(nt_area_1,nt_area_2,nt_area_3,nt_area_4,nt_area_5)
    const media_ponderada = calcular_media_ponderada(nt_area_1,peso_1,nt_area_2,peso_2,nt_area_3,peso_3,nt_area_4,peso_4,nt_area_5,peso_5)

    const nota_final = media_ponderada
    const classificação = verificar_classificaçao(nota_final)
    const observação = retornar_observação(classificação)

    //saida
    console.log(`\n* * * * * * * * * * * *  SERIGATE NENEM * * * * * * * * * * * * *`)
    console.log(`Aluno        : ${nome_aluno}`)
    console.log(`----------------------------------------------------------------`)
    console.log(`Redação      : ${nt_area_1}     Peso : ${peso_redacao}`)
    console.log(`Linguagens   : ${nt_area_2}     Peso : ${peso_linguagens}`)
    console.log(`Matematica   : ${nt_area_3}     Peso : ${peso_matematica}`)
    console.log(`Humanas      : ${nt_area_4}     Peso : ${peso_humanas}`)
    console.log(`Natureza     : ${nt_area_5}     Peso : ${peso_natureza}`)
    console.log(`----------------------------------------------------------------`)
    console.log(`Media simples : ${media_simples.toFixed(2)} \n`)
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<<<<<<<<<<<`)
    console.log(`Media Ponderada : ${media_ponderada.toFixed(2)}`)
    console.log(`Classificação   : ${classificação}`)
    console.log(`Observação      : ${observação}`)

}

function calcular_nota_proporcional(nota){
    return Math.floor((nota * 1000) / 45)
}

function calcular_media_simples(nt_1,nt_2,nt_3,nt_4,nt_5){
    const media = (nt_1 + nt_2 + nt_3 + nt_4 + nt_5) / 5

    return media
}

function calcular_media_ponderada(nt_1,p_1,nt_2,p_2,nt_3,p_3,nt_4,p_4,nt_5,p_5){
    const media_p = (nt_1 * p_1 + nt_2 * p_2 + nt_3 * p_3 + nt_4 * p_4 + nt_5 * p_5) / (p_1 + p_2 + p_3 + p_4 + p_5)

    return media_p
}

function verificar_classificaçao(nota_final){
    if(nota_final >= 0 && nota_final < 450){
        return 'INSUFICIENTE'
    }
    else if(nota_final < 650){
        return 'SUFICIENTE'
    }
    else if(nota_final < 750){
        return 'MUITO BOM'
    }
    else if(nota_final >= 750 && nota_final <= 1000){
        return 'EXCELENTE'
    }
}

function retornar_observação(classificação){
    if(classificação === 'INSUFICIENTE'){
        return `Impedido de ir para a Universidade. Deverá fazer mais um ano de ensino de reforço. `
    }
    else if(classificação === 'SUFICIENTE'){
        return `Poderá conseguir uma vaga. Porém em Curso/Universidade com baixa procura(nota de corte baixa).`
    }
    else if(classificação === 'MUITO BOM'){
        return `Poderá pleitear vaga em Bons Cursos/Universidades. (nota de corte alta) `
    }
    else if(classificação === 'EXCELENTE'){
        return `Poderá escolher qualquer curso em qualquer universidade de Serigate. `
    }
}

main()