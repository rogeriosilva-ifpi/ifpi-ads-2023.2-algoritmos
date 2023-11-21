
function main(){
  // const qtd = Number(question('Tamanho da Coleção: '))
  // const minimo = Number(question('Valor Mínimo: '))
  // const maximo = Number(question('Valor Máximo: '))
  // const numeros = gerar_colecao(qtd, maximo, minimo)
  const numeros = [8, 3, -2, 11, 5]
  mostrar_colecao(numeros)

  // pegar somente os negativos
  // const filtrados = filtrar(numeros, eh_negativo)
  // const filtrados = filtrar(numeros, eh_par)
  /*let filtrados = filtrar(numeros, eh_par)
  mostrar_colecao(filtrados)

  filtrados = filtrar(filtrados, eh_positivo)
  mostrar_colecao(filtrados)

  filtrados = filtrar(filtrados, item => item > 10)
  mostrar_colecao(filtrados)

  let convertidos = mapear(filtrados, metade)
  mostrar_colecao(convertidos)

  convertidos = mapear(convertidos, item => item / 3)
  mostrar_colecao(convertidos)
  
  const somatorio = reduzir(convertidos, 0)
  */

  // console.log(`Somatório  = ${somar_valores(mapear(filtrar(filtrar(numeros, eh_positivo), eh_impar), metade))}`)
  // const resultado = reduzir(numeros, somar, 0)
  // const resultado = reduzir(numeros, subtrair, 100)
  // const resultado = reduzir(numeros, (acc, atual) => acc * atual, 1)
  // const resultado = somar_valores(numeros)
  // const resultado = reduzir(numeros, maior_valor, -Infinity)
  // const resultado = reduzir(numeros, menor, +Infinity)
  // const resultado = reduzir(numeros, (acc, atual) => atual < acc ? atual : acc, +Infinity)
  const resultado = reduzir(numeros, funcao, 1)
  
  console.log(`Resultado  = ${resultado}`)
}

export function filtrar(vetor, criterio){
  const cestinha = []
  for(let item of vetor){
    if (criterio(item)){
      cestinha.push(item)
    }
  }

  return cestinha
}

export function mapear(vetor, conversor){
  const cestinha = []
  for (let item of vetor){
    const item_convertido = conversor(item)
    cestinha.push(item_convertido)
  }

  return cestinha
}

function maior_valor(valor1, valor2){
  if (valor1 > valor2){
    return valor1
  }
  return valor2
}

function reduzir(vetor, operacao, valor_inicial){
  let valor_reduzido = valor_inicial
  for (let item of vetor){
    valor_reduzido = operacao(valor_reduzido, item)
  }

  return valor_reduzido
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

function somar(valor1, valor2){
  return valor1 + valor2
}

function subtrair(valor1, valor2){
  return valor1 - valor2
}

function menor(valor1, valor2){
  return valor1 < valor2 ? valor1 : valor2
}


function somar_valores(vetor){
  // Tipo: REDUCE
  let somatorio = 0
  for (let item of vetor){
    somatorio = somatorio + item
  }

  return somatorio
}

function media_valores(vetor){
  // Tipo: REDUCE
  let media = vetor[0]
  for (let item of vetor){
    media = (media + item) / 2
  }

  return media 
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

// main()