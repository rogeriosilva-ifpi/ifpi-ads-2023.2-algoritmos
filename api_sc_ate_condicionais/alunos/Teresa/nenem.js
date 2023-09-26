//3.nenem

import { question } from "readline-sync";
function main(){
    //cabeçalho
    console.log('---------- Serigate NENEM -----------')
    const nome = question('Qual seu nome?')
    const curso = question('Qual é o seu curso dos sonhos? ')
    console.log(`Muito bem ${nome}, preencha com a suas informações: `)
   
    //Entrada
    const redacao = Number(question('\nDigite sua nota na Redação: '))
    const peso_r = Number(question('Digite o peso para Redação no seu curso: '))

    const linguagens = Number(question('\nDigite sua nota na área de linguagens: '))
    const peso_l = Number(question('Digite o peso para linguagens no seu curso: '))

    const humanas = Number(question('\nDigite sua nota na área de humanas: '))
    const peso_h = Number(question('Digite o peso para humanas no seu curso: '))

    const matematica = Number(question('\nDigite sua nota na área de matemática: '))
    const peso_m = Number(question('Digite o peso para matemática no seu curso: '))

    const naturezas = Number(question('\nDigite sua nota na área de naturezas: '))
    const peso_n = Number(question('Digite o peso para naturezas no seu curso: '))

    //Processamento
    const media = ((redacao + linguagens + humanas + matematica + naturezas)/5)
    const nota_final = calcular_nota_final(redacao, peso_r, linguagens, peso_l, humanas, peso_h, matematica, peso_m, naturezas, peso_n)
    const classificacao = classificar_nota(nota_final)
    const observacao = observar_nota(nota_final)

    //Saída
    console.log('\n********** SERIGATE NENEM **********')
    console.log(`Aluno           : ${nome}`)
    console.log('---------------------------------------')
    console.log(`Redação         : ${redacao} peso: ${peso_r}`)
    console.log(`Linguagens      : ${linguagens} peso: ${peso_l}`)
    console.log(`Linguagens      : ${humanas} peso: ${peso_h}`)
    console.log(`Linguagens      : ${matematica} peso: ${peso_m}`)
    console.log(`Linguagens      : ${naturezas} peso: ${peso_n}`)
    console.log('---------------------------------------')
    console.log(`Média Simples   : ${media}`)
    console.log('\n>>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<')
    console.log(`Média Ponderada : ${nota_final.toFixed(2)}`)
    console.log(`Classificação   : ${classificacao}`)
    console.log(`Observação      : ${observacao}`)
    console.log('---------------------------------------')

    console.log(`${nome}, obrigada por utilizar nosso sistema! volte sempre!`)
}

function calcular_nota_final(redacao, peso_r, linguagens, peso_l, humanas, peso_h, matematica, peso_m, naturezas, peso_n){
    const notas = (redacao* peso_r) + (linguagens * peso_l) + (humanas * peso_h) + (matematica * peso_m) + (naturezas * peso_n)
    const pesos = peso_r + peso_l + peso_h + peso_m + peso_n
    const media_p = notas / pesos
    return media_p
}

function classificar_nota(nota_final){
    if(nota_final< 450){
        return 'INSUFICIENTE!'
    } else if(nota_final>= 450 && nota_final<650){
        return 'SUFICIENTE!'
    } else if (nota_final>= 650 && nota_final<750){
        return 'MUITO BOM!'
    } else if(nota_final>=750 && nota_final<1000){
        return 'EXCELENTE!'
    }
}

function observar_nota(nota_final){
    if(nota_final< 450){
        return 'NÃO APROVADO! Tente novamente no próximo ano!'
    } else if(nota_final>= 450 && nota_final<650){
        return 'Poderá tentar vaga em algum curso com nota de corte menor!'
    } else if (nota_final>= 650 && nota_final<750){
        return 'Poderá pleitear vaga em cursos de notas de corte altas! '
    } else if(nota_final>=750 && nota_final<1000){
        return 'Poderá escolher qualquer curso em qualquer universidade de Serigate! Parabéns!'
    } 
}
main()