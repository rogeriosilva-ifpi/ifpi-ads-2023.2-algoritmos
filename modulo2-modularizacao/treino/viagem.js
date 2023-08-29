import { question } from "readline-sync"


function main(){
    //Pedindo infos (entrada)
    console.log('━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ Simulador de Viagem ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━')

    const distancia_total = Number(question('\nDistancia total (km) prevista: '))
    const preco_alcool = Number(question('Preco (R$) do litro de alcool: '))
    const preco_gasolina = Number(question('Preco (R$) do litro de gasolina: '))
    const porc_uso_eletrico = Number(question('Percentual (%) da viagem feita com motor eletrico: '))
    const consumo_gasolina = Number(question('\nConsumo de gasolina do veiculo (km/l): '))
    const consumo_alcool = Number(question('\nConsumo de alcool do veiculo (km/l): '))

    //Processando infos
    const distancia_parcial = calcular_distancia_parcial(distancia_total, porc_uso_eletrico)
    
    //alcool
    const litros_alcool = distancia_parcial / consumo_alcool
    const custo_alcool = preco_alcool * litros_alcool
    
    //gasolina
    const litros_gasolina = distancia_parcial / consumo_gasolina
    const custo_gasolina = preco_gasolina * litros_gasolina

    //Tabela comparativa com os resultados
    console.log(`\nCusto para percorrer os ${distancia_parcial}km restantes da viagem:`)
    console.log()
    console.log(`         |    Litros    |      Preço    `)
    console.log()
    console.log(`Álcool       ${(litros_alcool).toFixed(2)}l         ${rs(custo_alcool)}`)
    console.log(`Gasolina     ${(litros_gasolina).toFixed(2)}l         ${rs(custo_gasolina)}`)
}


function rs(valor){
    const formatado = `R$ ${(valor).toFixed(2)}`
    return formatado
}


function calcular_distancia_parcial(distancia_total, porc_uso_eletrico){
    const distancia_eletrico = (porc_uso_eletrico / 100) * distancia_total
    const distancia_parcial = distancia_total - distancia_eletrico
    return distancia_parcial
}


main()