import { question } from 'readline-sync'

function main(){
  const qtd = Number(question('Tamanho da Coleção: '))
  const minimo = Number(question('Valor Mínimo: '))
  const maximo = Number(question('Valor Máximo: '))
  const numeros = gerar_colecao(qtd, maximo, minimo)

  mostrar_colecao(numeros)

  // pegar somente os negativos
  // const filtrados = filtrar(numeros, eh_negativo)
  // const filtrados = filtrar(numeros, eh_par)
  let filtrados = filtrar(numeros, eh_par)
  mostrar_colecao(filtrados)

  filtrados = filtrar(filtrados, eh_positivo)
  mostrar_colecao(filtrados)

  filtrados = filtrar(filtrados, item => item > 10)
  mostrar_colecao(filtrados)

  let convertidos = mapear(filtrados, metade)
  mostrar_colecao(convertidos)

  convertidos = mapear(convertidos, item => item / 3)
  mostrar_colecao(convertidos)

  const somatorio = somar_valores(convertidos)
  // console.log(`Somatório  = ${somar_valores(mapear(filtrar(filtrar(numeros, eh_positivo), eh_impar), metade))}`)
  console.log(`Somatório  = ${somatorio}`)
}

function filtrar(vetor, criterio){
  const cestinha = []
  for(let item of vetor){
    if (criterio(item)){
      cestinha.push(item)
    }
  }

  return cestinha
}

function mapear(vetor, conversor){
  const cestinha = []
  for (let item of vetor){
    const item_convertido = conversor(item)
    cestinha.push(item_convertido)
  }

  return cestinha
}

function eh_negativo(numero){
  return numero < 0
}

function eh_positivo(numero){
  return numero > 0
}

function eh_par(numero){
  return numero % 2 === 0
}

function eh_impar(numero){
  return !eh_par(numero)
}

function metade(item){
  const novo_item = item / 2
  return novo_item
}


function somar_valores(negativos){
  let somatorio = 0
  for (let item of negativos){
    somatorio = somatorio + item
  }

  return somatorio
}

function gerar_colecao(qtd, maximo, minimo){
  const vetor = []
  for (let i = 0; i < qtd; i++){
    const item = obter_aletorio(maximo, minimo)
    vetor.push(item)
  }

  return vetor
}

function obter_aletorio(maximo, minimo = 0){
  const valor = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
  return valor
}


function mostrar_colecao(vetor){
  console.log('|----- VETOR -----|')
  for(let item of vetor){
    console.log(item)
  }
  console.log(`|----- ${vetor.length} itens -----|`)
}

main()