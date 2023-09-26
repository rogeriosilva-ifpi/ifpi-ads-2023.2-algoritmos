import { question } from "readline-sync";
function main(){
const nome_aluno = (question('Nome do aluno: '))
const Perc_ling = Number(question('Percentual de acerto em Linguagens: '))
const Perc_mat = Number(question('Percentual de acerto em Matemática: '))
const Perc_hum = Number(question('Pecentual de acerto em Humanas: '))
const Perc_nat= Number(question('Pecentual de acerto em Natureza: '))
const Nota_red =  Number(question('Nota da redação(entre 0 e 1000): '))
const peso_red = 5
const peso_ling = 3
const peso_mat = 5
const peso_hum = 2
const peso_nat = 2
const Nota_ling = Math.floor((((Perc_ling/100)/45) *1000)) 
const Nota_mat = Math.floor(((Perc_mat/100)/45) *1000) 
const Nota_hum= Math.floor(((Perc_hum/100)/45) *1000) 
const Nota_nat = Math.floor(((Perc_nat/100)/45) *1000) 
const nota_final = calculo_media_ponderada(Nota_red,Nota_ling,Nota_mat,Nota_hum,Nota_nat,peso_ling,peso_mat,peso_hum,peso_nat,peso_red)
function calculo_media_ponderada(Nota_red,Nota_ling,Nota_mat,Nota_hum,Nota_nat,peso_ling,peso_mat,peso_hum,peso_nat,peso_red){
    const nota_final = ((Nota_red * peso_red) + ( Nota_ling * peso_ling)  + (Nota_mat * peso_mat) + (Nota_nat * peso_nat) + (Nota_hum * peso_hum )) / peso_hum + peso_ling + peso_mat + peso_nat + peso_red
    return nota_final
}
console.log(`${nota_final}`)
const media_simples = Nota_hum + Nota_ling + Nota_mat + Nota_nat + Nota_red / 5
console.log(`******** SERIGATE NENEM *******
Aluno      : ${nome_aluno}
--------------------------------------------
Redação    : ${Nota_red} (peso: ${peso_red})
Linguagens : ${Nota_ling} (peso: ${peso_ling})
Matemática : ${Nota_mat} (peso: ${peso_mat})
Humanas    : ${Nota_hum} (peso: ${peso_hum})
Natureza   : ${Nota_nat} (peso: ${peso_nat})
--------------------------------------------
Média Simples :  ${media_simples}
`)
console.log(`>>>>>>> RESULTADO <<<<<<<<`)
console.log(`Média Ponderada: ${nota_final}` ) 
if(nota_final >= 0 && nota_final <= 450){
    console.log('Classificação: INSUFICENTE!')
    console.log('Observação: Impedido de ir para a Universidade. Deverá fazer mais um ano de ensino de reforço.')
}else if(nota_final >= 450 && nota_final <= 650){
    console.log('Classificação: SUFICIENTE!')
    console.log('Observação: Poderá conseguir uma vaga.Porém em Curso/Universidade com baixa procura(nota de corte baixa).')
}else if(nota_final >= 650 && nota_final <= 750){
    console.log('classificação: MUITO BOM!')
    console.log('Observação: Poderá pleitear vaga de Bons Cursos/Universidade.(nota de corte alta).')
}else{
    console.log('Classificação: EXCELENTE!')
    console.log('Observação: Poderá escolher qualquer curso em qualquer universidade de Serigate.')
}
console.log('--------------------------------------------')
}
main()
