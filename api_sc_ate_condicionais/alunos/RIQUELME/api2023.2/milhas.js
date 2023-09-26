import { question } from "readline-sync"

function milhas (){
    const nome = question('Digite o seu nome: ')

    const qtd_milhas = Number(question('Digite a quantidade de milhas (Só é possível comprar múltiplos de 1000): '))
    const milheiros = qtd_milhas / 1000
    const compra_milheiros = milheiros * 70


    const desconto = Number(question('  Digite o percentual de desconto: '))
    const desconto_total = calcular_desconto(compra_milheiros, desconto, desconto_total)
    const bonus = Number(question('Digite o percentual de bônus: '))


    console.log('*********** COMPRA DE MILHAS ****************')
    console.log(`Nome              : ${nome}`)
    console.log('Valor Ref.        : R$ 70,00/milheiro')
    console.log(`Milhas comprar    : ${qtd_milhas}`)
    console.log(`Desconto          : ${desconto_total}`)
    console.log(`Bônus             : ${bonus}`)




function calcular_desconto(preco_inicial, desconto, preco_final){
    const preco_inicial = Number(question('Preço inicial: '))
    const desconto = Number(question('Desconto: '))
    const preco_final = preco_inicial - (desconto/100)
    return preco_final


}








}
milhas()


