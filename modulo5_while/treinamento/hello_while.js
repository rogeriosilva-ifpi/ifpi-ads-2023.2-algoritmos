function main(){
  console.log('Início')
  let contador = 0

  while (contador < 10){
    if (eh_volta_par(contador)){
      console.log(`Hello ${contador+1}*`)
    }else{
      console.log(`Hello ${contador+1}`)
    }

    contador = contador + 1
  }

  console.log('Fim.')
}

function eh_volta_par(contador){
  return (contador+1) % 2 === 0
}

main()