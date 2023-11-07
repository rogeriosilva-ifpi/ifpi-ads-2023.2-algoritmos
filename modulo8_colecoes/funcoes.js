function main(){
  executor(saudacao, 'Helo')
  executor(mostrar_dobro, 12)
}

function executor(funcao, parametro){
  funcao(parametro)
}

function mostrar_dobro(numero){
  const dobro = numero * 2
  console.log(`O dobro de ${numero} é ${dobro}`)
}

function saudacao(destinatario){
  console.log(`Olá ${destinatario}, seja feliz aqui!`)
}

main()
