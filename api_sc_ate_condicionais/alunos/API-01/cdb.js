import { question } from "readline-sync";

//Entrada
const valor_investido = Number(question("Valor investido no CDB: "))
const taxa = Number(question("Taxa de juros do CDB(% a.a): "))
const prazo = Number(question("Prazo de vencimento (em anos): "))

//calcular juros cdb


//Processamento
const montante = valor_investido * Math.pow(1 + taxa / 100, prazo)
const juros = (montante - valor_investido)

//Saida
console.log(` #### Investimento em CDB ####`)
console.log(`Montante no final do prazo: R$: ${montante.toFixed(2)}`)
console.log(`Juros acumulado: R$ ${juros.toFixed(2)}`)

//CDC
console.log(" #### Emprestimo #### ")
const emprestimo = Number(question("Valor do emprestimo: "))
const taxa_cdc = Number(question("Taxa de juros do CDC (% ao mes): "))
const prazo_cdc = Number(question("Prazo do emprestimo (em meses): "))

//Processamento

const parcela_cdc = emprestimo * Math.pow(1 + taxa_cdc / 100, prazo_cdc)
const juros_cdc = (parcela_cdc * parcela_cdc - emprestimo)

//Saida
console.log("#### Emprestimo CDC ####")
console.log(`Valor das parcelas: R$ ${parcela_cdc.toFixed(2)}`)
console.log(`Juros totais: R$ ${juros_cdc.toFixed(2)}`)

const lucro_banco = juros_cdc - juros
console.log("#### Lucro do Banco ####")
console.log(`Lucro total do banco: R$ ${lucro_banco.toFixed(2)}`)
