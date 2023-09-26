import {question} from 'readline-sync'

function main(){

const nome_aluno = (question('seu nome? '))
const nota_redacao = Number(question('sua nota em redação? '))
const nota_linguagens = Number(question('sua nota em linguagens? '))
const nota_matematica = Number(question('sua nota em matematica? '))
const nota_humanas = Number(question('sua nota em humanas? '))
const nota_natureza = Number(question('sua nota em natureza? '))
const peso_redacao = Number(question('qual é o peso em redação? '))
const peso_linguagens = Number(question('qual é o peso em linguagens? '))
const peso_matematica = Number(question('qual é o peso em matematica? '))
const peso_humanas = Number(question('qual é o peso em humanas? '))
const peso_natureza = Number(question('qual é o peso em natureza? '))

const nota_proporcional = calcular_nota_proporcional(nota_humanas, nota_linguagens, nota_matematica, nota_natureza) 
const media_simples = calcular_media_simples(nota_humanas_proporcional, nota_linguagens_proporcional, nota_matematica_proporcional, nota_natureza_proporcional, nota_redacao, peso_redacao, peso_humanas, peso_linguagens, peso_natureza, peso_matematica)
}  

function calcular_nota_proporcional(nota_humanas, nota_linguagens, nota_matematica, nota_natureza){
if (nota_humanas_proporcional = nota_humanas/45*1000){
    return nota_humanas_proporcional
}if (nota_linguagens_proporcional = nota_linguagens/45*1000){
    return nota_linguagens_proporcional
}if (nota_matematica_proporcional = nota_matematica/45*1000){
    return nota_matematica_proporcional
}if (nota_natureza_proporcional = nota_natureza/45*1000){
    return nota_natureza_proporcional
}
}

console.log(`${nome_aluno}`)
console.log(`${nota_redacao} peso: ${peso_redacao}`)
console.log(`${nota_linguagens_proporcional} peso: ${peso_linguagens}`)
console.log(`${nota_matematica_proporcional} peso: ${peso_matematica}`)
console.log(`${nota_humanas_proporcional} peso: ${peso_humanas}`)
console.log(`${nota_natureza_proporcional} peso: ${peso_natureza}`)


function calcular_media_simples(nota_humanas_proporcional, nota_linguagens_proporcional, nota_matematica_proporcional, nota_natureza_proporcional, nota_redacao, peso_redacao, peso_humanas, peso_linguagens, peso_natureza, peso_matematica){

}


console.log(`Media Simples: ${media_simples}`)


}
const media_ponderada = calcular_media_ponderada
function calcular_media_ponderada(){

}
function verificar_classificação(){

}
function observação(){

}
console.log(`${media_ponderada}`)
console.log(`${classificacao}`)
console.log(`${observacao}`)


main()