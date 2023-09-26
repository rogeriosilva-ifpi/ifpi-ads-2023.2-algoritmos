import { question } from "readline-sync"

function main() {
    const nome = question('\nNome: ')

    const red = Number(question('\nNota Redacao: '))
    const p1 = Number(question('P1: '))
    const lin = Number(question('\nNota Linguagens: '))
    const p2 = Number(question('P2: '))
    const mat = Number(question('\nNota Matematica: '))
    const p3 = Number(question('P3: '))
    const hum = Number(question('\nNota Humanas: '))
    const p4 = Number(question('P4: '))
    const nat = Number(question('\nNota Natureza: '))
    const p5 = Number(question('P5: '))

    const nota_red = red
    const nota_lin = (lin / 45) * 1000
    const nota_mat = (mat / 45) * 1000
    const nota_hum = (hum / 45) * 1000
    const nota_nat = (nat / 45) * 1000

    const media = calcular_media(nota_red, nota_lin, nota_mat, nota_hum, nota_nat)
    const nota_final = calcular_media_ponderada(nota_red, nota_lin, nota_mat, nota_hum, nota_nat, p1, p2, p3, p4, p5)
    const classificacao = verifica_classificacao(nota_final)
    const observacao = verifica_observacao(classificacao)

    console.log(`\n-------> SERIGATE NENEM <-------`)
    console.log(`Aluno     : ${nome}`)
    console.log(`--------------------------------`)
    console.log(`Redação   : ${nota_red.toFixed(1)} (peso: ${p1})`)
    console.log(`Linguagens: ${nota_lin.toFixed(1)} (peso: ${p2})`)
    console.log(`Matemática: ${nota_mat.toFixed(1)} (peso: ${p3})`)
    console.log(`Humanas   : ${nota_hum.toFixed(1)} (peso: ${p4})`)
    console.log(`Natureza  : ${nota_nat.toFixed(1)} (peso: ${p5})`)
    console.log(`--------------------------------`)
    console.log(`Média Simples: ${media.toFixed(1)}`)
    console.log(`\n>>>>>>>>>> RESULTADO <<<<<<<<<<<`)
    console.log(`Média Ponderada: ${nota_final.toFixed(1)}`)
    console.log(`Classificação  : ${classificacao}`)
    console.log(`Observação     : ${observacao}`)
    console.log(`--------------------------------`)
}

function calcular_media(red, lin, mat, hum, nat) {
    return (red + lin + mat + hum + nat) / 5
}

function calcular_media_ponderada(n1, n2, n3, n4, n5, p1, p2, p3, p4, p5) {
    const soma_pesos = p1 + p2 + p3 + p4 + p5
    const media_ponderada = (n1 * p1 + n2 * p2 + n3 * p3 + n4 * p4 + n5 *p5) / soma_pesos
    return media_ponderada
}

function verifica_classificacao(nota_final) {
    if (nota_final <= 450) {
        return 'INSUFICIENTE'
    } else if (nota_final <= 650) {
        return 'SUFICIENTE'
    } else if (nota_final <= 750) {
        return 'MUITO BOM'
    } else { //nota_final <= 1000
        return 'EXCELENTE'
    }
}

function verifica_observacao(classificacao) {
    if (classificacao === 'INSUFICIENTE') {
        return 'Impedido de ir para a Universidade. Deverá fazer mais um ano de ensino de reforço.'
    } else if (classificacao === 'SUFICIENTE') {
        return 'Poderá conseguir uma vaga, porém em Curso/Universidade com baixa procura(nota de corte baixa).'
    } else if (classificacao === 'MUITO BOM') {
        return 'Poderá pleitear vaga em Bons Cursos/Universidades(nota de corte alta).'
    } else {
        return 'Poderá escolher qualquer curso em qualquer Universidade de Serigate.'
    }
}
main()